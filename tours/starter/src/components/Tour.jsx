import { useState } from 'react';

function Tour({ tour, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  console.log(removeTour);
  const { id, image, name, info, price } = tour;
  return (
    <article className='single-tour'>
      <img src={image} alt={name + '.jpg'} className='img' />
      <span className='tour-price'>{price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0, 150)}...`}</p>
        <button
          type='button'
          className='info-btn btn'
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? 'show less' : 'read more'}
        </button>
      </div>
      <button
        type='btn'
        className='delete-btn btn'
        onClick={() => {
          removeTour(id);
        }}
      >
        not interested
      </button>
    </article>
  );
}
export default Tour;
