import styles from "./Slideshow.module.scss";
import arrowLeft from "../../assets/Arrow-left.png";
import arrowRight from "../../assets/Arrow-right.png";
import { useState } from "react";

interface ISlideshow {
  pictures: string[];
}

function Slideshow({ pictures }: ISlideshow) {
  const [index, setIndex] = useState(0);
  const isFirstSlide = index === 0;
  const isLastSlide = index === pictures.length - 1;

  const handleLeft = () => {
    if (!isFirstSlide) {
      setIndex(index - 1);
    } else {
      setIndex(pictures.length - 1);
    }
  };

  const handleRight = () => {
    if (!isLastSlide) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div className={styles.container}>
      <img
        src={arrowLeft}
        alt="left arrow"
        className={styles.leftArrow}
        onClick={handleLeft}
      />
      <img src={pictures[index]} alt="slideshow" className={styles.slide} />
      <span className={styles.indicator}></span>
      <img
        src={arrowRight}
        alt="right arrow"
        className={styles.rightArrow}
        onClick={handleRight}
      />
    </div>
  );
}

export default Slideshow;
