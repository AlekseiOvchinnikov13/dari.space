import '../styles/globals.scss';
import Layout from '../components/Layout';

const OvchinnikovaDari = ({Component, pageProps}) =>
  <Layout>
    <Component {...pageProps} />
  </Layout>;

export default OvchinnikovaDari;
