import styles from '../../styles/components/Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} container`}>
      <p className={styles.quote}>
        Всё зависит оттого, как мы&nbsp;смотрим на&nbsp;вещи, а&nbsp;не&nbsp;от&nbsp;того, каковы вещи сами по&nbsp;себе. Меняя мировоззрение, вы&nbsp;меняетее себя, а&nbsp;с&nbsp;вами меняется мир.
      </p>
      
      <p className={styles.copyright}>
        ovchinnikovadari.space &copy;&nbsp;2022{currentYear > 2022 && `-${currentYear}`}
      </p>
    </footer>
  )
}

export default Footer;