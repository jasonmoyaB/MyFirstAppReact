interface MostrarDatosProps {
  nombre: string;
  apellido: string;
  edad: number;
}

export const MostrarDatos = ({ nombre, apellido, edad }: MostrarDatosProps) => {
  return (
    <div>
      <h1>Mis Datos:</h1>
      <h2>Nombre: {nombre}</h2>
      <h2>apellido: {apellido}</h2>
      <h2>edad: {edad}</h2>
    </div>
  );
};
