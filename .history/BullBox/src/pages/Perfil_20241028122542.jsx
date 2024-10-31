import { useAuth } from '../context/AuthContext';


function Perfil() {
  const { isAuthenticated, user } = useAuth();

  return (
    <>
      <div className="perfil-container">
        {isAuthenticated ? (
          <>
            <h2 className="text-center m-4">Un gusto tenerte de vuelta {user.username || 'Usuario'}</h2>
            <div className="user-data text-center">
              <div className="card m-4">
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item fw-bold"><strong>Nombre de usuario:</strong> {user.username || 'No disponible'}</li>
                    <li className="list-group-item"><strong>Correo electrónico:</strong> {user.email || 'No disponible'}</li>
                    <li className="list-group-item"><strong>Dirección:</strong> {user.direction || 'No disponible'}</li>
                    <li className="list-group-item"><strong>Cédula:</strong> {user.cedula || 'No disponible'}</li>
                    <li className="list-group-item"><strong>Número telefónico:</strong> {user.tlf || 'No disponible'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center m-4">Debes iniciar sesión para ver tu perfil.</p>
        )}
      </div>
      <div>
        <h2 className='text-center m-4'>Lleva registro de tu peso</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Peso (kg)</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí se renderizan las filas con los datos */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Perfil;
