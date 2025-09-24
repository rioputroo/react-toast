import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastData, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toastData.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast id={toast.id} variant={toast.variant} handleDismiss={handleDismiss}>{toast.message}</Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
