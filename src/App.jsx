
import './App.css'
import Card from './components/Card'
import React, { useState } from 'react';

const App = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [food, setFood] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 
  const handleEmployeeNameChange = (event) => {
    setEmployeeName(event.target.value);
  };

  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const employeeNameIsValid = employeeName.trim().length > 3;
    const foodIsValid = food.trim().length >= 5 && !food.startsWith(' ');

    if (!foodIsValid || !employeeNameIsValid) {
      setErrorMessage('Por favor, chequea que la información sea correcta');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div>
    <h2>Formulario de Comida Favorita</h2>
      <form onSubmit={handleSubmit}>
        
        <label>
          Nombre del Empleado: <br /> 
          <input type="text" value={employeeName} onChange={handleEmployeeNameChange} />
        </label>
        <br />
        <br />
        <label>
          Comida Favorita: <br />
          <input type="text" value={food} onChange={handleFoodChange} />
        </label>
        <br /> <br />
        <button type="submit">Enviar</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      {food && employeeName && !errorMessage && (
        <Card food={food} employeeName={employeeName} />
      )}
    </div>
  );
};

export default App;