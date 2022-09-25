import SocialLinks from '../SocialLinks';

import styles from '../../styles/components/Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} container`}>
      <p className={styles.quote}>
        Всё зависит от того, как мы&nbsp;смотрим на&nbsp;вещи, а&nbsp;не&nbsp;от&nbsp;того, каковы вещи сами
        по&nbsp;себе. Меняя мировоззрение, вы&nbsp;меняетее себя, а&nbsp;с&nbsp;вами меняется мир.
      </p>
      <SocialLinks className={styles.social}/>
      <p className={styles.copyright}>
        ovchinnikovadari.space &copy;&nbsp;2022{currentYear > 2022 && `-${currentYear}`}
      </p>
    </footer>
  );
};

export default Footer;