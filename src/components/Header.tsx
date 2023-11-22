import styles from "./Header.module.css";
import feedIcon from "../assets/feed-icon.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={feedIcon} alt="logo" />
    </header>
  );
}
