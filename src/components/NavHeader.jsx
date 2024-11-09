import { NavLink } from 'react-router-dom';
function NavHeader() {
  return (
    <>
      <div className="w-full flex justify-center z-50">
        <div className="w-5/6 flex">
          <div className="w-1/2">
            <div className="webLogo">
              <img
                src="./src/assets/img/web-logo.png"
                alt=""
                className="logoimage"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="w-1/2 nav-container">
            <ul className="navItems flex justify-between p-4">
              <li className="navItem">
                <NavLink to="/" className="navLink">
                  Home
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/skills" className="navLink">
                  Skills
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/experience" className="navLink">
                  Experience
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/resume" className="navLink">
                  Resume
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/contact" className="navLink">
                  Contact
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/about" className="navLink">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavHeader;
