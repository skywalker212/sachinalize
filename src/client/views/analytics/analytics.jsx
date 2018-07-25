import React from 'react';
import Footer from '../../components/footer/footer.jsx';
import Navbar from '../../components/navbar/navbar.jsx';
import $ from 'jquery';

const Description = ()=>(
  <p>I am going to analyze Sachin Tendulkar's career only based on batting score since he is more of a batsman than a bowler.</p>
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
          <form>
          <input type='text' name='query' id='query-type'/>
          <button onClick={this.getData}>Click Here</button>
          </form>
          <pre className="show-data"></pre>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Analytics;
