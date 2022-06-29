import React, { useContext } from 'react';
import { Dropdown } from '../../../Dropdown';
import styles from './menu.scss';
import { MenuItemsList } from './MenuItemsList';
import { EIcons, Icons } from '../../../Icons/Icon';
import ReactDOM from 'react-dom';

export function Menu() {

  const dropdown = document.querySelector('#dropdown');
  if (!dropdown) return null

  return ReactDOM.createPortal((
    <div className={styles.menu}>
      <Dropdown button={
        <button className={styles.menuButton}>
          <Icons name={EIcons.menu} size={16} mobileSize={12} />
        </button>
      }>
        <div className={styles.dropdownWrapper}>
          <MenuItemsList />
          <button className={styles.dropdownClose}>Закрыть</button>
        </div>
      </Dropdown>
    </div>), dropdown
  );
}
