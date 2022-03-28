import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

export default function Watch() {
  return (
    <>
      <Helmet>
        <title>Wetube | Watch</title>
      </Helmet>
      <h1>Watch</h1>
      <Outlet />
    </>
  );
}
