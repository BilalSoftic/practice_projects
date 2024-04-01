function Person({ id, image, name, age }) {
  return (
    <article className='person'>
      <img src={image} alt='person-img' className='img' />
      <div>
        <h4>{name}</h4>
        <p>{age} Years</p>
      </div>
    </article>
  );
}
export default Person;
