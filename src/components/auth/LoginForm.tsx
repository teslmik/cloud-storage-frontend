import { Button, Form, Input, notification } from 'antd';
import { setCookie } from 'nookies';
import React from 'react';

import { LoginFormDto } from '@/api/dto/auth.dto';
import * as Api from '@/api';

import styles from './Auth.module.scss';

const LoginForm: React.FC = () => {
  const onSubmit = async (values: LoginFormDto) => {
    try {
      const { token } = await Api.auth.login(values);

      notification.success({
        message: 'Successfully',
        description: 'Go to admin panel...',
        duration: 2,
      });

      setCookie(null, '_token', token, {
        path: '/',
      });

      location.href = '/dashboard';
    } catch (error) {
      console.warn('LoginForm', error);

      notification.error({
        message: 'Error',
        description: 'Invalid login or password',
        duration: 2,
      });
    }
  };

  return (
    <div className={styles.formBlock}>
      <Form name="basic" labelCol={{ span: 8 }} onFinish={onSubmit}>
        <Form.Item label="E-Mail" name="email" rules={[{ required: true, message: 'Enter email' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Enter password' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export { LoginForm };
