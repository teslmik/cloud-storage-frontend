import { GetServerSidePropsContext, NextPage } from 'next';

import { checkAuth } from '@/helpers/checkAuth';
import { Layout } from '@/layouts/Layout';

const DashboardPage: NextPage = () => {
  return (
    <main>
      <h1>Dashboard Private</h1>
    </main>
  );
};

DashboardPage.getLayout = (page: React.ReactNode) => {
  return <Layout title={'Dashboard / Main'}>{page}</Layout>;
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  // if ('redirect' in authProps) {
  //   return authProps;
  // }

  return {
    props: {},
  };
};

export default DashboardPage;
