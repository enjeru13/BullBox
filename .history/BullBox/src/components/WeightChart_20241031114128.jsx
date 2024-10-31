// components/WeightChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const WeightChart = ({ userId }) => {
  const [weights, setWeights] = useState([]);

  useEffect(() => {
    const fetchWeights = async () => {
      try {
        const response = await axios.get(`/api/weights/${userId}`);
        setWeights(response.data);
      } catch (error) {
        console.error('Error al obtener los pesos:', error);
      }
    };

    fetchWeights();
  }, [userId]);

  const data = {
    labels: weights.map(w => new Date(w.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Peso',
        data: weights.map(w => w.weight),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
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
