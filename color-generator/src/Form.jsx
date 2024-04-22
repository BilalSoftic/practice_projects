import { useState } from 'react';

function Form({ changeColor }) {
  const [color, setColor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    changeColor(color);
  };
  return (
    <section className='container'>
      <h4>color generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <input
          type='color'
          value={color}
          placeholder='#f15025'
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          value={color}
          placeholder='#f15025'
          onChange={(e) => setColor(e.target.value)}
        />
        <button className='btn' type='submit' style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
}
export default Form;
