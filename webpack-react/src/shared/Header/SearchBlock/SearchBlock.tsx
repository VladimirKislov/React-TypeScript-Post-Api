import React from 'react';
import { useUserData } from '../../../hooks/useUserData';
import styles from './searchblock.scss';
import { UserBlock } from './UserBlock/UserBlock';

export function SearchBlock() {
  const data  = useUserData()
  
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data[0].iconImg} username={data[0].name} />
    </div>
  );
}
