import React, { ChangeEvent, FormEvent, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateComment } from '../../store';
import styles from './commentform.scss';

export function CommentForm() {
  const value = useSelector<RootState, string>(state => state.commentText)
  const dispatch = useDispatch()
  
  function handelSubmit(event: FormEvent) {
    event.preventDefault()
  }

  function handelChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value))
  }

  return (
    <form className={styles.form} onSubmit={ handelSubmit }>
      <textarea className={styles.input} value={value} onChange={handelChange} ></textarea>
      <button type='submit' className={styles.button}>Коментировать</button>
    </form>
  );
}
