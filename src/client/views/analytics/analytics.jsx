import React from 'react';
import Footer from '../../components/footer/footer.jsx';
import Navbar from '../../components/navbar/navbar.jsx';
import $ from 'jquery';
import Graph from '../../components/graph/graph.jsx';
import './analytics.scss';

const Description = ()=>(
  <p>I am going to analyze Sachin Tendulkar's glorious career only based on batting score since he is more of a batsman than a bowler.</p>
);

class Analytics extends React.Component {
  getData=(e)=>{
    e.preventDefault();
    const type = $("#query-type").val();
    console.log(type);
    $.get('/aggregation',{
      type
    },(data)=>{
      $('.show-data').html(JSON.stringify(data));
    });
  }
  render() {
    return (
      <div>
        <Navbar active="analytics"/>
        <div className="container">
          <Description />
          <Graph/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Analytics;
