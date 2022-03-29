import Head from 'next/head';
import React from 'react';
import Header from '../header/Header';

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Clifftek</title>
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
