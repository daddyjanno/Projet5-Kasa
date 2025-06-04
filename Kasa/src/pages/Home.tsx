import Banner from "../components/Banner/Banner";
import HomePageBanner from "../assets/background-home.png";

function Home() {
  return (
    <>
      <Banner src={HomePageBanner} text="Chez vous, partout et ailleurs" />
    </>
  );
}

export default Home;
