import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, isAuthenticated, errors: singInErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    signIn(values);
  });

  return (
    <div className="bg-image vh-100 d-flex align-items-center justify-content-center">
      <div className="card bg-dark text-white shadow p-4 rounded" style={{ maxWidth: "400px", width: "100%" }}>
        {singInErrors.length > 0 && (
          <div className="mb-3">
            {singInErrors.map((error, i) => (
              <div className="alert alert-danger text-center fw-bold p-2" key={i}>
                {error}
              </div>
            ))}
          </div>
        )}
        <h2 className="text-warning text-center mb-4">Inicia Sesión</h2>
        <form onSubmit={onSubmit} className="d-flex flex-column">
          <div className="input-group mb-3">
            <span className="input-group-text bg-warning text-dark">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Usuario"
              {...register("username", { required: true })}
            />
          </div>
          {errors.username && <p className="text-danger">El usuario es obligatorio</p>}
          <div className="input-group mb-3">
            <span className="input-group-text bg-warning text-dark">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              {...register("password", { required: true })}
            />
          </div>
          {errors.password && <p className="text-danger">La contraseña es obligatoria</p>}
          <button type="submit" className="btn btn-warning fw-bold mt-3">
            Continuar
          </button>
          <p className="mt-4 fw-bold text-center">
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="text-info fw-bold">
              Regístrate
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
