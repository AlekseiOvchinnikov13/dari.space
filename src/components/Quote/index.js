import Image from 'next/image';
import quotesImage from './images/quotes.png';
import styles from '../../styles/components/Quote.module.scss';

const Quote = ({quote, author}) =>
  <div className={styles.quoteWrapper}>
    <p className={styles.quote}>{quote}</p>
    <p className={styles.author}>{author}</p>
    <div className={styles.image}>
      <Image
        src={quotesImage}
        layout="fill"
        objectFit="fill"
        alt="quotes"
      />
    </div>
  </div>;

export default Quote;