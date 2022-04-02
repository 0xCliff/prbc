import Head from 'next/head';
import React from 'react';
import Footer from '../footer/Footer';
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
      <Footer />
    </>
  );
};

export default Layout;
