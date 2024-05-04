import { FaTimes } from 'react-icons/fa';
import sublinks from '../data';
import { useAppContext } from '../context';
function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useAppContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-container'>
        <button className='close-btn' type='button' onClick={closeSidebar}>
          <FaTimes />
        </button>
        {sublinks.map((link) => {
          const { links, pageId, page } = link;
          return (
            <article key={pageId}>
              <h4>{page}</h4>
              <ul className='sidebar-sublinks'>
                {links.map((link) => {
                  const { id, label, icon, url } = link;
                  return (
                    <li key={id}>
                      <a href={url}>
                        {icon}
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </aside>
  );
}
export default Sidebar;
