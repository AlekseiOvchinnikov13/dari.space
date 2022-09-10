import styles from '../../styles/components/Services.module.scss';
import {SERVICES_DATA} from '../../data/services';

const Services = () =>
  <div className={styles.serviceCardsWrapper}>
    {SERVICES_DATA.map(service =>
      <div className={styles.serviceCard} key={service.title}>
        <p className={styles.title}>{service.title}</p>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{
            __html: service.text
          }}
        />
        <p className={styles.price}>{service.price}</p>
        <button className={styles.order}>оставить заявку</button>
      </div>
    )}
  </div>;

export default Services;