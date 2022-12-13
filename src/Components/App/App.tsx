import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Display from '../Display/Display';

const App = () => {
  return (
    <main>
      <Header />
      <Display />
      <Display />
      <section className='bottom'></section>
    </main>
  );
}

export default App;
