import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { App } from "./App";
import { AppMostrarDatos } from "./MisDatos/AppMostrarDatos";
import { MostrarDatos } from "./MisDatos/MostrarDatos";

export const MainRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route path="/mis-datos" element={<AppMostrarDatos />} />
      {/* <Route path="/validar-edad" element={<MostrarDatos />} /> */}
    </Route>

    <Route
      path="*"
      element={<h1 className="text-center mt-5">404 - Página no encontrada</h1>}
    />
  </Routes>
);
