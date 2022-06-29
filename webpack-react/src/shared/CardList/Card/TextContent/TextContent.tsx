import React, { useEffect, useState } from 'react';
import { Post } from '../../../Post';
import styles from './textcontent.scss';

interface IPropsTextContent {
  author?: string,
  date?: string,
  title?: string,
  avatar?: string,
}

export function TextContent({ author, date, title, avatar }: IPropsTextContent) {
  const [isModalOpened, setIsModalOpened] = useState(false)

  function viewAvatar() {
    if (avatar === undefined || (!avatar.endsWith('.jpg') && !avatar.endsWith('.jpeg') && !avatar.endsWith('.gif') && !avatar.endsWith('.png'))) {
      return "http://spovv.com/file/2020/10/Group-47-1.png";
    } else {
      return avatar;
    }
  }

  function postTime() {
    const currentDate = Math.floor(Date.now() / 1000);

    if (!date) return null
    const getDate = parseInt(date)

    const setDate = Math.floor((currentDate - getDate) / 360)

    if (setDate > 24) {
      const postData = Math.floor(setDate / 24)
      return `${postData} дней`
    } else {
      return `${setDate} часов`
    }
  }
  
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img src={ viewAvatar() } alt="avatar" className={styles.avatar} />
          <a href="#" className={styles.username}>{ author || 'Дмитрий Гришин' }</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано  { postTime() || "4 часа"} назад</span>
        </span>
      </div>
      <h2 className={styles.title}>
        <a href="#" className={styles.postLink} onClick={() => { setIsModalOpened(true) }}>{title || 'Следует отметить, что новая модель организационной деятельности...'}</a>
      </h2>
      {isModalOpened && (
        <Post onClose={() => { setIsModalOpened(false) }} />
      )}
    </div>
  );
}
