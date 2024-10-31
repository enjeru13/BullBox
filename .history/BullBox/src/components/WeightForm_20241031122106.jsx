// components/WeightForm.js
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const WeightForm = ({ onWeightAdded }) => {
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight) {
      const currentWeights = JSON.parse(localStorage.getItem("weights")) || [];
      currentWeights.push({
        weight: Number(weight),
        date: new Date().toISOString(),
      });
      localStorage.setItem("weights", JSON.stringify(currentWeights));
      onWeightAdded(); // Llama a la función para refrescar la gráfica
      setWeight(""); // Reinicia el campo de entrada
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
      <button type="submit" className="btn mt-2 btn-primary">
        Registrar Peso
      </button>
    </form>
  );
};

export default WeightForm;
