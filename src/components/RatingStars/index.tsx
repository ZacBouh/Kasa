import Star from "@assets/star.svg?react";
import StarEmpty from "@assets/star-empty.svg?react";
import styles from "./rating.module.scss";

export default function RatingStars({ rating }: { rating: number }) {
  let stars: Array<0 | 1> = Array(5).fill(0);
  stars.fill(1, 0, rating);
  return (
    <div className={styles.mainContainer}>
      {stars.map((star, index) =>
        star == 1 ? <Star key={index} /> : <StarEmpty key={index} />
      )}
    </div>
  );
}
