// components/Perfil.js
import { useAuth } from "../context/AuthContext";
import WeightForm from './WeightForm';
import WeightChart from './WeightChart';
import { useState } from 'react';

function Perfil() {
  const { isAuthenticated, user } = useAuth();
  const [refresh, setRefresh] = useState(false);

  const handleWeightAdded = () => {
    setRefresh(prev => !prev);
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
              {/* Aquí va el resto de tus datos de usuario */}
            </div>

            {/* Sección para registro de peso */}
            <div>
              <h2 className="text-center m-4">Lleva registro de tu peso</h2>
              <WeightForm onWeightAdded={handleWeightAdded} />
              <WeightChart key={refresh} />
            </div>
          </>
        ) : (
          <p className="text-center m-4">
            Debes iniciar sesión para ver tu perfil.
          </p>
        )}
      </div>
    </>
  );
}

export default Perfil;
