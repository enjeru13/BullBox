import { useAuth } from "../context/AuthContext";
import WeightForm from "../components/WeightForm";
import WeightChart from "../components/WeightForm";
import { useState } from "react";

function Perfil() {
  const { isAuthenticated, user } = useAuth();
  const [refresh, setRefresh] = useState(false);

  const handleWeightAdded = () => {
    setRefresh((prev) => !prev);
  };

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
        <WeightForm onWeightAdded={handleWeightAdded} />
        <WeightChart key={refresh} />
      </div>
    </>
  );
}

export default Perfil;

// // components/Perfil.js
// import { useAuth } from "../context/AuthContext";

//

// function Perfil() {

//   return (
//     <>
//       <div className="perfil-container">
//         {isAuthenticated ? (
//           <>
//             <h2 className="text-center m-4">
//               Un gusto tenerte de vuelta {user.username || "Usuario"}
//             </h2>
//             <div className="user-data">
//               {/* Aquí va el resto de tus datos de usuario */}
//             </div>

//             {/* Sección para registro de peso */}
//
//           </>
//         ) : (
//           <p className="text-center m-4">
//             Debes iniciar sesión para ver tu perfil.
//           </p>
//         )}
//       </div>
//     </>
//   );
// }

// export default Perfil;
