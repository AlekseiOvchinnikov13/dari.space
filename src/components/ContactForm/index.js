import {useForm} from '@formspree/react';
import styles from '../../styles/components/ContactForm.module.scss';
import {useEffect, useState} from 'react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xgeqoqok');
  const [isSuccess, setIsSuccess] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const resetInputs = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const onSuccess = () => {
    resetInputs();
    setIsSuccess(state.succeeded);
    const timer = setTimeout(() => setIsSuccess(!state.succeeded), 4000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    state.succeeded && onSuccess();
  }, [state.succeeded]);

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      {isSuccess &&
        <div className={styles.succeeded}>
          <p className={styles.successText}>
            Спасибо! Ваше сообщение отправлено. Скоро я свяжусь с Вами :)
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
        name="message"
        placeholder={'Ваше сообщение'}
        required
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
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