import React from 'react';

import PieChart from './core/components/chart/chart';

import './core/styles/app.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h4 className="heading-4">Covid-19 Real time data</h4>
        <PieChart />
      </header>
    </div>
  );
}

export default App;
