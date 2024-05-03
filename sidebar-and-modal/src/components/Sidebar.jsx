import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context';
import { links, social } from '../data';
import logo from '../logo.svg';
function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useAppContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' />
        <button type='button' className='btn close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      {/* links */}
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      {/* socials */}
      <ul className='social-links'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
export default Sidebar;
