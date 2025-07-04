import styles from "./Tag.module.scss";

interface ITag {
  tag: string;
}

function Tag({ tag }: ITag) {
  return <div className={styles.container}>{tag}</div>;
}

export default Tag;
