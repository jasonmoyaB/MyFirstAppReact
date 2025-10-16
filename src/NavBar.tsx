import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const NavBar = () => {
  // helper: cierra el offcanvas si está abierto
  const closeOffcanvas = () => {
    const toggler = document.querySelector(
      ".navbar-toggler"
    ) as HTMLButtonElement | null;
    const panel = document.getElementById("offcanvasNavbar");
    if (toggler && panel && panel.classList.contains("show")) toggler.click();
  };

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? "active fw-semibold" : ""}`;

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" onClick={closeOffcanvas}>
          My First App
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink
                  to="/mis-datos"
                  className={linkCls}
                  onClick={closeOffcanvas}
                >
                  Mis datos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/validar-edad"
                  className={linkCls}
                  onClick={closeOffcanvas}
                >
                  Validar edad
                </NavLink>
              </li>

              {/* Ejemplo dropdown con rutas */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Más
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to="/"
                      className="dropdown-item"
                      onClick={closeOffcanvas}
                    >
                      Inicio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/mis-datos"
                      className="dropdown-item"
                      onClick={closeOffcanvas}
                    >
                      Formulario
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
