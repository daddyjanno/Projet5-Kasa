import styles from "./Slideshow.module.scss";
import arrowLeft from "../../assets/Arrow-left.png";
import arrowRight from "../../assets/Arrow-right.png";
import { useState } from "react";

interface ISlideshow {
  pictures: string[];
}

function Slideshow({ pictures }: ISlideshow) {
  const [index, setIndex] = useState(0);
  const showSpan = pictures.length > 1;
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
        className={`${styles.leftArrow} ${showSpan && styles.visible}`}
        onClick={handleLeft}
      />
      <img src={pictures[index]} alt="slideshow" className={styles.slide} />
      <span className={`${styles.indicator} ${showSpan && styles.visible}`}>
        {index + 1}/{pictures.length}
      </span>
      <img
        src={arrowRight}
        alt="right arrow"
        className={`${styles.rightArrow} ${showSpan && styles.visible}`}
        onClick={handleRight}
      />
    </div>
  );
}

export default Slideshow;
