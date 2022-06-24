import React from 'react';
import styles from './card.scss';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

interface IPropsCard {
  image?: any,
  title?: string,
  avatar?: string,
  author?: string,
  date?: string,
  like?: number
}

export function Card({ image, title, avatar, author, date, like}: IPropsCard) {
  return (
    <li className={styles.card}>
      <TextContent
        title={title}
        author={author}
        date={date}
        avatar={avatar}
      />
      <Preview image={image} />
      <Controls like={like} />
      <Menu />
    </li>
  );
}
