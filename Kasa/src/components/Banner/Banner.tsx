import styles from "./Banner.module.scss";

interface IBanner {
  src: string;
  text: string;
}

function Banner(banner: IBanner) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{banner.text}</p>
      <div className={styles.imageContainer}>
        <img src={banner.src} alt="" className={styles.img} />
      </div>
    </div>
  );
}

export default Banner;
