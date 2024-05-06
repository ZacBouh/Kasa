import banner from "@assets/banner.png";
import styles from "./banner.module.scss";

export default function Banner({
  caption,
  picture,
  alt,
}: {
  caption: boolean;
  picture: string;
  alt: string;
}) {
  return (
    <div className={styles.mainContainer}>
      <img
        src={picture}
        alt={alt}
        className={!caption ? styles.noCaption : ""}
      />
      {caption && (
        <h1>
          Chez vous,
          <br /> partout et ailleurs
        </h1>
      )}
    </div>
  );
}
