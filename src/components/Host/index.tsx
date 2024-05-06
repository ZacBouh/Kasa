import styles from "./host.module.scss";

export default function Host({
  name,
  picture,
}: {
  name: string;
  picture: string;
}) {
  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.nameContainer}>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <img src={picture} alt={`${name} photo de profil`} />
    </div>
  );
}
