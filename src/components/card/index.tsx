import React from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

interface CardProps {
  className?: string;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={cx('  p-5 rounded-xl  z-10 relative ', styles.card, className)}>
      <div className="px-2 py-1  text-black font-montserrat font-medium">{children}</div>
    </div>
  );
};

export default Card;
