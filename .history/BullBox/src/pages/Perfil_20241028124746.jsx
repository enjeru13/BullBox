import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Chart from "chart.js/auto";
import { useAuth } from "../context/AuthContext";

function Perfil() {
  const [data, setData] = useState([]);

  const handleSubmit = (date, weight) => {
    setData([...data, { date, weight }]);
  };
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((item) => item.date.toLocaleDateString()),
        datasets: [
          {
            label: "Peso",
            data: data.map((item) => item.weight),
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    });
  }, [data]);

  return (
    <>
      <div className="perfil-container">
        {isAuthenticated ? (
          <>
            <h2 className="text-center m-4">
              Un gusto tenerte de vuelta {user.username || "Usuario"}
            </h2>
            <div className="user-data">
              <div className="card m-4">
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Nombre de usuario:</strong>{" "}
                      <span className="fw-bold">
                        {user.username || "No disponible"}
                      </span>
                    </li>
                    <li className="list-group-item">
                      <strong>Correo electrónico:</strong>{" "}
                      <span className="fw-bold">
                        {user.email || "No disponible"}
                      </span>
                    </li>
                    <li className="list-group-item">
                      <strong>Dirección:</strong>{" "}
                      <span className="fw-bold">
                        {user.direction || "No disponible"}
                      </span>
                    </li>
                    <li className="list-group-item">
                      <strong>Cédula:</strong>{" "}
                      <span className="fw-bold">
                        {user.cedula || "No disponible"}
                      </span>
                    </li>
                    <li className="list-group-item">
                      <strong>Número telefónico:</strong>{" "}
                      <span className="fw-bold">
                        {user.tlf || "No disponible"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center m-4">
            Debes iniciar sesión para ver tu perfil.
          </p>
        )}
      </div>
      <div>
        <h2 className="text-center m-4">Lleva registro de tu peso</h2>
        <div>
          {/* Formulario para ingresar datos */}
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <input
            type="number"
            placeholder="Peso"
            onChange={(e) => setWeight(e.target.value)}
          />
          <button onClick={() => handleSubmit(startDate, weight)}>
            Agregar
          </button>

          {/* Gráfico */}
          <canvas id="myChart" width="400" height="200"></canvas>
        </div>
      </div>
    </>
  );
}

export default Perfil;
