import React from "react";
import "../index.css";

const Navbar = () => {
  return (
    <header className="row shadow">
      <div className="left-nav-items col col-sm- container-fluid">
        <nav className="navbar navbar-expand-lg p-4">
          <div className="container-fluid gap-2">
            <a className="navbar-brand" href="#">
              <img
                src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg"
                alt="logo"
                width={38}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link active dropdown-toggle fw-semibold text-primary-emphasis"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Personal
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle fw-semibold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Small Business
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle fw-semibold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Enterprise
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold" href="#" role="button">
                    Developer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="right-nav-items me- col col-sm-0 pe-5 fw-semibold">
        <ul className="d-flex gap-4 align-items-center justify-content-end">
          <li className="">
            <a>What's New</a>
          </li>
          <li className="">
            <a>Help</a>
          </li>
          <li className="">
            <button className="login-btn fw-bold bg-white">Log in</button>
          </li>
          <li className="">
            <button className="signup-btn fw-bold">Sign Up</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
