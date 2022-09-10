import Menu from '../Menu';
import {useEffect, useState} from 'react';
import {isMobile} from '../../utils';

import styles from '../../styles/components/Header.module.scss';

const Header = () => {
  const [isMobileState, setIsMobileState] = useState(false);
  useEffect(() => {
    setIsMobileState(isMobile());
  }, [isMobile()]);

  return (
    <header className={styles.header}>
      <div className={`${styles.headerWrapper} container`}>
        <Menu isMobile={isMobileState}/>
      </div>
    </header>
  );
};

export default Header;