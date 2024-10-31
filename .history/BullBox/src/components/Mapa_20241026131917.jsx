import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Mapa.css'


const Mapa = () => {
    return (

        <div className='container-fluid'>
            <MapContainer center={{ lat: '7.7819182', lng: '-72.2228125' }} zoom={16}>
                <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' />
                <Marker position={{ lat: '7.7819182', lng: '-72.2228125' }}>
                    <Popup>
                        Ubicacion de BULL BOX
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Mapa