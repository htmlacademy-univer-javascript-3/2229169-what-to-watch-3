import styles from './spinner.module.css';

export default function Spinner():JSX.Element{
  return(
    <div className={styles.component}>
      <div className={styles.spinner}>
        <span className={styles.loader}></span>
        <p className={styles.loading}>Loading...</p>
      </div>
    </div>
  );
}
