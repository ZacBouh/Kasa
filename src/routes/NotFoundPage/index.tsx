import styles from "./notFound.module.scss";
import { useRouteError } from "react-router-dom";
import Image404 from "@assets/404.svg?react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className={styles.mainContainer}>
      <Image404 className={styles.image} />

      <p>
        <span>Oups! La page que </span>
        <span>vous demandez n'existe pas.</span>
      </p>
      <Link to={"/"} className={styles.link}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default NotFoundPage;
