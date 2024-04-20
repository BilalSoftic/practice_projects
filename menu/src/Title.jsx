import React from 'react';
export function Title({ title }) {
  return (
    <div className='title'>
      <h2>{title}</h2>
      <div className='title-underline'></div>
    </div>
  );
}
