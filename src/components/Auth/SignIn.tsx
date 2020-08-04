import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Input, SubmitButton } from '../../styles/components';
import { Title } from '../../styles/layout';
import { SignInFormInput } from '../../auth/authTypes';
import { login } from '../../auth/authService';
import { FormPanel } from './styles';
import { transformObjectKeys } from '../../utilities/objectFormatter';
import { isAuthorisedVar, toastNotificationVar } from '../../apollo/appState';
import { ToastTypes } from '../../apollo/types';

export const SignIn = () => {
  const { register, handleSubmit, formState } = useForm<SignInFormInput>({ mode: 'onChange' });
  const history = useHistory();

  const onSubmit = (formInput: SignInFormInput) => {
    login(formInput).then(({ data }) => {
      const transData = transformObjectKeys(data);
      localStorage.setItem('auth', JSON.stringify(transData));
      isAuthorisedVar(true);
      const notification = { toastType: 'success' as ToastTypes, title: 'Success', message: 'Logged into account' };
      toastNotificationVar(notification);
      history.push('/');
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
  );
};
