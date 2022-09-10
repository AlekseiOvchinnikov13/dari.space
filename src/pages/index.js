import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import mainPhoto from '../../public/images/main-photo.jpg';
import Advantages from '../components/Advantages';
import Quote from '../components/Quote';
import Title from '../components/Title';
import Services from '../components/Services';

const Home = () => {
  return (
    <>
      <section className={`${styles.aboutSection} ${styles.paddingSectionBottom} container`} id="about">
        <div className={styles.topWrapper}>
          <div className={styles.imageWrapper}>
            <Image
              src={mainPhoto}
              objectFit="contain"
              layout="fill"
            />
          </div>
          <div className={styles.aboutText}>
            <h2 className={`${styles.greetings} ${styles.boldText}`}>Приветствую тебя</h2>
            <p className={styles.aboutText}>Меня зовут Дарья Овчинникова. Я&nbsp;психолог, студентка Международной
              академии IARPT.</p>
            <p className={styles.aboutText}>
              Своими усилиями смогла выйти на&nbsp;путь обретения себя и&nbsp;научилась чувствовать себя счастливой,
              ценной и&nbsp;получать удовольствие от&nbsp;жизни.
            </p>
            <p className={`${styles.aboutText} ${styles.boldText}`}>Мои главные ценности&nbsp;&mdash; свобода, любовь
              и&nbsp;честность.</p>
          </div>
        </div>
        <div className={styles.advantagesWrapper}>
          <h4 className={styles.advTitle}>
            В работе со мной клиенты отмечают:
          </h4>
          <Advantages/>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <div className="container">
          <Quote
            author="Карл Густав Юнг"
            quote="“Пока вы&nbsp;не&nbsp;сделаете бессознательное сознательным,оно будет управлять вашей жизнью и&nbsp;вы&nbsp;назовёте это судьбой”"
          />
          <div className={styles.paddingSectionBottom} id="services">
            <Title label="услуги"/>
            <Services/>
          </div>
          <div className={styles.paddingSectionBottom} id="reviews">
            <Title label="отзывы"/>
          </div>
          <Quote
            author="Карл Густав Юнг"
            quote="“Я&nbsp;не&nbsp;то, что со&nbsp;мной случилось. Я&nbsp;&mdash; то, чем я&nbsp;решил стать”"
          />
        </div>
      </section>
      <section className={`${styles.faqSection} ${styles.paddingSectionTop}`} id="faq">
        <Title label="f.a.q."/>
      </section>
      <section className={`${styles.contactsSection} ${styles.paddingSectionTop}`} id="contact">
        <Title label="связь со мной"/>
      </section>
    </>
  );
};

export default Home;