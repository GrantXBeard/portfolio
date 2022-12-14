import React, {useEffect, useState} from 'react';
import './App.css';
import Header from '../Header/Header';
import Display from '../Display/Display';
import { IWorkData } from '../../Types/PortfolioTypes';

const App = () => {

  const [work, setWork] = useState([])

  const getApiData = () => {
    fetch('https://grantxbeardapi.herokuapp.com/api/v1/work')
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        console.log('Error')
      }
    })
    .then(data => {
      setWork(data.work)
    })
  }

  const setType = (type: string) => {
    return work.filter((each: IWorkData) => each.type === type)
  }

  useEffect(() => {
    getApiData()
    }, [])

  return (
    <main>
      <Header />
      <Display title='Collage' work={setType('collage')}/>
      <Display title='Photography' work={setType('photography')}/>
      <Display title='Sculpture' work={setType('sculpture')}/>
      <Display title='Mixed Media' work={setType('mixed media')}/>
      <Display title='Painting' work={setType('painting')}/>
      <Display title='Drawing' work={setType('drawing')}/>
      <section className='bottom'></section>
    </main>
  );
}

export default App;
