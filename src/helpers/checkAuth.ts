import nookies from 'nookies';
import { GetServerSidePropsContext } from 'next';

import axios from '@/core/axios';
import * as Api from '@/api';

const checkAuth = async (ctx: GetServerSidePropsContext) => {
  const { _token } = nookies.get(ctx);

  axios.defaults.headers.Authorization = 'Bearer ' + _token;

  try {
    await Api.auth.getMe();

    return {
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/dashboard/auth',
        permanent: false,
      },
    };
  }
};

export { checkAuth };
