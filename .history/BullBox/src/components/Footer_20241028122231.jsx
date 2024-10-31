import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className='d-flex flex-column align-items-center text-center bg-dark border-top border-warning container-fluid p-1'>
            <h5 className='text-white fw-bold'>2024 - BULL <span className='text-warning fw-bold'>BOX</span> Todos los Derechos Reservados</h5>
            <div className="d-flex justify-content-center">
                <div className="nav-item">
                    <a className="nav-link text-white fs-2" href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
                </div>
                <div className="nav-item">
                    <a className="nav-link text-white fs-2 ms-5" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                </div>
                <div className="nav-item">
                    <a className="nav-link text-white fs-2 ms-5" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
