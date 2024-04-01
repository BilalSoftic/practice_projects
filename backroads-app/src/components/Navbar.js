import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../Data';
import Pagelink from './Pagelink';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return <Pagelink key={link.id} {...link} className="nav-link" />;
          })}
        </ul>
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, className } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={className}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
