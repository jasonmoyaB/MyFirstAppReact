import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

export const Layout = () => (
  <>
    <NavBar />
    {/* espacio debajo del navbar fijo */}
    <div style={{ paddingTop: 72 }} />
    <Outlet />
  </>
);
