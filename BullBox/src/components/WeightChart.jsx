// components/WeightChart.js
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar las escalas y componentes necesarios
ChartJS.register(
  CategoryScale, // Asegúrate de registrar esta escala
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import axios from "axios";

// eslint-disable-next-line react/prop-types
const WeightChart = ({ userId }) => {
  const [weights, setWeights] = useState([]);

  useEffect(() => {
    const fetchWeights = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/weightRecords/user/${userId}`);
        setWeights(response.data);
      } catch (error) {
        console.error("Error al obtener los registros de peso:", error);
      }
    };

    if (userId) {
      fetchWeights();
    }
  }, [userId]);

  const data = {
    labels: weights.map((w) => new Date(w.date).toLocaleDateString()),
    datasets: [
      {
        label: "Peso (kg)",
        data: weights.map((w) => w.weight),
        fill: false,
        borderColor: "#ffc107",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="m-4">
      <h4 className="text-center">Historial de Peso</h4>
      <Line data={data} />
    </div>
  );
};

export default WeightChart;
