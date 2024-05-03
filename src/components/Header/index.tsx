import Logo from "@assets/logo.svg?react";
import { NavLink } from "react-router-dom";
import styles from "@components/Header/header.module.scss";

export default function Header() {
  return (
    <header className={styles.mainContainer}>
      <Logo />
      <nav className={styles.nav}>
        <NavLink to={"home"}>ACCUEIL</NavLink>
        <NavLink to={"about"}>A PROPOS</NavLink>
      </nav>
    </header>
  );
}
