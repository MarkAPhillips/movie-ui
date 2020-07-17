export type SignInFormInput = {
  email: string;
  password: string;
}

export type RegisterFormInput = {
  email: string;
  password1: string;
  password2: string;
  firstName?: string;
  lastName?: string;
}
