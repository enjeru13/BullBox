import { useAuth } from '../context/AuthContext';


function Perfil() {
  const { isAuthenticated, user } = useAuth();

  return (
    <>
      <div className="perfil-container">
        {isAuthenticated ? (
          <>
            <h2 className="text-center m-4">Un gusto tenerte de vuelta {user.username || 'Usuario'}</h2>
            <div className="user-data">
              <div className="card m-4">
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Nombre de usuario:</strong> <span className='fw-bold'>{user.username || 'No disponible'}</span></li>
                    <li className="list-group-item"><strong>Correo electrónico:</strong> <span className='fw-bold'>{user.email || 'No disponible'}</span></li>
                    <li className="list-group-item"><strong>Dirección:</strong> <span className='fw-bold'>{user.direction || 'No disponible'}</span></li>
                    <li className="list-group-item"><strong>Cédula:</strong> <span className='fw-bold'>{user.cedula || 'No disponible'}</span></li>
                    <li className="list-group-item"><strong>Número telefónico:</strong> <span className='fw-bold'>{user.tlf || 'No disponible'}</span></li>
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
        <table className="table text-center">
          <thead>
            <tr>
              <th>Fecha</th>
              <tr>ayer</tr>
              <th>Peso (kg)</th>
              <tr>mucho peso</tr>
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
