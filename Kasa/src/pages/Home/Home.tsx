import Banner from "../../components/Banner/Banner";
import HomePageBanner from "../../assets/background-home.png";
import styles from "./Home.module.scss";
import rentalsList from "../../datas/logements.json";
import Card from "../../components/Card/Card";
import { Link } from "react-router";

function Home() {
  return (
    <div className={styles.container}>
      <Banner src={HomePageBanner} text="Chez vous, partout et ailleurs" />
      <main className={styles.cardWrapper}>
        {rentalsList.map((item) => (
          <Link key={item.id} to={`/rentals/${item.id}`}>
            <Card key={item.id} title={item.title} cover={item.cover}></Card>
          </Link>
        ))}
      </main>
    </div>
  );
}

export default Home;
