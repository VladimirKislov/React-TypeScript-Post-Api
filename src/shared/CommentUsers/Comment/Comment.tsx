import React, { useState } from 'react';
import { EIcons, Icons } from '../../Icons/Icon';
import styles from './comment.scss';
import { ReplyComment } from './ReplyComment';

interface IPropsComment {
  avatar?: string,
  author?: string,
  date?: string,
  body?: string,
  replies?: any,
}

export function Comment({ author, date, body, replies }: IPropsComment) {
  const [isOpenReplyComment, setIsOpenReplyComment] = useState(false)

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
    <div className={styles.container}>
      <div className={styles.karmaCounterContainer}>
        <div className={styles.karmaCounter}>
          <button className={styles.up}>
            <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
            </svg>
          </button>
          <button className={styles.down}>
            <svg className={styles.down} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
            </svg>
          </button>
        </div>
        <div className={styles.border}></div>
      </div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.metaData}>
          <img src={ "http://spovv.com/file/2020/10/Group-47-1.png" } alt="avatar" className={styles.avatar} />
          <a href="#" className={styles.username}>{author || 'Дмитрий Гришин'}</a>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано  {postTime() || "4 часа"} назад</span>
          </span>
        </div>
        <div>
          <p className={styles.body}>{body}</p>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.btn} onClick={() => {setIsOpenReplyComment(true)}}>
            <Icons name={EIcons.comment} /> Ответить
          </button>
          <button>
            <Icons name={EIcons.share} /> Поделиться
          </button>
          <button>
            <Icons name={EIcons.comPlain} /> Пожаловаться
          </button>
        </div>
        <div className={styles.replies}>
          {replies !== '' && replies !== undefined && replies.data !== undefined
            ? replies.data.children.filter((element: any) => {
                if (element.data !== undefined) return true
              }).map((item: any) => (
                <Comment
                  key={item.data.id}
                  author={item.data.author}
                  date={item.data.created}
                  body={item.data.body}
                  replies={item.data.replies}
                />
              ))
            : <></>
          }
        </div>
      </div>
      {isOpenReplyComment && (<ReplyComment onClose={() => { setIsOpenReplyComment(false) }} author={author} />) }
    </div>
  );
}
