import React from 'react';
import './summary.scss';

class Summary extends React.Component {
    render() {
        return (
            <section className="cards">
              <div className="cards-death">
                <div>Total Deaths</div>
                <div className="count">488</div>
              </div>
              <div className="cards-recover">
                <div>Total Recovered</div>
                <div>488</div>
              </div>
              <div className="cards-confirm">
                <div>Confirmed Cases</div>
                <div>488</div>
              </div>
              <div className="cards-active">
                <div>Active Cases</div>
                <div>488</div>
              </div></section>
          );
    }
}
export default Summary;