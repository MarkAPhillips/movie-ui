import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Input, SubmitButton } from '../../styles/components';
import { registration } from '../../auth/authService';
import { Title } from '../../styles/layout';
import { FormPanel } from './styles';

type FormInput = {
    email: string;
    password1: string;
    lastName: string;
    firstName: string;
    password2: string;
  };

export const Register = () => {
  const { register, handleSubmit, formState } = useForm<FormInput>({ mode: 'onChange' });
  const history = useHistory();

  const onSubmit = (formInput: FormInput) => {
    registration(formInput).then(({ data }) => {
      console.log(JSON.stringify(data));
      history.push('/');
    });
  };
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
            name="password1"
            type="password"
            placeholder="Password"
            ref={register({ required: true })}
            autoComplete="new-password"
          />
          <Input
            name="password2"
            type="password"
            placeholder="Confirm Password"
            ref={register({ required: true })}
            autoComplete="new-password"
          />

          <SubmitButton value="Reigster" disabled={isDisabled} />
        </form>
      </FormPanel>
    </>
  );
};
