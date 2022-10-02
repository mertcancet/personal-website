import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

import styles from './styles.module.scss';

const Card: React.FC = ({ children }) => {
  return (
    <div className="relative">
      <div className={cx(styles.card, 'w-[500px] h-[300px]  p-5 rounded-xl  z-10 relative ')}>
        <div className="px-2 py-1  text-black font-montserrat font-medium">{children}</div>
      </div>
      {/* Left top circle */}
      <div className="absolute top-[-50%] left-[-35%] z-0">
        <div className="relative w-[300px] h-[300px] z-0 ">
          <Image src="/images/Rectangle-2.png" layout="fill" alt="" />
        </div>
      </div>
      {/* Right bottom circle */}

      <div className="absolute bottom-[-50%] right-[-35%]  z-0">
        <div className="relative w-[300px] h-[300px] z-0 ">
          <Image src="/images/Rectangle-1.png" layout="fill" alt="" />
        </div>
      </div>
      {/* Yellow circle */}
      <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-0">
        <div className="relative w-[150px] h-[150px] z-0 ">
          <Image src="/images/Rectangle-3.png" layout="fill" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
