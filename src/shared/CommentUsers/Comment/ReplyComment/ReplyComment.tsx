import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './replycomment.scss';

interface IPropsReplayComment {
  onClose?: () => void,
  author?: string,
}

export function ReplyComment({ onClose, author }: IPropsReplayComment) {
  const [value, setValue] = useState(author)
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef(null)

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value)
  }
  
  function handelSubmit(event: FormEvent) {
    event.preventDefault()
  }
  
  useEffect(() => {
    function handelClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        onClose?.()
      }
    }

    document.addEventListener('click', handelClick)
    return () => {
      document.removeEventListener('click', handelClick)
    }
  }, [])

  const node = document.querySelector('#dropdown');
  if (!node) return null
  
  return ReactDOM.createPortal((
    <div className={styles.wrapperForm} ref={ref} onClick={e => e.stopPropagation()}>
      <div>Ответить: <span className={styles.author}>{ author }</span></div>
      <form className={styles.form} onSubmit={ handelSubmit } >
        <textarea className={styles.input} value={value} onChange={ handleChange } ref={ inputRef => inputRef?.focus() } ></textarea>
        <button type='submit' className={styles.button}>Коментировать</button>
      </form>
    </div>), node
  );
}
