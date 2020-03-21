import React, { useState, useEffect } from 'react';

import PieChart from './core/components/chart/chart';
import EventHandler from './event';

import './core/styles/app.scss';
import Navbar from './core/components/navbar/navbar';

function App() {

  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    EventHandler({eventName: 'byCountry', options: { country: 'india', status: 'confirmed' }})
      .then(res => {
        console.log(res);
        setCountryList(res);
      });
  }, []);

  return (
    <div className="app">
      <Navbar name="Covid-19 Worldwide Live update"/>
      <header className="app-header">
        {
          countryList.length > 0 &&
            <PieChart dataList={countryList} />
        }
      </header>
    </div>
  );
}

export default App;
