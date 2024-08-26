import OrangeButton from "../buttons/OrangeButton/OrangeButton";
import styles from "./NavBar.module.css";
export default function NavBar() {
  return (
    <div className={styles.nav_bar_container}>
      <div className={styles.nav_bar_item}>
        <OrangeButton />
      </div>
      <div className={styles.nav_bar_item}>
        <OrangeButton />
      </div>
      <div className={styles.nav_bar_item}>
        <OrangeButton />
      </div>
      <div className={styles.nav_bar_item}>
        <OrangeButton />
      </div>
    </div>
  );
}
