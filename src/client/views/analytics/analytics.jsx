import React from 'react';
import Footer from '../../components/footer/footer.jsx';
import Navbar from '../../components/navbar/navbar.jsx';
import Graph from '../../components/graph/graph.jsx';
import './analytics.scss';

class Analytics extends React.Component {
  render() {
    return (
      <div>
        <Navbar active="analytics"/>
        <div className="container">
          <h3>Runs in matches</h3>
          <Graph type="runs-range" id="runs_range" />
          <h3>Runs in matches (detailed)</h3>
          <Graph type="runs" id="runs" />
          <h3>Score on different Grounds</h3>
          <Graph type="grounds" id="grounds" />
          <h3>Runs Scored on batting order</h3>
          <Graph type="innings" id="innings" />
          <h3>Runs Opposition</h3>
          <Graph type="opposition" id="opposition" />
          <h3>Contribution of runs on outcome of match</h3>
          <Graph type="result" id="result" />
          <h3>Runs per year</h3>
          <Graph type="year" id="year" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Analytics;
