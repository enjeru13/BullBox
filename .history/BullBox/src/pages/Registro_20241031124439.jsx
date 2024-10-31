import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  return (
    <div className="bg-dark">
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div className="w-100">
          <div className="col">
            {registerErrors.map((error, i) => (
              <div className="bg-danger text-center p-2 text-white m-2" key={i}>
                {error}
              </div>
            ))}
            <form
              onSubmit={onSubmit}
              className=" d-flex flex-column align-items-center justify-content-center"
            >
              <div className="text-warning text-center m-2">
                <h2 className="">Registro</h2>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre de usuraio"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <p className="text-danger">El usuario es obligatorio</p>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Direccion"
                  {...register("direction", { required: true })}
                />
                {errors.direction && (
                  <p className="text-danger">La direccion es obligatoria</p>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-danger">El correo el obligatorio</p>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Telefono"
                  {...register("tlf", { required: true })}
                />
                {errors.tlf && (
                  <p className="text-danger">El numero de obligatorio</p>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-danger">La contraseña es obligatoria</p>
                )}
              </div>
              <button type="submit" className="m-1 btn btn-warning fw-bold">
                Registrarse
              </button>
              <p className="flex justify-between text-white m-3 ">
                Ya tiene una cuenta?{" "}
                <Link to="/login" className="text-info">
                  {" "}
                  Inicia Sesion!{" "}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
