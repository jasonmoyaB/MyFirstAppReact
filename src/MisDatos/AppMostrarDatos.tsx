import { use, useState } from "react";

export const AppMostrarDatos = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
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
          id="nombre"
          placeholder="Ingresa tu nombre"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          className="form-control"
          id="apellido"
          placeholder="Ingresa tu apellido"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="edad" className="form-label">
          Edad
        </label>
        <input
          type="number"
          className="form-control"
          id="edad"
          placeholder="Ingresa tu edad"
          min="0"
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Enviar
      </button>
    </form>
  );
};
