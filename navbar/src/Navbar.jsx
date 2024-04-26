import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from './logo.svg';
import { links, social } from './data';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const refLinksContainer = useRef(null);
  const refLinks = useRef(null);

  const toggleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const LinksContainerStyle = {
    height: showLinks
      ? `${refLinks.current.getBoundingClientRect().height}px`
      : `0px`,
  };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button
            type='button'
            className='nav-toggle'
            onClick={toggleShowLinks}
          >
            <FaBars />
          </button>
        </div>
        <div
          className='links-container'
          ref={refLinksContainer}
          style={LinksContainerStyle}
        >
          <ul className='links' ref={refLinks}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
