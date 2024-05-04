import styles from "./footer.module.scss";
import Logo from "@assets/logo-white.svg?react";
export default function Footer() {
  return (
    <footer className={styles.mainContainer}>
      <Logo width={"122px"} height={39.44} />
      <div className={styles.text}>
        <p>© 2020 Kasa. All</p>
        <p>rights reserved</p>
      </div>
    </footer>
  );
}
