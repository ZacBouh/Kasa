import Logo from "@assets/logo.svg?react";
import { NavLink } from "react-router-dom";
import styles from "@components/Header/header.module.scss";

export default function Header() {
  return (
    <header className={styles.mainContainer}>
      <Logo className={styles.logo} />
      <nav className={styles.nav}>
        <NavLink
          to={"home"}
          className={({ isActive }) =>
            isActive ? styles.isActive : styles.isNotActive
          }
        >
          ACCUEIL
        </NavLink>
        <NavLink
          to={"about"}
          className={({ isActive }) =>
            isActive ? styles.isActive : styles.isNotActive
          }
        >
          A PROPOS
        </NavLink>
      </nav>
    </header>
  );
}
