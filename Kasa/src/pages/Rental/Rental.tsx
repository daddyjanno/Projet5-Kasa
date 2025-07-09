import { Navigate, useParams } from "react-router-dom";
import rentalsList from "../../datas/logements.json";
import styles from "./Rental.module.scss";
import Slideshow from "../../components/Slideshow/Slideshow";
import Tag from "../../components/Tag/Tag";
import Avatar from "../../components/Avatar/Avatar";
import Rating from "../../components/Rating/Rating";

function Rental() {
  const rentalId = useParams();
  const { id } = rentalId;
  const data = rentalsList.find((el) => el.id === id);
  return data ? (
    <div className={styles.container}>
      <Slideshow pictures={data.pictures} />
      <div className={styles.informations}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{data.title}</h2>
          <h3 className={styles.location}>{data.location}</h3>
          <div className={styles.tags}>
            {data.tags.map((tag, index) => (
              <Tag key={`${index}-${tag}`} tag={tag} />
            ))}
          </div>
        </div>
        <div className={styles.avatarAndRatingContainer}>
          <div className={styles.avatarContainer}>
            <Avatar host={data.host} />
          </div>
          <Rating stars={data.rating} />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/error" />
  );
}

export default Rental;
