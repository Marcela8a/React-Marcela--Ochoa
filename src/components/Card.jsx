import React from 'react'


const Card = ({ food, employeeName }) => {
  return (
    <div>
     <h2> Hola Querid@:</h2>
      <p>{employeeName}</p>
      <h2>Tu comida favorita es:</h2>
      <p>{food}</p>
     
    </div>
  );
};

export default Card;