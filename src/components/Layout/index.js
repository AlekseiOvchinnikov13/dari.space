import {useLayoutEffect, useState} from 'react';
import {isBrowser} from '../../utils';
import Head from 'next/head';
import Header from "../Header";
import Footer from "../Footer";

import styles from '../../styles/components/Layout.module.scss';

const Layout = ({children}) => {
  const [, setSize] = useState([0, 0]);
  const updateSize = () => isBrowser() && setSize([window.innerWidth, window.innerHeight]);

  useLayoutEffect(() => {
    isBrowser() && window.addEventListener('resize', updateSize);
    updateSize();
    return () => isBrowser() && window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      <Head>
        <title>Ovhinnikova Daria | Psy</title>
        <meta name="description" content=""/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="theme-color" content="#000000"/>
      </Head>
      <Header/>
      <main className={styles.layout}>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;