import React from 'react';
import styles from './textcontent.scss';

interface IPropsTextContent {
  author?: string,
  date?: string,
  title?: string,
  avatar?: string,
}

export function TextContent({ author, date, title, avatar }: IPropsTextContent) {
  function viewAvatar() {
    if (avatar === undefined || (!avatar.endsWith('.jpg') && !avatar.endsWith('.jpeg') && !avatar.endsWith('.gif') && !avatar.endsWith('.png'))) {
      return "http://spovv.com/file/2020/10/Group-47-1.png";
    } else {
      return avatar;
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
          <span className={styles.publishedLabel}>опубликовано </span> { date || 4 } часа назад</span>
      </div>
      <h2 className={styles.title}>
        <a href="#" className={styles.postLink}>{title || 'Следует отметить, что новая модель организационной деятельности...'}</a>
      </h2>
    </div>
  );
}
