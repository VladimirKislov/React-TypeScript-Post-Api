import React, { useEffect, useState } from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import styles from './threadtitle.scss';

export function ThreadTitle() {

  return (
    <div>
        <h1 className={styles.threadTitle}>Header</h1>
    </div>
  );
}

