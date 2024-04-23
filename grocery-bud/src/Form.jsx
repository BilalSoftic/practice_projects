import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Form({ addItem }) {
  const [item, setItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      toast.error('Please input an item');
    } else {
      addItem(item);
      setItem('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <section className='form-control'>
        <input
          type='text'
          className='form-input'
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </section>
    </form>
  );
}

export default Form;
