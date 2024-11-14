import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faMapMarkerAlt, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  // Estado para controlar la visibilidad de la contraseña
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  return (
    <div className="bg-image-login vh-100 d-flex align-items-center justify-content-center">
      <div className="card bg-dark text-white shadow p-4 rounded" style={{ maxWidth: "400px", width: "100%" }}>
        {registerErrors.length > 0 && (
          <div className="mb-3">
            {registerErrors.map((error, i) => (
              <div className="alert alert-danger text-center p-2" key={i}>
                {error}
              </div>
            ))}
          </div>
        )}
        <h2 className="text-warning text-center mb-4">Registro</h2>
        <form onSubmit={onSubmit} className="d-flex flex-column">
          {/* Campos de formulario como antes */}
          <div className="input-group mb-3">
            <span className="input-group-text bg-warning text-dark">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre de usuario"
              {...register("username", { required: true })}
            />
          </div>
          {errors.username && <p className="text-danger fw-bold">El usuario es obligatorio</p>}

          <div className="input-group mb-3">
            <span className="input-group-text bg-warning text-dark">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Dirección"
              {...register("direction", { required: true })}
            />
          </div>
          {errors.direction && <p className="text-danger fw-bold">La dirección es obligatoria</p>}

          <div className="input-group mb-3">
            <span className="input-group-text bg-warning text-dark">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && <p className="text-danger fw-bold">El correo es obligatorio</p>}

          <div className="input-group mb-3">
            <span className="input-group-text bg-warning text-dark">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="Teléfono"
              {...register("tlf", { required: true })}
            />
          </div>
          {errors.tlf && <p className="text-danger fw-bold">El número es obligatorio</p>}

          {/* Campo de contraseña con ojo */}
          <div className="input-group mb-3">
            <span className="input-group-text bg-warning text-dark">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Contraseña"
              {...register("password", { required: true })}
            />
            <span
              className="input-group-text bg-white"
              onClick={() => setShowPassword(!showPassword)}  // Alterna la visibilidad
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          {errors.password && <p className="text-danger fw-bold">La contraseña es obligatoria</p>}

          <button type="submit" className="btn btn-warning fw-bold mt-3">
            Continuar
          </button>
          <p className="mt-4 text-center fw-bold">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="text-info fw-bold">
              Inicia Sesión
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registro;
