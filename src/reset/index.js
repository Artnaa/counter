import React from 'react';
import styles from './style.module.css'; // Подключение файла стилей для компонента Reset

function Reset(props) {
  const { counter, setCounter } = props;

  const handleIncrement = () => {
    setCounter(counter + 5);
  };

  const handleDecrement = () => {
    setCounter(counter - 5);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className={styles.reset}>
      <button className={styles.incrementfive} onClick={handleIncrement}>+5</button>
      <button className={styles.zero} onClick={handleReset}>reset</button>
      <button className={styles.decrementfive} onClick={handleDecrement}>-5</button>
    </div>
  );
}

export default Reset;
