// components/WeightForm.js
import React, { useState } from 'react';
import axios from 'axios';

const WeightForm = ({ userId, onWeightAdded }) => {
  const [weight, setWeight] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/weights', { userId, weight: Number(weight) });
      onWeightAdded(); // Llama a la función para refrescar la gráfica
      setWeight(''); // Reinicia el campo de entrada
    } catch (error) {
      console.error('Error al registrar el peso:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center m-4">
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Ingresa tu peso"
        required
        className="form-control mb-2"
      />
      <button type="submit" className="btn btn-primary">Registrar Peso</button>
    </form>
  );
};

export default WeightForm;
