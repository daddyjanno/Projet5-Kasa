import { Navigate, useParams } from "react-router-dom";
import rentalsList from "../../datas/logements.json";

function Rental() {
  const rentalId = useParams();
  const { id } = rentalId;
  const data = rentalsList.find((el) => el.id === id);
  return data ? (
    <>
      <h1>Rental page</h1>
      {Object.entries(data).map(([key, value]) => (
        <p key={key}>
          {key}: {String(value)}
        </p>
      ))}
    </>
  ) : (
    <Navigate to="/error" />
  );
}

export default Rental;
