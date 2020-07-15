import React from 'react';
import styled from 'styled-components';
import { camelCase, reduce, isPlainObject, isArray } from 'lodash';
import { useForm } from "react-hook-form";
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { Input, SubmitButton } from '../../styles/components';
import { rounded } from '../../styles/mixins';
import { Title } from '../../styles/layout';
import { SignInFormInput } from '../../auth/authTypes';
import { login } from '../../auth/authService';
import { SET_AUTH } from '../../apollo/cache';

const SignInFormPanel = styled.div`
  border: 1px solid ${props => props.theme.colorNeptune};
  ${rounded}
  margin-top: 16px;
  > form {
    padding: 16px;
    width: 60%
  }
`;

export const toCamelCase = (obj: object): object => {
  return reduce(obj, (result, value, key) => {
    const finalValue = isPlainObject(value) || isArray(value) ? toCamelCase(value) : value;
    return { ...result, [camelCase(key)]: finalValue };
  }, {});
};

export const SignIn = () => {
  const { register, handleSubmit, formState } = useForm<SignInFormInput>( { mode: 'onChange' });
  const history = useHistory();
  const [ setIsAuthorised ] = useMutation(SET_AUTH, {
    onCompleted() {
      history.push('/');
    }
  });

  const onSubmit = (formInput: SignInFormInput) => {
      login(formInput).then(( { data }) => {
        const transData = toCamelCase(data);
        localStorage.setItem('auth', JSON.stringify(transData));
        setIsAuthorised({ variables: { isAuthorised: true }})
      });
  };
  const isDisabled = !formState.isValid;
  return (
    <>
    <Title data-testid="signin-title">Sign in</Title>
    <SignInFormPanel>
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

      <SubmitButton value="Sign in" disabled={isDisabled}/>
    </form>
    </SignInFormPanel>
    </>
  )
};
