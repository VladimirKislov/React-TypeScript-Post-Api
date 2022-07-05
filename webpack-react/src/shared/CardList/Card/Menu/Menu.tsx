import React, { useState, useRef, useEffect } from 'react';
import { Dropdown } from '../../../Dropdown';
import styles from './menu.scss';
import { MenuItemsList } from './MenuItemsList';
import { EIcons, Icons } from '../../../Icons/Icon';

export function Menu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [coordinate, setCoordinate] = useState()
  const ref = useRef(null)
  
  useEffect(() => {
    function handleClick(element: any) {
      setCoordinate(element.target.getBoundingClientRect().bottom + window.scrollY)
    }

    document.addEventListener('click', (element) => {
      return handleClick(element);
    })
  }, [])

  return (
    <div className={styles.menu}>
      <button className={styles.menuButton} onClick={() => { setIsDropdownOpen(true) }} ref={ref}>
        <Icons name={EIcons.menu} size={16} mobileSize={12} />
      </button>
        {isDropdownOpen &&
          <Dropdown coordinate={coordinate} onClose={() => { setIsDropdownOpen(false) }} >
            <div className={styles.dropdownWrapper}>
              <MenuItemsList onClose={() => { setIsDropdownOpen(false) }} />
              <button onClick={() => { setIsDropdownOpen(false) }} className={styles.dropdownClose}>Закрыть</button>
            </div>
          </Dropdown>
        }
    </div>
  );
}
