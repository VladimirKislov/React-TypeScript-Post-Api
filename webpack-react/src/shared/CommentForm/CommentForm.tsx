import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { CommentContext } from '../../context/CommentContext';
import styles from './commentform.scss';

export function CommentForm() {
  const { value, onChange } = useContext(CommentContext)

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value)
  }
  
  function handelSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <form className={styles.form} onSubmit={ handelSubmit }>
      <textarea className={styles.input} value={value} onChange={ handleChange }></textarea>
      <button type='submit' className={styles.button}>Коментировать</button>
    </form>
  );
}
