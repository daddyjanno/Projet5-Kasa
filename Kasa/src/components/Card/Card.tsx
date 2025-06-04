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
      <div className="textContainer">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;
