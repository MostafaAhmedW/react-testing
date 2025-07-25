import { Link } from "react-router-dom";
import "./navbar.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  nav-home fixed-top">
        <div className="container py-3">
          <Link className="navbar-brand fw-bolder fs-2 text-white" to="/home">
            START FRAMEWORK
          </Link>

          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item px-2 ">
                <NavLink
                  className="nav-link text-white"
                  aria-current="page"
                  to="/about"
                >
                  ABOUT
                </NavLink>
              </li>

              <li className="nav-item px-2">
                <NavLink className="nav-link text-white" to="/portfolio">
                  PORTFOLIO
                </NavLink>
              </li>

              <li className="nav-item px-2">
                <NavLink className="nav-link text-white" to="/contact">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
