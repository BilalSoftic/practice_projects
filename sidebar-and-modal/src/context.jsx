import { useContext, createContext } from 'react';
import { useState } from 'react';

const Context = createContext();
export const useAppContext = () => useContext(Context);

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Context.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        openModal,
        closeSidebar,
        closeModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};
