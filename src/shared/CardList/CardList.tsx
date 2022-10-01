import React, { useEffect, useRef, useState } from 'react';
import { Card } from './Card';
import styles from './cardlist.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { PostRequestAsync } from '../../store/post/postAction';
import { generateRandomString } from '../../utils/react/generateRandomIndex';

export function CardList() {
  const posts = useSelector<RootState, any>(state => state.post.post)
  const after = useSelector<RootState, string>(state => state.after)
  const loading = useSelector<RootState, boolean>(state => state.post.loading)
  const errorLoading = useSelector<RootState, string>((state: { post: { error: string; }; }) => state.post.error)
  const token = useSelector<RootState, string>(state => state.token.token)

  const bottomOfList = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const [data, setData] = useState([])
  const [nextAfter, setNextAfter] = useState('')
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (posts.length === 0) return
    setNextAfter(after)
    setData(prevChildren => prevChildren.concat(...posts))
  }, [after])

  function handleClick() {
    setCount(prevCount => prevCount + 1)
    dispatch(PostRequestAsync(nextAfter))
  }

  useEffect(() => {
    if (token === '') return

    function load(nextPage: string) {
      setCount(prevCount => prevCount + 1)
      dispatch(PostRequestAsync(nextPage))
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        load(nextAfter)
      }
    }, {
      threshold: 1.0,
    })

    if (bottomOfList.current) observer.observe(bottomOfList.current)

    return () => {
      if (bottomOfList.current) observer.unobserve(bottomOfList.current)
    }
  }, [nextAfter])

  return (
    <ul className={styles.cardList}>
      {posts.length === 0 && !loading && !errorLoading && (
        <div className={styles.post}>
          {'No Posts. Click user icon!!!'}
        </div>
      )}

      {data.map((item: any) => (
        <Card
          // key={item.data.id}
          key={generateRandomString()}
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

      {loading && (<div className={styles.loading}>{'Загрузка...'}</div>)}

      {errorLoading && (<div className={styles.errorLoading}>{errorLoading}</div>)}

      {count !== 0 && count % 2 === 0 && !loading && !errorLoading
        ? (<button className={styles.button} onClick={() => handleClick()}>Загрузить ещё</button>)
        : (<div ref={bottomOfList} />)
      }
    </ul>
  )
}


