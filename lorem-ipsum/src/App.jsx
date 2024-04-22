import { useState } from 'react';
import { nanoid } from 'nanoid';
import text from './data';

const App = () => {
  const [count, setCount] = useState(0);
  const [lorem, setLorem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLorem(text.slice(0, parseInt(count)));
  };
  return (
    <main>
      <section className='section-center'>
        <h4>tired of boring lorem ipsum?</h4>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='amount'>paragraphs</label>
          <input
            type='number'
            name='amount'
            id='amount'
            min='1'
            max='8'
            step='1'
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type='submit' className='btn'>
            generate
          </button>
        </form>
        {lorem && (
          <article className='lorem-text'>
            {lorem.map((paragraph) => {
              return <p key={nanoid()}>{paragraph}</p>;
            })}
          </article>
        )}
      </section>
    </main>
  );
};
export default App;
