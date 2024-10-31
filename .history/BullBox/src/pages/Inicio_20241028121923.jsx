import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faDumbbell, faPersonRunning, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import nosotros from '/img/nosotros.png'
import servicios from '/img/servicios.png'
import QRvzla from '/img/QRvzla.jpg'
import Mapa from '../components/Mapa'

function Inicio() {
    return (
        <>
            {/* Inicio */}

            <section className="bg-image text-center text-white fw-bold">
                <div className=''>
                    <h2 className='fw-bold display-4'>HAZ QUE <span className='text-warning'>OCURRA</span></h2>
                    <h5 className=''>Triunfar es mas facil de lo que piensas !</h5>
                    <hr className='text-warning' />
                    <h2 className='fw-bold display-4'>ENTRENA <span className='text-warning'>GRATIS HOY ! </span> </h2>
                    <h5 className=''>Primera Clase Gratis !</h5>
                </div>
            </section>

            {/* Nosotros */}

            <section className='container fw-bold p-5'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-4'>
                        <img className='img-fluid' src={nosotros} />
                    </div>
                    <div className='col-md-8 my-4 text-center'>
                        <div className='text-warning fw-bold display-1'>
                            01
                        </div>
                        <span className=''>LA MEJOR EXPERIENCIA</span>
                        <h1 className='text-warning fw-bold display-4'>NOSOTROS</h1>
                        <p className='justified-text pt-3'> Creemos en el poder del movimiento y en el potencial ilimitado de cada persona. Nuestro equipo de expertos te guiará en cada paso del camino, diseñando planes de entrenamiento personalizados para ayudarte a alcanzar tus metas. </p>
                    </div>
                </div>
                <div >
                    <h1 className='text-center pt-3 pb-3 text-warning fw-bold'>Nuestra ubicacion</h1>
                    <Mapa />
                </div>
                <div>
                    <h3 className='text-center pt-4 fw-bold'> <FontAwesomeIcon className='text-warning me-2' icon={faLocationPin} />Barrio Obrero Calle 15 entre Carreras 21 y 22</h3>
                </div>
            </section>

            {/* Servicios */}

            <section className='bg-image-servicios fw-bold p-5 text-center text-white'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-8 my-4 text-center'>
                        <div className='text-warning fw-bold display-1'>
                            02
                        </div>
                        <span>LA MEJOR EXPERIENCIA</span>
                        <h2 className='text-warning fw-bold display-4'>SERVICIOS</h2>
                        <p className='justified-text pt-3'> ¿Sueñas con un cuerpo más fuerte y saludable?, te ofrecemos todo lo que necesitas para alcanzar tus metas. Desde entrenamientos personalizados hasta clases grupales dinámicas, te guiaremos paso a paso en tu transformación física y mental. </p>
                    </div>
                    <div className='col-md-4'>
                        <img className='img-fluid' src={servicios} />
                    </div>
                </div>
            </section>

            <div className="card text-center m-4 fw-bold bg-dark text-white">
                <div className="card-header border-warning">
                    <h2 className="text-center fw-bold"><i className='me-3'><FontAwesomeIcon icon={faDumbbell} /></i>Clases de <span className='text-warning'>Levantamiento de Pesas</span></h2>
                </div>
                <div className="card-body">
                    <p className="card-text text-center">El levantamiento de pesas es el ejercicio perfecto para tonificar tus músculos y esculpir tu cuerpo. ¡Anímate a probarlo!</p>
                </div>
            </div>

            <div className="card text-center m-4 fw-bold bg-dark text-white">
                <div className="card-header border-warning">
                    <h2 className=" fw-bold card-title text-center"><i className='me-3'><FontAwesomeIcon icon={faWeightHanging} /></i>Clases de <span className='text-warning'>Crosstraining</span></h2>
                </div>
                <div className="card-body">
                    <p className="card-text text-center">Combina ejercicios funcionales, constantemente variados y ejecutados a alta intensidad, para mejorar tu fuerza, resistencia y condición física general. ¡Descubre tu potencial!</p>
                </div>
            </div>

            <div className="card text-center m-4 fw-bold bg-dark text-white">
                <div className="card-header border-warning">
                    <h2 className=" fw-bold card-title text-center"><i className='me-3'><FontAwesomeIcon icon={faPersonRunning} /></i>Entrenamientos <span className='text-warning'>GAP</span></h2>
                </div>
                <div className="card-body">
                    <p className="card-text text-center ">Este entrenamiento se enfoca en fortalecer glúteos, abdomen y piernas, logrando una figura más tonificada y definida. ¡Ideal para quienes buscan resultados rápidos y efectivos!</p>
                </div>
            </div>

            {/* Planes */}

            <section className='bg-image-planes fw-bold p-5 text-center text-white'>
                <div className=''>
                    <div className='text-warning fw-bold display-1'>
                        03
                    </div>
                    <span>LA MEJOR EXPERIENCIA</span>
                    <h2 className='text-warning fw-bold display-4'>Planes</h2>
                </div>
                <p className='justified-text pt-3'>Elige el plan que se adapte a tu estilo de vida y alcanza tus objetivos de forma rápida y segura. Ofrecemos planes personalizados con entrenamiento funcional, cardiovascular y asesoramiento nutricional para optimizar tus resultados. ¡Únete a nuestra comunidad fitness y descubre tu máximo potencial ! </p>
                <div className="row row-cols-1 row-cols-md-3 g-5 pt-5">
                    <div className="col">
                        <div className="bg-card card h-100">
                            <div className="card-body">
                                <h5 className="card-title text-center text-warning display-3 fw-bold m-3 border-bottom border-3 border-warning">2 BULL</h5>
                                <p className="card-text text-center text-white fs-1 fw-bold">2 CLASES POR SEMANA</p>
                                <br />
                                <p className='text-center fs-1 text-warning fw-bold'>12$</p>
                                <p className='text-center text-white fs-1 fw-bold'>MENSUAL</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="bg-card card h-100">
                            <div className="card-body">
                                <h5 className="card-title text-center text-warning display-3 fw-bold border-bottom border-3 border-warning">FULL BOX</h5>
                                <br />
                                <p className="card-text text-center text-white fs-1 fw-bold ">5 CLASES POR SEMANA</p>
                                <br />
                                <p className='text-center fs-1 text-warning fw-bold'>20$</p>
                                <p className='text-center text-white fs-1 fw-bold'>MENSUAL</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="bg-card card h-100">
                            <div className="card-body">
                                <h5 className="card-title text-center text-warning display-3 fw-bold m-3 border-bottom border-3 border-warning">3 BULL</h5>
                                <p className="card-text text-center text-white fs-1 fw-bold">3 CLASES POR SEMANA</p>
                                <br />
                                <p className='text-center fs-1 text-warning fw-bold'>15$</p>
                                <p className='text-center text-white fs-1 fw-bold'>MENSUAL</p>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid h-100 d-flex flex-column justify-content-center align-items-center pt-5'>
                        <button type="button" className="btn btn-warning fw-bold fs-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Metodos de Pago
                        </button>
                    </div>
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content bg-dark">
                                <div className="modal-header">
                                    <h1 className="modal-title text-warning fs-4" id="staticBackdropLabel">Métodos de Pago</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-dialog modal-dialog-scrollable text-warning fs-5">
                                    Utiliza el método de pago que mejor se adapte a ti!
                                </div>
                                <p className='text-warning text-center fs-5'>QR Banco de Venezuela</p>
                                <img src={QRvzla} alt="QR banco de Venezuela" />
                                <p className='text-warning text-center fs-5 pt-3'>QR Banco de Venezuela</p>
                                <img src={QRvzla} alt="" />
                                <p className='text-warning text-center fs-5'>QR Banco de Venezuela</p>
                                <img src={QRvzla} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Footer /> */}
        </>

    )
}

export default Inicio