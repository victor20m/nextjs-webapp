import React from 'react';
import Head from 'next/head';
import styles from './Layout.module.css';
import { ReactNode } from 'react';

interface Props {
   children?: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.container}>
        {/*<Header />*/}
        <main className={styles.main}>{children}</main>
        {/*<Footer />*/}
      </div>
    </>
  );
};

export default Layout;