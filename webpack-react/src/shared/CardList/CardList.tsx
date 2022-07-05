import React, { useContext } from 'react';
import { Card } from './Card';
import styles from './cardlist.scss';
import { PostsContext } from '../../context/PostsContext';

export function CardList() {
  const postData = useContext<any>(PostsContext)
  const posts = postData[0][0]

  return (
    <ul className={styles.cardList}>
      {posts === undefined
        ? <Card />
        : posts.map((item: any) => (
          <Card
            key={item.data.id}
            image={item.data.url}
            title={item.data.title}
            avatar={item.data.thumbnail}
            author={item.data.author}
            date={item.data.created}
            like={item.data.ups}
            subreddit={item.data.subreddit_name_prefixed}
            postId={item.data.id}
          />
        ))
      }
    </ul>
  )
}
