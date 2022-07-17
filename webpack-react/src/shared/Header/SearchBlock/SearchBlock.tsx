import React from 'react';
import { useSelector } from 'react-redux';
import { IUserData } from '../../../store/me/meAction';
import { RootState } from '../../../store/store';
import styles from './searchblock.scss';
import { UserBlock } from './UserBlock/UserBlock';

export function SearchBlock() {
  const data = useSelector<RootState, IUserData>(state => state.me.data)
  const loading = useSelector<RootState, boolean>(state => state.me.loading)
  
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading} />
    </div>
  );
}
