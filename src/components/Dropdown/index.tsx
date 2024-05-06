import { useState } from "react";
import arrow from "@assets/dropdown_arrow.png";
import styles from "./dropdown.module.scss";

export default function Dropdown({
  title,
  content,
}: {
  title: string;
  content: string[];
}) {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <section
      className={isOpen ? styles.mainContainerOpen : styles.mainContainerClosed}
    >
      <div className={styles.titleContainer} onClick={handleToggle}>
        <h2>{title}</h2>
        <img
          src={arrow}
          alt="Bouton voir plus de détail"
          className={isOpen ? styles.arrowOpen : styles.arrowClosed}
        />
      </div>
      <div className={isOpen ? styles.contentOpen : styles.contentClosed}>
        <div className={styles.contentWrapper}>
          {content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
