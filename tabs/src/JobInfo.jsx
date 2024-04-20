import Duties from './Duties';

function JobInfo({ jobs, currentItem }) {
  const { company, dates, duties, title, id } = jobs[currentItem];
  return (
    <article className='job-info' key={id}>
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>
      <Duties duties={duties} />
    </article>
  );
}
export default JobInfo;
