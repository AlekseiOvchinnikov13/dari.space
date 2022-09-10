import {ADVANTAGES_DATA} from '../../data/advantages';

import styles from '../../styles/components/Advantages.module.scss';

const Advantages = () =>
  <div className={styles.advCardsWrapper}>
    {ADVANTAGES_DATA.map(adv =>
      <div className={styles.advCard} key={adv.id}>
        <p className={styles.number}>{adv.id}</p>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{
            __html: adv.text
          }}
        />
      </div>
    )}
  </div>;

export default Advantages;