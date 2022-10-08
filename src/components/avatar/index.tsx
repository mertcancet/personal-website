import Image from 'next/image';
import React from 'react';
import cx from 'classnames';
import Card from '../card';
import styles from './styles.module.scss';
const Avatar = () => {
  return (
    <div>
      <div
        className={cx(
          styles.container,
          'absolute  top-[50px] left-[30%]   translate-x-[-50%] grid place-items-center h-[200px] w-[200px]'
        )}
      />
      <Card className="top-[-50%] left-[50%]  translate-y-[50%] translate-x-[-50%] !rounded-full w-[150px] h-[150px] grid place-items-center absolute  !z-20">
        <Image src="/images/avatar.png" layout="fill" alt="" />
      </Card>
    </div>
  );
};

export default Avatar;
