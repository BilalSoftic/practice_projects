function Buttons({ jobs, setCurrentItem, currentItem }) {
  return (
    <div className='btn-container'>
      {jobs.map((item, index) => {
        return (
          <button
            type='button'
            className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
            key={item.id}
            onClick={() => setCurrentItem(index)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}
export default Buttons;
