import { useParams } from "react-router-dom";

function Rental() {
  const { id } = useParams();
  return (
    <>
      <h1>Rental page</h1>
      <p>id: {id}</p>
    </>
  );
}

export default Rental;
