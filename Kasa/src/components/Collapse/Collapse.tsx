import { useRef, useState } from "react";
import styles from "./Collapse.module.scss";
import chevronDown from "../../assets/chevron-down.svg";

interface ICollapse {
  title: string;
  text: string | string[];
}

function Collapse(collapse: ICollapse) {
  const { title, text } = collapse;
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState("0px"); // height of the content
  const [margin, setMargin] = useState("-15px");

  const contentCollapse = useRef<HTMLDivElement | null>(null);

  const toggleCollapse = () => {
    setOpen(!open);
    if (contentCollapse.current !== null) {
      setHeight(open ? "0px" : `${contentCollapse.current.scrollHeight}px`);
    }
    setMargin(open ? "-15px" : "-10px");
  };

  return (
    <section className={styles.collapseSection}>
      <div className={styles.collapse} onClick={toggleCollapse}>
        <h4 className={styles.title}>{title}</h4>
        <img className={styles.chevron} src={chevronDown} data-open={open} />
      </div>
      {typeof text === "string" ? (
        <div
          className={styles.textContainer}
          data-open={open}
          ref={contentCollapse}
          style={{ maxHeight: height, marginTop: margin }}
        >
          <p>{text}</p>
        </div>
      ) : (
        <div
          className={styles.textContainer}
          data-open={open}
          ref={contentCollapse}
          style={{ maxHeight: `${height}`, marginTop: `${margin}` }}
        >
          <ul className={styles.collapseUl}>
            {text.map((item, index) => (
              <li key={index} className={styles.collapseLi}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Collapse;
