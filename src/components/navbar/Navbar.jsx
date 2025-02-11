
import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/btnDarkMode";
import logo from "./../../img/logo/Logo.png";



function Navbar() {
  const activeLink = "nav-list__link nav-list__item--active";
  const normalLink = "nav-list__link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <img src={logo} alt="" />
          </NavLink>

      <BtnDarkMode/> 

          <div className="nav-list">
            <div className="nav-list__item ">
              <NavLink
                to="/"
                className={({isActive}) => {
                  return isActive ? activeLink : normalLink;
                }}
              >
                Home
              </NavLink>
            </div>

            <div className="nav-list__item">
              <NavLink
                to="/projects"
                className={({isActive}) => {
                  return isActive ? activeLink : normalLink;
                }}
              >
                Projects
              </NavLink>
            </div>

            <div className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({isActive}) => {
                  return isActive ? activeLink : normalLink;
                }}
              >
                Contacts
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
