import React from 'react';
import styles from './preview.scss';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img src="https://cdn.dribbble.com/userupload/2774008/file/original-315f5378ea4ec89bb81d1ac6c6a4d26e.jpg?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1600x1600" alt="preview" className={styles.previewImg} />
    </div>
  );
}
