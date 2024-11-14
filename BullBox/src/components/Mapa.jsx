import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

// Tu clave de API de Google Maps
const apiKey = 'AIzaSyDpXw7shM15OVRyKoaSPxZFe4QmrwkC6Rw';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 7.7819341,
  lng: -72.2226881,
};

const Mapa = () => {
  const [selected, setSelected] = useState(null);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        {/* Marcador principal */}
        <Marker
          position={center} 
          onClick={() => setSelected(center)}
        />

        {/* Ventana de información que se muestra al hacer clic en el marcador */}
        {selected && (
          <InfoWindow 
            position={center}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h3 className='fw-bold text-center'>Bull Box</h3>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Mapa;
