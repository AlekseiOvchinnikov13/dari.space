import Image from 'next/image';
import mainPhoto from '../../public/images/main-photo.jpg';
import Advantages from '../components/Advantages';
import Quote from '../components/Quote';
import Title from '../components/Title';
import Services from '../components/Services';
import {Carousel} from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles/Home.module.scss';
import {yellowColor} from '../styles/variables.module.scss';
import {REVIEWS_DATA} from '../data/reviews';

const Home = () => {
  const settingsSlider = {
    showThumbs: false,
    showArrows: false,
    autoPlay: false,
    selectedItem: 1,
    showStatus: false,
    infiniteLoop: true,
    centerMode: true,
    centerSlidePercentage: 100,
    showIndicators: true
  };

  const indicatorStyles = {
    background: yellowColor,
    width: 20,
    height: 20,
    display: 'inline-block',
    margin: '0 8px',
    borderRadius: '50%',
    border: '2px solid transparent',
    marginBottom: '-.2361em'
  };

  const Reviews = REVIEWS_DATA.map(review =>
    <div className={styles.reviewSlide} key={review.id}>
      <Image
        src={review.src}
        alt={`review${review.id}`}
      />
    </div>
  );

  return (
    <>
      <section className={`${styles.aboutSection} ${styles.paddingSectionBottom} container`} id="about">
        <div className={styles.topWrapper}>
          <div className={styles.imageWrapper}>
            <Image
              src={mainPhoto}
              objectFit="contain"
              layout="fill"
              alt="me"
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
            <div className={styles.carouselWrapper}>
              <Carousel
                {...settingsSlider}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                  if (isSelected) {
                    return (
                      <li
                        style={{...indicatorStyles, background: 'transparent', border: `2px solid ${yellowColor}`}}
                        aria-label={`Selected: ${label} ${index + 1}`}
                        title={`Selected: ${label} ${index + 1}`}
                      />
                    );
                  }
                  return (
                    <li
                      style={indicatorStyles}
                      onClick={onClickHandler}
                      onKeyDown={onClickHandler}
                      value={index}
                      key={index}
                      role="button"
                      tabIndex={0}
                      title={`${label} ${index + 1}`}
                      aria-label={`${label} ${index + 1}`}
                    />
                  );
                }}
              >
                {Reviews}
              </Carousel>
            </div>
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