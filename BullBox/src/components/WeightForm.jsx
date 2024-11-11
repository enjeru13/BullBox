// components/WeightForm.js
import { useState } from "react";
import axios from "axios"; // Asegúrate de tener axios instalado

// eslint-disable-next-line react/prop-types
const WeightForm = ({ onWeightAdded, userId }) => {
  const [weight, setWeight] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (weight) {
      try {
        await axios.post("https://bull-box.vercel.app/api/weightRecords/add", {
          userId, // Enviar el ID del usuario autenticado
          weight: Number(weight),
        });
        onWeightAdded(); // Refresca la gráfica después de agregar el peso
        setWeight(""); // Reinicia el campo de entrada
      } catch (error) {
        console.error("Error al enviar el peso al backend:", error);
        alert("Hubo un error al registrar el peso");
      }
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
      <button type="submit" className="btn mt-3 btn-warning fw-bold">
        Registrar Peso
      </button>
    </form>
  );
};

export default WeightForm;
