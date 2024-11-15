import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faDumbbell,
  faPersonRunning,
  faWeightHanging,
} from "@fortawesome/free-solid-svg-icons";
import nosotros from "/img/nosotros.png";
import servicios from "/img/servicios.png";
import Mapa from "../components/Mapa";

function Inicio() {
  return (
    <>

      {/* Inicio */}

      <section className="bg-image text-center text-white fw-bold">
        <div>
          <h2 className="fw-bold display-4">
            HAZ QUE <span className="text-warning fw-bold">OCURRA</span>
          </h2>
          <h5>¡Triunfar es más fácil de lo que piensas!</h5>
          <hr className="text-warning" />
          <h2 className="fw-bold display-4">
            ENTRENA <span className="text-warning fw-bold">HOY!</span>
          </h2>
          <h5>¡Primera Clase Gratis!</h5>
        </div>
      </section>

      {/* Nosotros */}

      <section className="container fw-bold p-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <img className="img-fluid" src={nosotros} alt="Imagen de nosotros" />
          </div>
          <div className="col-md-8 my-4 text-center">
            <span className="fw-bold">LA MEJOR EXPERIENCIA</span>
            <h1 className="text-warning fw-bold display-4">NOSOTROS</h1>
            <p className="pt-3 fw-bold">
              Creemos en el poder del movimiento y en el potencial ilimitado de cada persona. Nuestro equipo de expertos te guiará en cada paso del camino, diseñando planes de entrenamiento personalizados para ayudarte a alcanzar tus metas.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-center pt-3 pb-3 text-warning fw-bold">Nuestra ubicación</h1>
          <Mapa/>
        </div>
        <div>
          <h3 className="text-center pt-4 fw-bold">
            <FontAwesomeIcon className="text-warning me-2" icon={faLocationPin} />
            Av. Ferrero Tamayo, detrás del Hotel el Rey, frente al Club de Escalada
          </h3>
        </div>
      </section>

      {/* Servicios */}

      <section className="bg-image-servicios fw-bold p-5 text-center text-white">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 my-4 text-center">
            <span className="fw-bold">LA MEJOR EXPERIENCIA</span>
            <h2 className="text-warning fw-bold display-4">SERVICIOS</h2>
            <p className="pt-3 fw-bold container">
              ¿Sueñas con un cuerpo más fuerte y saludable? Te ofrecemos todo lo que necesitas para alcanzar tus metas. Desde entrenamientos personalizados hasta clases grupales dinámicas, te guiaremos paso a paso en tu transformación física y mental.
            </p>
          </div>
          <div className="col-md-4">
            <img className="img-fluid" src={servicios} alt="Imagen de servicios" />
          </div>
        </div>
      </section>

      <div className="container pt-4">
        <div className="row">

          {/* Tarjeta 1 */}

          <div className="col-md-4 mb-4 d-flex">
            <div className="card text-center bg-dark text-white h-100 d-flex flex-column">
              <div className="card-header mt-2 border-warning">
                <h4 className="text-center">
                  <FontAwesomeIcon icon={faDumbbell} className="mx-2 text-warning" />
                  <span className="fw-bold">Levantamiento de Pesas</span>
                </h4>
              </div>
              <div className="card-body flex-grow-1">
                <p className="card-text text-center fw-bold">
                  El levantamiento de pesas es un ejercicio ideal para tonificar los músculos y esculpir tu cuerpo. ¡Anímate a intentarlo y ve los resultados!
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 */}

          <div className="col-md-4 mb-4 d-flex">
            <div className="card text-center fw-bold bg-dark text-white h-100 d-flex flex-column">
              <div className="card-header mt-2 border-warning">
                <h4 className="card-title text-center">
                  <FontAwesomeIcon icon={faWeightHanging} className="mx-2 text-warning" />
                  <span className="fw-bold">Crosstraining</span>
                </h4>
              </div>
              <div className="card-body flex-grow-1">
                <p className="card-text text-center fw-bold">
                  Combina ejercicios funcionales, variados y ejecutados a alta intensidad para mejorar tu fuerza, resistencia y condición general. Descubre tu máximo potencial con nuestras clases.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 3 */}

          <div className="col-md-4 mb-4 d-flex">
            <div className="card text-center fw-bold bg-dark text-white h-100 d-flex flex-column">
              <div className="card-header mt-2 border-warning">
                <h4 className="card-title text-center">
                  <FontAwesomeIcon icon={faPersonRunning} className="mx-2 text-warning" />
                  <span className="fw-bold">Entrenamientos GAP</span>
                </h4>
              </div>
              <div className="card-body flex-grow-1">
                <p className="card-text text-center fw-bold">
                  Este entrenamiento se enfoca en fortalecer glúteos, abdomen y piernas para obtener una figura más tonificada y definida. Ideal para resultados rápidos y efectivos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Planes */}

      <section className="bg-image-planes fw-bold p-5 text-center text-white">
        <div>
          <span className="fw-bold">LA MEJOR EXPERIENCIA</span>
          <h2 className="text-warning fw-bold display-4">Planes</h2>
        </div>
        <p className="pt-3 fw-bold container">
          Elige el plan que se adapte a tu estilo de vida y alcanza tus objetivos de forma rápida y segura. Ofrecemos planes personalizados con entrenamiento funcional, cardiovascular y asesoramiento nutricional para optimizar tus resultados. ¡Únete a nuestra comunidad fitness y descubre tu máximo potencial!
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-5 pt-5">

          {/* Tarjetas de Planes */}

          <div className="col">
            <div className="bg-dark card h-100">
              <div className="card-body d-flex flex-column justify-content-center">
                <h1 className="card-title text-center text-warning fw-bold border-bottom border-3 border-warning pb-3">
                  2 BULL
                </h1>
                <p className="card-text text-center text-white fs-1 fw-bold mt-4 mb-4">
                  2 Clases por semana
                </p>
                <h1 className="text-center display-3 text-warning fw-bold">12$</h1>
                <p className="text-center text-white fs-1 fw-bold mt-2">MENSUAL</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="bg-dark card h-100">
              <div className="card-body d-flex flex-column justify-content-center">
                <h1 className="card-title text-center text-warning fw-bold border-bottom border-3 border-warning pb-3">
                  3 BULL
                </h1>
                <p className="card-text text-center text-white fs-1 fw-bold mt-4 mb-4">
                  3 Clases por semana
                </p>
                <h1 className="text-center display-3 text-warning fw-bold">15$</h1>
                <p className="text-center text-white fs-1 fw-bold mt-2">MENSUAL</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="bg-dark card h-100">
              <div className="card-body d-flex flex-column justify-content-center">
                <h1 className="card-title text-center text-warning fw-bold border-bottom border-3 border-warning pb-3">
                  FULL BULL
                </h1>
                <p className="card-text text-center text-white fs-1 fw-bold mt-4 mb-4">
                  5 Clases por semana
                </p>
                <h1 className="text-center display-3 text-warning fw-bold">20$</h1>
                <p className="text-center text-white fs-1 fw-bold mt-2">MENSUAL</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;
