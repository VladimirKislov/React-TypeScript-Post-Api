import React, { useEffect, useRef } from 'react';
import { Card } from './Card';
import styles from './cardlist.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function CardList() {
  const posts = useSelector<RootState, Array<any>>(state => state.post.post)
  const loading = useSelector<RootState, boolean>(state => state.post.loading)
  const errorLoading = useSelector<RootState, string>(state => state.post.error)

  const bottomOfList =useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const observer = new IntersectionObserver(() => {
  //     console.log('load')
  //   }, {
  //     rootMargin: '10px',
  //   })

  //   if (bottomOfList.current) observer.observe(bottomOfList.current)
    
  //   return () => {
  //     if (bottomOfList.current) observer.unobserve(bottomOfList.current)
  //   }
  // }, [bottomOfList.current])
  
  return (
    <ul className={styles.cardList}>
      {posts.length === 0 && !loading && !errorLoading && (
        <div className={styles.post}>
          {'Нет ни одного поста'}
        </div>
      )}

      {posts.map((item: any) => (
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
          loading={loading}
        />
      ))
      }

      <div ref={bottomOfList} />

      {loading && (<div className={styles.loading}>{'Загрузка...'}</div>)}
      {errorLoading && (<div className={styles.errorLoading}>{errorLoading}</div>)}
    </ul>
  )
}
