import Form from './Form';
import List from './List';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';

/* const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    list = JSON.parse(localStorage.getItem('list'));
  } else {
    list = [];
  }
  return list;
}; */
const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (item) => {
    const newItem = { id: nanoid(), item, completed: false };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    console.log(items);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item removed successfully');
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <main>
      <ToastContainer position='top-center' />
      <section className='section-center'>
        <Form addItem={addItem} />
        {items && (
          <List items={items} removeItem={removeItem} editItem={editItem} />
        )}
      </section>
    </main>
  );
};

export default App;
