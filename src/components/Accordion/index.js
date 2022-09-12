import AccordionItem from '../AccordionItem';

import styles from '../../styles/components/Accordion.module.scss';

const Accordion = ({data}) =>
  <div className={styles.accordionWrapper}>
    {data.map(item =>
      <AccordionItem key={item.label} data={item}/>
    )}
  </div>;

export default Accordion;