import {useForm} from '@formspree/react';
import {useEffect, useState} from 'react';
import styles from '../../styles/components/ContactForm.module.scss';

const ContactForm = ({isContact, service, onClose}) => {
  const [state, handleSubmit] = useForm(isContact ? 'xgeqoqok' : 'mbjbdvnw');
  const [isSuccess, setIsSuccess] = useState(false);

  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const resetInputs = () => {
    setName('');
    setEmail('');
    setMessage('');
    setTel('');
  };

  const timerHandler = () => {
    setIsSuccess(!state.succeeded);
    !isContact && onClose && onClose();
  };

  const onSuccess = () => {
    resetInputs();
    setIsSuccess(state.succeeded);
    const timer = setTimeout(() => timerHandler(), 4000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    state.succeeded && onSuccess();
  }, [state.succeeded]);

  return (
    <form
      className={`${styles.form} ${!isContact ? styles.serviceForm : ''}`}
      onSubmit={handleSubmit}
    >
      {isSuccess &&
        <div className={styles.succeeded}>
          <p className={styles.successText}>
            {`Спасибо! Ваше сообщение отправлено. Скоро я свяжусь с Вами ${isContact ? ':)' : ''}`}
          </p>
        </div>
      }
      <input
        className={styles.input}
        id="name"
        type="text"
        name="name"
        placeholder={'Ваше имя'}
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />
      {isContact ?
        <>
          <input
            className={styles.input}
            id="email"
            type="email"
            name="email"
            placeholder={'Ваш email'}
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className={`${styles.input} ${styles.message}`}
            id="message"
            type="text"
            name="message"
            placeholder={'Ваше сообщение'}
            required
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </>
        :
        <>
          <input
            className={styles.input}
            id="phone"
            name="phone"
            type="tel"
            placeholder={'Ваш телефон'}
            required
            value={tel}
            onChange={e => setTel(e.target.value)}
          />
          <input
            type="hidden"
            id="service"
            name="services"
            value={service}
          />
        </>
      }
      <button
        className={styles.submit}
        type="submit"
        disabled={state.succeeded || state.submitting}
      >
        Отправить
      </button>
    </form>
  );
};

export default ContactForm;