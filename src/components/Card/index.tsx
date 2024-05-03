import styles from "./card.module.scss";

export default function Card({
  title,
  img,
  alt,
}: {
  title: string;
  img: string;
  alt: string;
}) {
  return (
    <article className={styles.mainContainer}>
      <img src={img} alt={alt} />
      <h1>{title}</h1>
    </article>
  );
}
