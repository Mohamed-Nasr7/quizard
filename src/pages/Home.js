import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
  return (
    <div className='home'>
      <h3 className='home__title'>All quizzes</h3>
      <section className='home__quizzes'></section>
    </div>
  );
}

export default Home;
