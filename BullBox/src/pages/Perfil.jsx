import { useAuth } from "../context/AuthContext";
import WeightForm from "../components/WeightForm";
import WeightChart from "../components/WeightChart";
import { useState } from "react";

function Perfil() {
  const { isAuthenticated, user } = useAuth();
  const [refresh, setRefresh] = useState(false);

  const handleWeightAdded = () => {
    setRefresh((prev) => !prev); // Refresca la gráfica al agregar un peso
  };

  return (
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
                    <span className="fw-bold">{user.username || "No disponible"}</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Correo electrónico:</strong>{" "}
                    <span className="fw-bold">{user.email || "No disponible"}</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Dirección:</strong>{" "}
                    <span className="fw-bold">{user.direction || "No disponible"}</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Número telefónico:</strong>{" "}
                    <span className="fw-bold">{user.tlf || "No disponible"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sección para registro de peso */}
          <div>
            <h2 className="text-center m-4">Lleva registro de tu peso</h2>
            <WeightForm onWeightAdded={handleWeightAdded} userId={user.id} />
            <WeightChart key={refresh} userId={user.id} />
          </div>
        </>
      ) : (
        <p className="text-center m-4">
          Debes iniciar sesión para ver tu perfil.
        </p>
      )}
    </div>
  );
}

export default Perfil;
