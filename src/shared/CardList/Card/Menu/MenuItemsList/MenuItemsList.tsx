import React from 'react';
import styles from './menuitemslist.scss';
import { GenericList } from '../../../../GenericList';
import { generateId } from '../../../../../utils/react/generateRandomIndex';
import { merge } from '../../../../../utils/js/merge';
import { EIcons, Icons } from '../../../../Icons/Icon';

const list = [
  {
    As: 'li' as const, text: 'Комментарии', className: `${styles.dropdownItem}`, classNameSpan: `${styles.dropdownSpan}`, svg: <Icons name={EIcons.comment} size={16} mobileSize={12} />
  },
  {
    As: 'div' as const, className: `${styles.divider}`
  },
  {
    As: 'li' as const, text: 'Поделиться', className: `${styles.dropdownItem}`, classNameSpan: `${styles.dropdownSpan}`, svg: <Icons name={EIcons.share} size={16} mobileSize={12} />
  },
  {
    As: 'div' as const, className: `${styles.divider}`
  },
  {
    As: 'li' as const, text: 'Скрыть', className: `${styles.dropdownItemMobile}`, classNameSpan: `${styles.dropdownSpan}`, svg: <Icons name={EIcons.hidden} size={16} mobileSize={12} />
  },
  {
    As: 'div' as const, className: `${styles.divider}`
  },
  {
    As: 'li' as const, text: 'Сохранить', className: `${styles.dropdownItem}`, classNameSpan: `${styles.dropdownSpan}`, svg: <Icons name={EIcons.save} size={16} mobileSize={12} />
  },
  {
    As: 'div' as const, className: `${styles.divider}`
  },
  {
    As: 'li' as const, text: 'Пожаловаться', className: `${styles.dropdownItemMobile}`, classNameSpan: `${styles.dropdownSpan}`, svg: <Icons name={EIcons.comPlain} size={16} mobileSize={12} />
  },
].map(generateId);

interface IPropsMenuItemList {
  onClose: () => void;
}

export function MenuItemsList({ onClose }: IPropsMenuItemList) {
  const handleItemClick = (id: string) => {
    onClose?.()
    console.log(id);
  }

  return (
    <ul className={styles.dropdownList}>
      <GenericList list={list.map(merge({ onClick: handleItemClick }))} />
    </ul>
  );
}
