import axios from '@/core/axios';
import { LoginFormDto, LoginResponceDto } from './dto/auth.dto';

export const login = async (values: LoginFormDto): Promise<LoginResponceDto> => {
  return (await axios.post('auth/login', values)).data;
};
