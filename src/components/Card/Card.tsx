import styles from "./Card.module.scss";

interface ICard {
  title: string;
  cover: string;
}

function Card(card: ICard) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={card.cover} alt="cover" />
      <div className={styles.textContainer}>
        <p className={styles.text}>{card.title}</p>
      </div>
    </div>
  );
}

export default Card;
