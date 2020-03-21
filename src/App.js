import React, { useState, useEffect } from 'react';

import PieChart from './core/components/chart/chart';
import EventHandler from './event';

import './core/styles/app.scss';

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
      <header className="app-header">
        <h4 className="heading-4">Covid-19 Real time data</h4>
        {
          countryList.length > 0 &&
            <PieChart dataList={countryList} />
        }
      </header>
    </div>
  );
}

export default App;
