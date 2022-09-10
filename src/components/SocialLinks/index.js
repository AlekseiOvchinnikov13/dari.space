import Image from 'next/image';
import {SOCIAL_LINKS} from '../../data/social';

import styles from '../../styles/components/SocialLinks.module.scss';

const SocialLinks = ({className}) =>
  <div className={`${styles.socialLinksWrapper} ${className}`}>
    {SOCIAL_LINKS.map(social =>
      <a
        key={social.link}
        href={social.link}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={social.image}
          className={styles.image}
          width={45}
          height={45}
          layout="fixed"
          alt={social.link}
        />
      </a>
    )}
  </div>;

export default SocialLinks;