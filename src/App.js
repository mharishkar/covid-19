import React, { Component } from 'react';
import './core/styles/app.scss';
import Navbar from './core/components/navbar/navbar';
import PieChart from './core/components/chart/chart';

function App() {
  return (
    <div className="app">
      <Navbar name="Covid-19 Worldwide Live update"/>
      <header className="app-header">
        <h4 className="heading-4">Covid-19 Real time data</h4>
        <PieChart />
      </header>
    </div>
  );
}

export default App;
