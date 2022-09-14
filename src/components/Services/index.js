import styles from '../../styles/components/Services.module.scss';
import {SERVICES_DATA} from '../../data/services';
import {useState} from 'react';
import ModalWindow from '../ModalWindow';
import ContactForm from '../ContactForm';

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceName, setServiceName] = useState('');

  const onClickHandler = (e) => {
    setServiceName(e?.target?.name);
    setIsOpen(!isOpen);
  };

  return (
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
          <button
            className={styles.order}
            onClick={e => onClickHandler(e)}
            name={service.title}
          >
            оставить заявку
          </button>
        </div>
      )}
      <ModalWindow visible={isOpen} onClose={onClickHandler}>
        <ContactForm service={serviceName} onClose={onClickHandler}/>
      </ModalWindow>
    </div>
  );
};

export default Services;