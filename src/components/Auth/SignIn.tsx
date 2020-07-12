import React from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { Input, SubmitButton } from '../../styles/components';
import { rounded } from '../../styles/mixins';
import { Title } from '../../styles/layout';
import { SignInFormInput } from '../../auth/authTypes';
import { signIn } from '../../auth/authService';

const SignInFormPanel = styled.div`
  border: 1px solid ${props => props.theme.colorNeptune};
  ${rounded}
  margin-top: 16px;
  > form {
    padding: 16px;
    width: 60%
  }
`;

export const SignIn = () => {
  const { register, handleSubmit, formState } = useForm<SignInFormInput>( { mode: 'onChange' });
  const onSubmit = (data: SignInFormInput) => {
      signIn(data).then(response => console.log(response));
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
