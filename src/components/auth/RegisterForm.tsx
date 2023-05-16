import { Button, Form, Input, notification } from 'antd';
import { setCookie } from 'nookies';
import React from 'react';

import { RegisterFormDto } from '@/api/dto/auth.dto';
import * as Api from '@/api';

import styles from './Auth.module.scss';

const RegisterForm: React.FC = () => {
  const onSubmit = async (values: RegisterFormDto) => {
    try {
      const { token } = await Api.auth.register(values);
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
      console.warn('REgisterForm', error);

      notification.error({
        message: 'Error',
        description: 'Registration error...',
        duration: 2,
      });
    }
  };

  return (
    <div className={styles.formBlock}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        onFinish={onSubmit}>
        <Form.Item
          label="E-Mail"
          name="email"
          rules={[
            {
              required: true,
              message: 'Enter your email',
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Full name"
          name="fullName"
          rules={[
            {
              required: true,
              message: 'Enter full name',
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Enter a password',
            },
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button type="primary" htmlType="submit">
            Регистрация
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export { RegisterForm };
