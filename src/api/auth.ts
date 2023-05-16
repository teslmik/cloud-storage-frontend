import { destroyCookie } from 'nookies';

import {
  LoginFormDto,
  LoginResponceDto,
  RegisterFormDto,
  RegisterResponceDto,
  User,
} from './dto/auth.dto';
import axios from '@/core/axios';

export const login = async (values: LoginFormDto): Promise<LoginResponceDto> => {
  return (await axios.post('auth/login', values)).data;
};

export const register = async (values: RegisterFormDto): Promise<RegisterResponceDto> => {
  return (await axios.post('auth/register', values)).data;
};

export const getMe = async (): Promise<User> => {
  return (await axios.get('users/me')).data;
};

export const logout = () => {
  destroyCookie(null, '_token', { path: '/' });
};
