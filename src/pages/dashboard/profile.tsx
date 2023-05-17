import { GetServerSidePropsContext, NextPage } from 'next';
import { Button } from 'antd';

import { User } from '@/api/dto/auth.dto';
import * as Api from "@/api";

import styles from "@/styles/Profile.module.scss";
import { checkAuth } from '@/helpers/checkAuth';
import { Layout } from '@/layouts/Layout';

interface Props {
  userData: User;
}

const DashboardProfilePage: NextPage<Props> = ({ userData }) => {
  const onClickLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      Api.auth.logout();
      location.href = '/dashboard/auth';
    }
  };

  return (
    <main>
      <div className={styles.root}>
        <h1>My profile</h1>
        <br />
        <p>
          ID: <b>{userData.id}</b>
        </p>
        <p>
          Full name: <b>{userData.fullName}</b>
        </p>
        <p>
          E-Mail: <b>{userData.email}</b>
        </p>
        <br />
        <Button onClick={onClickLogout} type="primary" danger>
          Log out
        </Button>
      </div>
    </main>
  );
};

// @ts-ignore: Unreachable code error
DashboardProfilePage.getLayout = (page: React.ReactNode) => {
  return <Layout title={'Dashboard / Profile'}>{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ('redirect' in authProps) {
    return authProps;
  }

  const userData = await Api.auth.getMe();

  return {
    props: {
      userData,
    },
  };
};

export default DashboardProfilePage;
