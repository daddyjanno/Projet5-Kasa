import styles from "./Banner.module.scss";

interface Props {
  src: string;
  text: string;
}

function Banner(props: Props) {
  console.log(props);
  const { src, text } = props;

  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      <div className={styles.imageContainer}>
        <img src={src} alt="" className={styles.img} />
      </div>
    </div>
  );
}

export default Banner;
