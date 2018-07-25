import React from 'react';
import * as c3 from 'c3/c3.min.js';
import './graph.scss';

class BarChart extends React.Component{
    componentDidMount(){
        var chart = c3.generate({
            bindto: '#chart',
            data: {
              columns: [
                ['data1', 30, 200, 100, 400, 150, 250]
              ],
            },
            axis: {
              y: {
                label: { // ADD
                  text: 'Y Label',
                  position: 'outer-middle'
                }
              }
            }
        });
    }
    render(){
        return(
            <div id="chart"></div>
        );
    }
}

export default BarChart;