import banner from "@assets/banner.png";
import styles from "./banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.mainContainer}>
      <img src={banner} alt="bord de mer" />
      <h1>
        Chez vous,
        <br /> partout et ailleurs
      </h1>
    </div>
  );
}
