import { Outlet } from "react-router";
import Header from "../components/Header";

function MainLyout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLyout;
