import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer d-flex flex-column align-items-center text-center bg-dark border-top border-warning container-fluid pt-3">
      <h5 className="text-white fw-bold">
        2024 - BULL <span className="text-warning fw-bold">BOX</span> Todos los
        Derechos Reservados
      </h5>
      <div className="d-flex justify-content-center">
        <div className="nav-item">
          <a
            className="nav-link text-white fs-1"
            href="https://wa.me/+5804247558820"  // Cambia este enlace por tu número de WhatsApp
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        <div className="nav-item">
          <a
            className="nav-link text-white fs-1 ms-5"
            href="https://www.instagram.com/bullbox.sc?igsh=MXd5dmpyOXJzc2R3aQ=="  // Cambia este enlace por tu perfil de Instagram
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
