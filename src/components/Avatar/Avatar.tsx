import styles from "./Avatar.module.scss";

interface IAvatar {
  host: {
    name: string;
    picture: string;
  };
}

function Avatar({ host }: IAvatar) {
  return (
    <div className={styles.container}>
      <h4 className={styles.name}>{host.name}</h4>
      <img
        className={styles.picture}
        src={host.picture}
        alt={`picture of the host ${host.name}`}
      />
    </div>
  );
}

export default Avatar;
