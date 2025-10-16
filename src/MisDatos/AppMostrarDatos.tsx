import { use, useState } from "react";
import { MostrarDatos } from "./MostrarDatos";

export const AppMostrarDatos = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState<number | "">("");

  const ValidarEdad = (edad: number) => {
    if (edad >= 17) {
      alert(`Acceso permitido tu edad: ${ValidarEdad}`);
      return true;
    } else {
      alert(`Acceso denegado tu edad: ${ValidarEdad}`);
      return false;
    }
  };

  return (
    <form className="container mt-4" style={{ maxWidth: 500 }}>
      <h4 className="mb-3">Datos personales</h4>

      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          value={nombre}
          placeholder="Ingresa tu nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          className="form-control"
          value={apellido}
          placeholder="Ingresa tu apellido"
          onChange={(e) => setApellido(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="edad" className="form-label">
          Edad
        </label>
        <input
          type="number"
          className="form-control"
          value={edad}
          placeholder="Ingresa tu edad"
          onChange={(e) => setEdad(Number(e.target.value))}
        />
      </div>
      <MostrarDatos nombre={nombre} apellido={apellido} edad={Number(edad)} />
      {/* <button type="submit" className="btn btn-primary w-100">
        Enviar
      </button> */}
    </form>
  );
};
