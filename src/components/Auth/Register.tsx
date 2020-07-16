import React from 'react';
import { useForm } from "react-hook-form";
import { Input, SubmitButton } from '../../styles/components';
import { Title } from '../../styles/layout'
import { FormPanel } from './styles';

type FormInput = {
    email: string;
    password: string;
    lastName: string;
    firstName: string;
    confirmPassword: string;
  };

export const Register = () => {
  const { register, handleSubmit, formState } = useForm<FormInput>( { mode: 'onChange' });
  const onSubmit = (data: FormInput) => console.log(data);
  const isDisabled = !formState.isValid;
  return (
    <>
    <Title data-testid="register-title">Register</Title>
    <FormPanel>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" name="auth_register">
      <Input
        name="email"
        placeholder="Email Address"
        ref={register({ required: true })}
        autoComplete="email"
      />
      <Input
        name="firstName"
        placeholder="First Name"
        ref={register({ required: true })}
      />
      <Input
        name="lastName"
        placeholder="Last Name"
        ref={register({ required: true })}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        ref={register({ required: true })}
        autoComplete="new-password"
      />
      <Input
        name="confirmpassword"
        type="password"
        placeholder="Confirm Password"
        ref={register({ required: true })}
        autoComplete="new-password"
      />

      <SubmitButton value="Reigster" disabled={isDisabled}/>
    </form>
    </FormPanel>
    </>
  )
};
