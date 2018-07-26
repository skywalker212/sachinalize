import React from 'react';
import Footer from '../../components/footer/footer.jsx';
import Navbar from '../../components/navbar/navbar.jsx';
import GraphComponent from '../../components/graph-component/graph-component.jsx';
import './analytics.scss';

let charts = [
  {
    title:"Runs in matches",
    description:"As we can see that Sachin has scored in between 0-25 in a lot of matches. As we will see later, he has scored between 0-25 in the initial stages of his career",
    type:"runs-range",
    id:"runs_range"
  },{
    title:"Runs in matches (detailed)",
    description:"Sachin has scored between 0-100 in a lot of matches combined rather than 100-200",
    type:"runs",
    id:"runs"
  },
  {
    title:"Score on different Grounds",
    description:"Sachin is consistant with his score irrespective of the ground and he's able to score around 40 on an average.",
    type:"grounds",
    id:"grounds"
  },
  {
    title:"Runs Scored on batting order",
    description:"Sachin has scored more when he appears first in the batting order but the difference between his score when he appears first or second is not too much.",
    type:"innings",
    id:"innings"
  },
  {
    title:"Runs Opposition",
    description:"Sachin is also able to score nearly the same, on an average against any opponent, so he's also consistent with his batting against any opponent.",
    type:"opposition",
    id:"opposition"
  },
  {
    title:"Contribution of runs on outcome of match",
    description:"As we can see, The matches that India won, Sachin had scored more runs on an average as compared to the matches in which India lost.",
    type:"result",
    id:"result"
  },{
    title:"Runs per year",
    description:"In the initial stage of his career, sachin has scored less runs on an average as compared to his score on his prime years between 1994-2009 (this is purely subjective, my opinion).",
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
        <h3>Things to note</h3>
        <p>Please be patient, sometimes some graphs may not load because there is an upper limit to the number of concurrent requests the server can do the elastic server (bonsai.io). Simply refresh the browser if that happens. Whatever analysis that is done in this section is purely subjective.</p>
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
