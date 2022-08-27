import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";


function Navabar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${props.mode}-light bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.titleabout}
              </Link>
            </li> */}
            {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li> */}
          </ul>
          {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}

          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle mx-3"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              
            >
              Color Mode
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#" onClick={props.togglemodered}>
                  {props.red}
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Yellow
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Green
                </a>
              </li>
            </ul>
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === `light` ? `dark` : `light`
            }`}
          >
            <input
              className="form-check-input "
              onClick={props.togglemode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlfor="flexSwitchCheckDefault"
            >
              dark mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navabar;

//To check the data type of props element in app.js is same or moty
Navabar.propTypes = {
  title: PropTypes.string.isRequired,

  titleabout: PropTypes.string.isRequired,
};
Navabar.defaultProps = {
  title: "set title here",
  titleabout: "Text Area here",
};
