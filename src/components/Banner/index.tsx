import styles from "./banner.module.scss";

export default function Banner({
  caption,
  picture,
}: {
  caption: boolean;
  picture: string;
}) {
  const darken = caption ? 0.6 : 0.3;

  return (
    <div
      className={styles.mainContainer}
      style={
        {
          "--bg-url": `url(${picture})`,
          "--darken": darken,
          "--shadow": caption
            ? "drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))"
            : "drop-shadow(0 0px 0px rgba(0, 0, 0, 0.0))",
        } as React.CSSProperties
      }
    >
      {caption && (
        <h1>
          <span>Chez vous, </span>
          <span>partout et ailleurs</span>
        </h1>
      )}
    </div>
  );
}
