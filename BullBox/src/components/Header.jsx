import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { isAuthenticated, logOut, user } = useAuth();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-warning p-4 sticky-top">
        <div className="container-fluid px-4">
          <a className="navbar-brand text-white fs-1 fw-bold" href="#">
            BULL <span className="text-warning fw-bold">BOX</span>
          </a>
          <button
            className="navbar-toggler border-2 border-warning custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto justify-content-center align-items-center">
              <li className="nav-item">
                <Link
                  className="nav-link text-white fs-5 active fw-bold"
                  aria-current="page"
                  to="/"
                >
                  Inicio
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link text-white fs-5 mx-3 fw-bold"
                  to="/tienda"
                >
                  Tienda
                </Link>
              </li> */}
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white fs-5 mx-3 fw-bold"
                      to="/profile"
                    >
                      Tu perfil {user.username}
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      className="nav-link text-white fs-5 mx-3 fw-bold"
                      to="/"
                      onClick={() => {
                        logOut();
                      }}
                    >
                      Cerrar Sesión
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <button type="button" className="btn btn-warning fw-bold fs-5">
                    <Link
                      className="nav-link text-dark"
                      to="/login"
                    >
                      Inicia Sesión
                    </Link>
                  </button>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
