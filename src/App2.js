/* Alternative implementation of importing CSS */

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}> 
      <h1 className={styles.name}>Hyper</h1>

    </div>
  );
}