import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateComment } from '../../store/store';
import styles from './commentform.scss';
import { Field, Formik } from 'formik';
import * as yup from 'yup';

export function CommentForm() {
  const value = useSelector<RootState, string>(state => state.commentText)
  const dispatch = useDispatch()

  function handleSubmitDispatch(event: FormEvent) {
    event.preventDefault()
    console.log(value)
  }

  function handleChangeDispatch(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value))
  }

  return (
    <div>
      <Formik
        initialValues={{ textarea: "" }}
        validate={(values) => {
          const errors: any = {};
          if (value.length > 0 && value.length <= 3) {
            errors.textarea = 'Должно быть больше 3-х символов!';
          } else if (value.length === 0) {
            errors.textarea = 'Поле не должно быть Пустое!';
          }
          return errors;
        }}
        onSubmit={(values) => { console.log(values) }}
      >
        {({ values, errors, touched, handleBlur, isSubmitting, }) => (
          <form className={styles.form} onSubmit={handleSubmitDispatch}>
            <div className={styles.wrapperError}>{touched.textarea && errors.textarea && <div className={styles.error}>{errors.textarea}</div>}</div>
            <Field
              as="textarea"
              name="textarea"
              onChange={handleChangeDispatch}
              onBlur={handleBlur}
              value={value}
              className={styles.input}
            />
            <div>
              <button
                type='submit'
                disabled={isSubmitting}
                className={styles.button}
              >Коментировать</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
    // <form className={styles.form} onSubmit={ handleSubmit }>
    //   <textarea className={styles.input} value={value} onChange={handleChange} ></textarea>
    //   <button type='submit' className={styles.button}>Коментировать</button>
    // </form>
  );
}
