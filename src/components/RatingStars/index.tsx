import Star from "@assets/star.svg?react";
import StarEmpty from "@assets/star-empty.svg?react";
import styles from "./rating.module.scss";

export default function RatingStars({ rating }: { rating: number }) {
  let stars: Array<0 | 1> = Array(5).fill(0);
  if ((rating = 5)) {
    stars.fill(1, 0, 4);
  } else {
    stars.fill(1, 0, rating - 1);
  }
  return (
    <div className={styles.mainContainer}>
      {stars.map((star) => (star == 1 ? <Star /> : <StarEmpty />))}
    </div>
  );
}
