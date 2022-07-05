import React from 'react';
import styles from './commentusers.scss';
import { Comment } from './Comment'

export function CommentUsers(data: any) {

  return (
    <div>
      <div className={styles.wrapperSort}>
        <p>Сортировать по: <span>Лучшие</span></p>
      </div>
      
      {data.data[0].map((item: any) => (
        <Comment
          key={item.data.id}
          author={item.data.author}
          date={item.data.created}
          body={item.data.body}
          replies={item.data.replies}
        />
      ))
      }
    </div>
  );

}

