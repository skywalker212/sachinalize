import React from 'react';
import Graph from '../../components/graph/graph.jsx';

const GraphComponent = (props)=>(
    <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Graph id={props.id} type={props.type}/>
    </div>
);

export default GraphComponent;