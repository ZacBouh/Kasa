import styles from "./tag.module.scss";

export default function Tag({ content }: { content: string }) {
  return <div className={styles.mainContainer}>{content}</div>;
}
