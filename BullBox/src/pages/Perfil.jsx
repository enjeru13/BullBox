import { useAuth } from "../context/AuthContext";
import WeightForm from "../components/WeightForm";
import WeightChart from "../components/WeightChart";
import { useState } from "react";
import axios from "axios"; // Importa Axios para enviar los datos

function Perfil() {
  const { isAuthenticated, user } = useAuth();
  const [refresh, setRefresh] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user.username || "",
    email: user.email || "",
    direction: user.direction || "",
    tlf: user.tlf || "",
  });

  const handleWeightAdded = () => {
    setRefresh((prev) => !prev); // Refresca la gráfica al agregar un peso
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Lógica para enviar los datos actualizados al backend
      await axios.put('/api/user/update', formData);
      alert("Datos actualizados correctamente");
      setIsEditing(false);
    } catch (error) {
      console.error("Error al actualizar los datos:", error);
    }
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
                {!isEditing ? (
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
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Nombre de usuario</label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Correo electrónico</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Dirección</label>
                      <input
                        type="text"
                        name="direction"
                        value={formData.direction}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Número telefónico</label>
                      <input
                        type="text"
                        name="tlf"
                        value={formData.tlf}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar cambios</button>
                  </form>
                )}
                <button className="btn btn-secondary mt-3" onClick={handleEditToggle}>
                  {isEditing ? "Cancelar" : "Editar información"}
                </button>
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
