import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Display from '../Display/Display';

const App = () => {
  return (
    <main>
      <Header />
      <Display title='Collage'/>
      <Display title='Photography'/>
      <Display title='Sculpture'/>
      <Display title='Mixed Media'/>
      <Display title='Painting'/>
      <section className='bottom'></section>
    </main>
  );
}

export default App;
