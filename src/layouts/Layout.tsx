import { Header } from '@/components/Header';
import Head from 'next/head';
import React from 'react';

import { checkAuth } from '@/helpers/checkAuth';
import { GetServerSidePropsContext } from 'next';
import * as Api from "@/api";

import styles from '@/styles/Home.module.scss';
import { User } from '@/api/dto/auth.dto';

interface LayoutProps {
  title: string;
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Header/>
        <div className={styles.main}>
          <div className={styles.layout}>{children}</div>
        </div>
      </main>
    </>
  );
};

export { Layout };
