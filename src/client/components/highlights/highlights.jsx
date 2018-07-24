import React from 'react';
import './highlights.scss';
import $ from 'jquery';

class Highlights extends React.Component{

    componentDidMount(){
        $(".data").each((ind, ele) => {
            const element = $(ele);
            let data = element.data('number');
            let type = element.data('type');
            let num = 0;
            let inc = 0;
            switch (type) {
                case "match":
                    inc = 5;
                    break;
                case "runs":
                    inc = 200;
                    break;
                case "cent":
                    inc = 1;
                    break;
                case "fif":
                    inc = 2;
                    break;
            }
            let interval = setInterval(() => {
                if (num >= data) {
                    element.html(data);
                    clearInterval(interval);
                } else {
                    num += inc;
                    element.html(num);
                }
            }, 1);
        });
    }

    render(){
        return (
            <div className="highlight text-center">
                <div>
                    <b>Matches Played</b>
                    <p className="data" data-number="1524" data-type="match">0</p>
                </div>
                <div>
                    <b>Runs Scored</b>
                    <p className="data" data-number="81742" data-type="runs">0</p>
                </div>
                <div>
                    <b>Centuries</b>
                    <p className="data" data-number="241" data-type="cent">0</p>
                </div>
                <div>
                    <b>Fifties</b>
                    <p className="data" data-number="394" data-type="fif">0</p>
                </div>
            </div>
        );
    }
}

export default Highlights;