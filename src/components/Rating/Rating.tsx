import styles from "./Rating.module.scss";
import StarPlain from "../../assets/Star-plain.png";
import StarFill from "../../assets/Star-fill.png";

interface IRating {
  stars: string;
}

function Rating({ stars }: IRating) {
  const ratingArray = [1, 2, 3, 4, 5];
  return (
    <div className={styles.container}>
      {ratingArray.map((level, index) =>
        +stars >= level ? (
          <img
            src={StarPlain}
            className={styles.stars}
            alt="Rating star filled"
            key={`${index} - ${level}`}
          />
        ) : (
          <img
            src={StarFill}
            className={styles.stars}
            alt="Rating star filled"
            key={`${index} - ${level}`}
          />
        )
      )}
    </div>
  );
}

export default Rating;
