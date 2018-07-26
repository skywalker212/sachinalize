import React from 'react';
import Footer from '../../components/footer/footer.jsx';
import Navbar from '../../components/navbar/navbar.jsx';
import GraphComponent from '../../components/graph-component/graph-component.jsx';
import './analytics.scss';

let charts = [
  {
    title:"Runs in matches",
    description:"As we can see that Sachin has scored in between 0-25 in a lot of matches but his score is nearly equally distributed in other matches that he has played. As we will see later, he has scored between 0-25 in the initial stages of his career",
    type:"runs-range",
    id:"runs_range"
  },{
    title:"Runs in matches (detailed)",
    description:"",
    type:"runs",
    id:"runs"
  },
  {
    title:"Score on different Grounds",
    description:"",
    type:"grounds",
    id:"grounds"
  },
  {
    title:"Runs Scored on batting order",
    description:"",
    type:"innings",
    id:"innings"
  },
  {
    title:"Runs Opposition",
    description:"",
    type:"opposition",
    id:"opposition"
  },
  {
    title:"Contribution of runs on outcome of match",
    description:"",
    type:"result",
    id:"result"
  },{
    title:"Runs per year",
    description:"",
    type:"year",
    id:"year"
  }
];

class Analytics extends React.Component {
  render() {
    return (
      <div>
        <Navbar active="analytics"/>
        <div className="container">
          {
            charts.map((val,index)=>(
              <GraphComponent key={index} title={val.title} id={val.id} description={val.description} type={val.type} />
            ))
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default Analytics;
