import { FaBars } from 'react-icons/fa';
import { useAppContext } from '../context';

function Home() {
  const { openSidebar, openModal } = useAppContext();
  return (
    <main>
      <button type='button' className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button type='button' className='btn' onClick={openModal}>
        Open Modal
      </button>
    </main>
  );
}
export default Home;
