import React from 'react';
import * as c3 from 'c3/c3.min.js';
import './graph.scss';
import runs_range from '../../graphs/runs-range.js';
import runs from '../../graphs/runs.js';
import grounds from '../../graphs/grounds.js';
import innings from '../../graphs/innings.js';
import opposition from '../../graphs/opposition.js';
import result from '../../graphs/result.js';
import year from '../../graphs/year.js';

class BarChart extends React.Component{
    componentDidMount(){
        let type = this.props.type;
        let id = this.props.id;
        switch (type) {
            case "runs-range":
                runs_range(id).then((data)=>{
                    c3.generate(data);
                }).catch((err)=>console.log(err));
                break;
            case "runs":
                runs(id).then((data)=>{
                    c3.generate(data);
                }).catch((err)=>console.log(err));
                break;
            case "grounds":
                grounds(id).then((data)=>{
                    c3.generate(data);
                }).catch((err)=>console.log(err));
                break;
            case "innings":
                innings(id).then((data)=>{
                    c3.generate(data);
                }).catch((err)=>console.log(err));
                break;
            case "opposition":
                opposition(id).then((data)=>{
                    c3.generate(data);
                }).catch((err)=>console.log(err));
                break;
            case "result":
                result(id).then((data)=>{
                    c3.generate(data);
                }).catch((err)=>console.log(err));
                break;
            case "year":
                year(id).then((data)=>{
                    c3.generate(data);
                }).catch((err)=>console.log(err));
                break;
            default:
                break;
        }
    }
    render(){
        return(
            <div id={this.props.id}>please wait...</div>
        );
    }
}

export default BarChart;