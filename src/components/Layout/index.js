import {useLayoutEffect, useState} from 'react';
import {isBrowser} from '../../utils';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

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
        <title>Ovchinnikova Daria | Psy</title>
        <meta name="description" content="Практикующий специалист. Работаю с любым запросом. Приглашаю в безопасное пространство для глубокой трансформации 🕊."/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="theme-color" content="#000000"/>

        <meta property="og:title" content="Овчинникова Дарья | Психолог Казань и Онлайн"/>
        <meta property="og:locale" content="ru_RU"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="Практикующий специалист. Работаю с любым запросом. Приглашаю в безопасное пространство для глубокой трансформации 🕊."/>
        <meta property="og:url" content="https://ovchinnikovadari.space/"/>
        <meta property="og:site_name" content="Ovchinnikova Daria | Psy"/>

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content="Овчинникова Дарья | Психолог Казань и Онлайн"/>
        <meta name="twitter:description" content="Практикующий специалист. Работаю с любым запросом. Приглашаю в безопасное пространство для глубокой трансформации 🕊."/>
        <meta name="twitter:image" content="https://ovchinnikovadari.space/images/main-photo.jpg"/>
      </Head>
      <Header/>
      <main className={styles.layout}>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;