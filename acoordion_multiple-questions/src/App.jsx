import { useState } from 'react';
import data from './data';
import Question from './Question';

const App = () => {
  const [questions, setQuestions] = useState(data);
  console.log(data);
  return (
    <main>
      <div className='container'>
        <h1>Questions</h1>
        {questions.map((item) => {
          const { id, title, info } = item;
          return <Question key={id} title={title} info={info} />;
        })}
      </div>
    </main>
  );
};
export default App;
