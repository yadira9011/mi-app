import React from 'react';
import Card from './components/Card';

const data1 = [
  { titulo: "React", descripcion: "Una librería para construir interfaces de usuario." },
  { titulo: "JSX", descripcion: "Sintaxis que combina HTML con JavaScript." },
  { titulo: "Hooks", descripcion: "Funciones para manejar estado y ciclo de vida en componentes funcionales." }
];


const dataz = [
  { titulo: "Tarjeta Base", descripcion: "Esta es la tarjeta de ejemplo." }
];

const data = [
  { titulo: "Tarjeta Base", descripcion: "Esta es la tarjeta de ejemplo." }

  { titulo: "Tarjeta Base", descripcion: "Esta es la tarjeta de ejemplo." },
  { titulo: "Juan", descripcion: "Soy parte del equipo 1." },
  { titulo: "María", descripcion: "Mi tarjeta personalizada." },
  {titulo: "Fernando", descripción: "actividad react."}
  {Titulo: "Oriakcito", descripcion: "Oriak estuvo aquí"},
  { titulo: "Tarjeta de oresentación", descripcion: "Miguel" }

];



function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Mis primeras tarjetas con React</h1>
      {data.map((item, index) => (
        <Card key={index} titulo={item.titulo} descripcion={item.descripcion} />
      ))}
    </div>
  );
}
export default App;
 