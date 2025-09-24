import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

// export const ToastContext = React.createContext();

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [isToastVisible, setIsToastVisible] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsToastVisible(true);
  }

  function handleDismiss() {
    setIsToastVisible(false);
  }

  return (
    <div className={styles.wrapper}>

      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {/* <ToastContext.Provider value={{ isToastVisible, setIsToastVisible }}> */}
      {isToastVisible && <Toast variant={variant} handleDismiss={handleDismiss}>{message}</Toast>}
      {/* </ToastContext.Provider> */}

      <div className={styles.controlsWrapper}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" className={styles.messageInput} value={message} onChange={(event) => {
                setMessage(event.target.value);
              }} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map((option) => {
                const id = `variant-${option}`;

                return (
                  <label htmlFor={id} key={id}>
                    <input
                      id={id}
                      type="radio"
                      name="variant"
                      value={option}
                      checked={variant === option}
                      onChange={(event) => {
                        setVariant(event.target.value)
                      }}
                    />
                    {option}
                  </label>
                )
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
