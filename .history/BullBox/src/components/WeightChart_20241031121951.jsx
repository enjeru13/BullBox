// components/WeightChart.js
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registrar las escalas y componentes necesarios
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WeightChart = () => {
  const [weights, setWeights] = useState([]);

  useEffect(() => {
    const currentWeights = JSON.parse(localStorage.getItem('weights')) || [];
    setWeights(currentWeights);
  }, []);

  const data = {
    labels: weights.map(w => new Date(w.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Peso (kg)',
        data: weights.map(w => w.weight),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="m-1">
      <h4 className="text-center">Historial de Peso</h4>
      <Line data={data} />
    </div>
  );
};

export default WeightChart;
