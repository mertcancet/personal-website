import React from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

const Card: React.FC = ({ children }) => {
  return (
    <div className={cx(styles.card, 'w-[500px] h-[300px]  p-5 rounded-xl  z-10 relative ')}>
      <div className="px-2 py-1  text-black font-montserrat font-medium">{children}</div>
    </div>
  );
};

export default Card;
