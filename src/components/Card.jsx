import React from 'react';

function Card(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      backgroundColor: '#f9f9f9',
      width: '250px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2>{props.titulo}</h2>
      <p>{props.descripcion}</p>
    </div>
  );
}
export default Card;
