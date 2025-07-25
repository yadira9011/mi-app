import React from 'react';
import Card from './components/Card';

const data = [
  { titulo: "React", descripcion: "Una librería para construir interfaces de usuario." },
  { titulo: "JSX", descripcion: "Sintaxis que combina HTML con JavaScript." },
  { titulo: "Hooks", descripcion: "Funciones para manejar estado y ciclo de vida en componentes funcionales." }
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
