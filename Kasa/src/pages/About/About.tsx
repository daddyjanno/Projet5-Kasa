import Banner from "../../components/Banner/Banner";
import styles from "./About.module.scss";
import AboutPageBanner from "../../assets/background-about.png";
import informations from "../../datas/informations.json";
import Collapse from "../../components/Collapse/Collapse";

function About() {
  return (
    <div className={styles.container}>
      <Banner src={AboutPageBanner} />
      {informations.map((item, index) => (
        <div key={index} className={styles.wrapper}>
          <Collapse
            key={`${index} - ${item}`}
            title={item.title}
            text={item.description}
          />
        </div>
      ))}
    </div>
  );
}

export default About;
