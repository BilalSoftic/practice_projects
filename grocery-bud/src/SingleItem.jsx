import { useState } from 'react';

function SingleItem({ id, item, completed, removeItem, editItem }) {
  const handleRemove = (id) => {
    removeItem(id);
  };
  return (
    <article className='single-item'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {item}
      </p>
      <button
        type='button'
        className='btn remove-btn'
        onClick={() => handleRemove(id)}
      >
        delete
      </button>
    </article>
  );
}
export default SingleItem;
