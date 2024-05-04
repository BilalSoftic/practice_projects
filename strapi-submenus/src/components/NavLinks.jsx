import { useAppContext } from '../context';
import sublinks from '../data';
function NavLinks() {
  const { setPageId } = useAppContext();
  return (
    <div className='nav-links'>
      {sublinks.map((link) => {
        const { page, pageId } = link;
        return (
          <button
            type='button'
            className='nav-link'
            key={pageId}
            onMouseEnter={() => {
              setPageId(pageId);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
export default NavLinks;
