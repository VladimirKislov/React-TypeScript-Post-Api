import React from 'react';
import { IconAnon } from '../../../Icons';
import styles from './userblock.scss';

interface IUserBlockProps {
  avatarSrc?: string,
  username?: string,
  loading?: boolean,
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
    <a
      href={'https://www.reddit.com/api/v1/authorize?client_id=LTCW2f7TVj4zTVCfmNFpoA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&scope=read submit identity'}
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        { avatarSrc
          ? <img src={avatarSrc} alt="user_avatar" className={styles.avatarImage} />
          : <IconAnon />
        }
        
      </div>

      <div className={styles.username}>
        {loading
          ? <span>{'Загрузка...'}</span>
          : <span>{username || 'Аноним'}</span>
        }
      </div>
    </a>
  );
}
