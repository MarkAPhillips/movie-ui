import React from 'react';
import { useForm } from "react-hook-form";
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { Input, SubmitButton } from '../../styles/components';
import { Title } from '../../styles/layout';
import { SignInFormInput } from '../../auth/authTypes';
import { login } from '../../auth/authService';
import { SET_AUTH, SET_NOTIFICATION } from '../../apollo/cache';
import { FormPanel } from './styles';
import { transformObjectKeys } from '../../utilities/objectFormatter';

export const SignIn = () => {
  const { register, handleSubmit, formState } = useForm<SignInFormInput>({ mode: 'onChange' });
  const history = useHistory();
  const [setNotification] = useMutation(SET_NOTIFICATION);
  const [setIsAuthorised] = useMutation(SET_AUTH, {
      onCompleted() {
        history.push('/');
        const notification = { toastType: 'success', title: 'Success', message: 'Logged into account', __typeName: 'NotificationInput' };
        setNotification({ variables: { notification } });
      }
    });

  const onSubmit = (formInput: SignInFormInput) => {
    login(formInput).then(({ data }) => {
      const transData = transformObjectKeys(data);
      localStorage.setItem('auth', JSON.stringify(transData));
      setIsAuthorised({ variables: { isAuthorised: true } })
    });
  };
  const isDisabled = !formState.isValid;
  return (
    <>
      <Title data-testid="signin-title">Sign in</Title>
      <FormPanel>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" name="auth_signin">
          <Input
            name="email"
            placeholder="Email Address"
            ref={register({ required: true })}
            autoComplete="email"
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            ref={register({ required: true })}
            autoComplete="new-password"
          />

          <SubmitButton value="Sign in" disabled={isDisabled} />
        </form>
      </FormPanel>
    </>
  )
};
