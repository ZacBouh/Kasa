import arrowForward from "@assets/arrow_forward.png";
import styles from "./gallery.module.scss";
import animation from "./galleryAnimations.module.scss";
import { useState } from "react";

export default function Gallery({ title }: { title: string }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [transition, setTransition] = useState("enterRight");

  const handleNext = () => {
    imageIndex + 1 > ImageList.length - 1
      ? setImageIndex(0)
      : setImageIndex((imageIndex) => imageIndex + 1);
    // setTransition("exitLeft");
  };
  const handlePrevious = () => {
    imageIndex - 1 < 0
      ? setImageIndex(ImageList.length - 1)
      : setImageIndex((imageIndex) => imageIndex - 1);
    // setTransition("exitRight");
  };

  const handleTransition = () => {
    console.log("handle transition fired");
    if (!transition.includes("exit")) return;
    console.log("tranisition value : ", transition);
    if (transition.includes("Right")) {
      console.log("this is left");
      setTransition("enterLeft");
      handlePrevious();
    } else {
      console.log("this is right");
      setTransition("enterRight");
      handleNext();
    }
  };

  const ImageList = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
  ];
  return (
    <figure className={styles.mainContainer}>
      <img
        src={ImageList[imageIndex]}
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
