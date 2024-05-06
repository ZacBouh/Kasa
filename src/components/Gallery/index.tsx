import arrowForward from "@assets/arrow_forward.png";
import styles from "./gallery.module.scss";
import animation from "./galleryAnimations.module.scss";
import { useState } from "react";

export default function Gallery({
  title,
  pictures,
}: {
  title: string;
  pictures: string[];
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const [transition, setTransition] = useState("enterRight");

  const handleNext = () => {
    imageIndex + 1 > pictures.length - 1
      ? setImageIndex(0)
      : setImageIndex((imageIndex) => imageIndex + 1);
    // setTransition("exitLeft");
  };
  const handlePrevious = () => {
    imageIndex - 1 < 0
      ? setImageIndex(pictures.length - 1)
      : setImageIndex((imageIndex) => imageIndex - 1);
    // setTransition("exitRight");
  };

  const handleTransition = () => {
    if (!transition.includes("exit")) return;
    if (transition.includes("Right")) {
      setTransition("enterLeft");
      handlePrevious();
    } else {
      setTransition("enterRight");
      handleNext();
    }
  };
  return (
    <figure className={styles.mainContainer}>
      <img
        src={pictures[imageIndex]}
        alt={title}
        className={animation[transition]}
        key={imageIndex}
        onAnimationEnd={handleTransition}
      />
      <img
        src={arrowForward}
        alt="next image"
        className={styles.arrowForward}
        onClick={() => setTransition("exitLeft")}
      />
      <img
        src={arrowForward}
        alt="previous image"
        className={styles.arrowBackward}
        onClick={() => setTransition("exitRight")}
      />
    </figure>
  );
}
