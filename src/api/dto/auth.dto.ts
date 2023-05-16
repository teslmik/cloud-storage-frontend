export interface LoginFormDto {
  email: string;
  password: string;
}

export interface LoginResponceDto {
  token: string;
}

export type RegisterFormDto = LoginFormDto & { fullName: string };
export type RegisterResponceDto = LoginResponceDto;

export interface User {
  id: number;
  email: string;
  fullName: string;
}