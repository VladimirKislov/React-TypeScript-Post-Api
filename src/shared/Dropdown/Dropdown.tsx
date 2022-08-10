import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.scss';

interface IDropdownProps {
  children?: React.ReactNode;
  onClose?: () => void;
  coordinate?: number;
}

const NOOP = () => { };

export function Dropdown({ children, onClose = NOOP, coordinate }: IDropdownProps) {
  if (typeof window !== 'undefined') {
    const dropdown = document.querySelector('#dropdown');
    if (!dropdown) return null

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
      function handelClick(event: MouseEvent) {
        if (event.target instanceof Node && !ref.current?.contains(event.target)) {
          onClose?.()
        }
      }

      document.addEventListener('click', handelClick)
      return () => {
        document.removeEventListener('click', handelClick)
      }
    }, [])

    return ReactDOM.createPortal((
      <div className={styles.container} ref={ref} style={{ top: coordinate }} >
        <div className={styles.listContainer}>
          <div className={styles.list}>
            {children}
          </div>
        </div>
      </div>), dropdown
    );
  } else return <></>
}
