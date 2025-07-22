import { useEffect, useRef, useState } from "react";
import styles from "./Collapse.module.scss";
import chevronDown from "../../assets/chevron-down-solid.png";

interface ICollapse {
  title: string;
  text: string | string[];
}

function Collapse({ title, text }: ICollapse) {
  const [open, setOpen] = useState(false);

  const [height, setHeight] = useState("0em"); // height of the content
  const [margin, setMargin] = useState("-0.938em");

  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current !== null) {
      setHeight(open ? `${contentRef.current.scrollHeight}em` : "0em");
      setMargin(open ? "-0.625em" : "-0.938em");
    }
  }, [open]);

  const toggleCollapse = () => {
    setOpen((prev) => !prev);
  };

  return (
    <section className={styles.collapseSection}>
      <button
        className={styles.collapse}
        onClick={toggleCollapse}
        aria-expanded={open}
        aria-controls="collapse-content"
      >
        <h4 className={styles.title}>{title}</h4>
        <img
          className={`${styles.chevron} ${open ? styles.open : ""}`}
          src={chevronDown}
          data-open={open}
        />
      </button>
      <div
        id="collapse-content"
        className={styles.textContainer}
        ref={contentRef}
        style={{ maxHeight: height, marginTop: margin }}
        aria-hidden={!open}
      >
        {typeof text === "string" ? (
          <p>{text}</p>
        ) : (
          <ul className={styles.collapseUl}>
            {text.map((item, index) => (
              <li key={index} className={styles.collapseLi}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Collapse;
