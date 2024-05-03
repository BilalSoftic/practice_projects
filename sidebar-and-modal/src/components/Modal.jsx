import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context';

function Modal() {
  const { isModalOpen, closeModal } = useAppContext();

  return (
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className='modal-container'>
        <h2>This is a Modal</h2>
        <button
          type='button'
          className='btn close-modal-btn'
          onClick={closeModal}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
export default Modal;
