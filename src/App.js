import React, { useState } from 'react';
import styles from './App.module.css'; // Подключение файла стилей с помощью CSS Modules
import Reset from './reset';

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className={styles.schetchik}>
      <button className={styles.increment} onClick={handleIncrement}>+</button>
      <p>{counter}</p>
      <button className={styles.decrement} onClick={handleDecrement}>-</button>

      {/* Передача состояния и функций обратно вниз в компонент Reset */}
      <Reset counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
