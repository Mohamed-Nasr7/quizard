import React from 'react';
import { useSelector } from 'react-redux';
import QuizCard from '../components/QuizCard';

function Home() {
  const quizzes = useSelector(state => state);

  return (
    <div className='home'>
      <h3 className='home__title'>All quizzes</h3>
      <section className='home__quizzes'>
        {quizzes.map(quiz => (
          <QuizCard />
        ))}
      </section>
    </div>
  );
}

export default Home;
