import { FaBars } from 'react-icons/fa';
import { useAppContext } from '../context';
import sublinks from '../data';
import NavLinks from './NavLinks';
function Navbar() {
  const { openSidebar, setPageId } = useAppContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null);
    }
  };

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <h3 className='logo'>Strapi</h3>
        <button className='toggle-btn' type='button' onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar;
