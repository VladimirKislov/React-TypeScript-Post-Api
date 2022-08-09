import React from 'react';
import style from './notFound.scss';

export function NotFound() {
    return (
        <div className={style.wrapperNotFound}>
            <img className={style.imageNotFound} src="https://img2.goodfon.ru/original/1920x1080/7/27/oshibka-404-oshibka-error-404.jpg" alt="404NotFound" />
            {/* <h2 className={style.titleNotFound}>
                404 Not Found
            </h2> */}
        </div>
    )
}