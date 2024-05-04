import { useRef } from 'react';
import { useAppContext } from '../context';
import sublinks from '../data';
function Submenu() {
  const { pageId, setPageId } = useAppContext();
  const currentPage = sublinks.find((item) => {
    return item.pageId === pageId;
  });
  const submenuContainer = useRef(null);
  const handleMouseLeave = (e) => {
    const submenu = submenuContainer.current;
    const { clientX, clientY } = e;
    const { top, bottom, left, right } = submenu.getBoundingClientRect();
    if (clientY > bottom - 1 || clientX < left - 1 || clientX > right - 1) {
      setPageId(null);
    }
  };
  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 2 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, label, icon, url } = link;
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
export default Submenu;
