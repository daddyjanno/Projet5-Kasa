import styles from "./Card.module.scss";

interface Props {
  title: string;
  cover: string;
}

function Card(props: Props) {
  const { title, cover } = props;
  return (
    <div className={styles.card}>
      <img className={styles.img} src={cover} alt="cover" />
      <div className={styles.textContainer}>
        <p className={styles.text}>{title}</p>
      </div>
    </div>
  );
}

export default Card;
