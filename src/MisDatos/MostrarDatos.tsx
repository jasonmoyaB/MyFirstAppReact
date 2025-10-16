interface MostrarDatosProps {
  nombre: string;
  apellido: string;
  edad: number;
}

export const MostrarDatos = ({ nombre, apellido, edad }: MostrarDatosProps) => {
  return (
    <div className="card">
      <ul className="list-group list-group-flush" style={{ width: "18rem" }}>
        <li className="list-group-item">
          <strong>Mi Nombre: </strong>
          {nombre}
        </li>
        <li className="list-group-item">
          <strong>Apellido: </strong>
          {apellido}
        </li>
        <li className="list-group-item">
          <strong>Edad: </strong>
          {edad}
        </li>
      </ul>
    </div>
  );
};
