import Logo from "../assets/logo.svg?react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Logo />
      <NavLink to={"home"}>Home</NavLink>
      <NavLink to={"about"}>About</NavLink>
    </>
  );
}
