import Head from 'next/head';
import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Script from 'next/script';
import PrimaryNav from '../nav/PrimaryNav';

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>PRBC</title>
      </Head>
      <Script
        defer
        src='https://kit.fontawesome.com/c27fefec8d.js'
        crossOrigin='anonymous'
      ></Script>
      <Header />
      {children}
      <Footer />
      <div className='lg:hidden'>
        <PrimaryNav />
      </div>
    </>
  );
};

export default Layout;
