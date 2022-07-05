import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import { CommentContext } from '../../context/CommentContext';
import styles from './commentform.scss';

export function CommentForm() {
  const ref = useRef<HTMLTextAreaElement>(null)
  
  function handelSubmit(event: FormEvent) {
    event.preventDefault()
    console.log(ref.current?.value)
  }

  return (
    <form className={styles.form} onSubmit={ handelSubmit }>
      <textarea className={styles.input} ref={ref} ></textarea>
      <button type='submit' className={styles.button}>Коментировать</button>
    </form>
  );
}
