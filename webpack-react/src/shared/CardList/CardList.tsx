import React from 'react';
import { Card } from './Card';
import styles from './cardlist.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export function CardList() {
  const posts = useSelector<RootState, Array<any>>(state => state.postsData)

  return (
    <ul className={styles.cardList}>
      {posts.length <= 0
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
