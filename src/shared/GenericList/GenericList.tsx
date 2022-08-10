import React from 'react';
import styles from './genericlist.scss';

interface IItem {
  id: string;
  text?: string;
  svg?: React.ReactNode;
  onClick?: (id:string) => void;
  className?: string;
  classNameSpan?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  As2?: 'span';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}

const noop = () => {};

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map( ({ As = 'div', text, onClick = noop, className, id, href, svg, As2 = 'span', classNameSpan}) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          <As2
            className={classNameSpan}
          >
            {svg}
          </As2>
          {text}
        </As>
      ))}
    </>
  );
}
