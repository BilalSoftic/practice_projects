import Tour from './Tour';
function Tours({ tours, removeTour }) {
  return (
    <section>
      <div className='title'>
        <h1>our tours</h1>
        <div className='title-underline'></div>
      </div>

      <div className='tours'>
        {tours.map((item) => {
          console.log(item);
          return <Tour key={item.id} tour={item} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
}
export default Tours;
