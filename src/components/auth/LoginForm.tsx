import { Button, Form, Input } from 'antd';
import React from 'react';

import styles from './Auth.module.scss';

const LoginForm: React.FC = () => {
  const onSubmit = (values) => {

  }

  return (
    <div className={styles.formBlock}>
      <Form name='basic' labelCol={{ span: 8 }} onFinish={onSubmit}>
        <Form.Item label='E-Mail' name='email' rules={[{ required: true, message: 'Enter email' }]}>
          <Input />
        </Form.Item>
        <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Enter password' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export { LoginForm };
