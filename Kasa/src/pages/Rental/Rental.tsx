import { Navigate, useParams } from "react-router-dom";
import rentalsList from "../../datas/logements.json";
import styles from "./Rental.module.scss";
import Slideshow from "../../components/Slideshow/Slideshow";

function Rental() {
  const rentalId = useParams();
  const { id } = rentalId;
  const data = rentalsList.find((el) => el.id === id);
  return data ? (
    <div className={styles.container}>
      <Slideshow pictures={data.pictures} />
    </div>
  ) : (
    <Navigate to="/error" />
  );
}

export default Rental;
