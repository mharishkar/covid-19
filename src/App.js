import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs'

import PieChart from './core/components/chart/chart';
import EventHandler from './event';

import './core/styles/app.scss';
import Navbar from './core/components/navbar/navbar';
import CountriesListAside from './core/components/countriesList/countriesList';
import Cards from './core/components/summary/summary'

function App() {

  const [countryList, setCountryList] = useState([]);
  const [lastUpdatedDate, setLastUpdatedDate] = useState(null);

  useEffect(() => {
    EventHandler({eventName: 'byCountry', options: { country: 'india', status: 'confirmed' }})
      .then(coronaResultByCountry => {

        setLastUpdatedDate((prevState) => {
          let lastUpdatedDateRef = coronaResultByCountry[coronaResultByCountry.length - 1].Date;
          prevState = dayjs(lastUpdatedDateRef).format('DD/MM/YYYY');
          return prevState;
        });

        setCountryList(() => {
          let formattedResponse = coronaResultByCountry.map(day => {
            return [dayjs(day.Date).format('DD/MM/YYYY'), day.Cases];
          });
          return formattedResponse;
        });
      });
  }, []);

  return (
    <div className="app">
      <Navbar name="Covid-19 Worldwide Live update"/>
      <CountriesListAside />
      <Cards />
      <header className="app-header">
        {
          countryList.length > 0 &&
            <div className="card u-flex__column u-height__half u-o-scrollX">
              <div className="u-inline-flex u-justify-content-space-between">
                <span className="u-text-left black-disabled">
                  Total Cases: <span className="black">{countryList[countryList.length - 1][1]}</span>
                </span>
                <span className="u-text-right black-disabled">
                  Last Update: <span className="black">{lastUpdatedDate}</span>
                </span>
              </div>
              <PieChart dataList={countryList} />
            </div>
        }
      </header>
    </div>
  );
}

export default App;
