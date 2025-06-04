import styles from "./Banner.module.scss";

function Banner(src: string, text: string) {
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
