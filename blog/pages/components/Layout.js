import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div id="Layout" className={styles.container}>
      {children}
    </div>
  );
}
