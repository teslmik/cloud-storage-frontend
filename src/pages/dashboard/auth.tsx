import { LoginForm } from '@/components/auth/LoginForm';
import { NextPage } from 'next';
import Head from 'next/head';
import { Tabs } from 'antd';

const AuthPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard / Auth</title>
      </Head>
      <main style={{ width: 400, margin: '50px auto' }}>
        <Tabs items={[
          {
            label: 'Login',
            key: '1',
            children: <LoginForm />
          },
          {
            label: 'Registrations',
            key: '2',
            children: <h1>Registration</h1>
          }
        ]} />
      </main>
    </>
  );
};

export default AuthPage;