import React from 'react';
import {Link} from 'react-router-dom';
import './conclude.scss';

class Conclude extends React.Component{
    render (){
        return (
            <div>
                <h3>Objective</h3>
                <p>Wikipedia says, <i>“Sachin Tendulkar is a former Indian cricketer, widely regarded to be the greatest cricketer of all time.”</i>
                We have some <a href="https://drive.google.com/file/d/0B2W2LMb5AIVldEZNSGJkeWNjcHM/view?usp=sharing" target="_blank">data</a>, we have to use this data to prove or disprove the given statement.</p>
                <h3>Approach</h3>
                <p>We have tried to first analyze data given and tried to figure out Sachin's performance and then we proceed to compare his performance with <b>Sir Donald Bradman</b>.</p>
                <h3>Comparison Results</h3>
                <p>If we look at Sachin as an individual then after looking at charts at <Link to="/analytics">Analytics</Link> page, we can say that he is a pretty good batsman since he is consistent across grounds and opponents.</p>
                <p>After looking at the results at <Link to="/comparison">Compare</Link> page we can say the following points. Notice that Don Bradman has played less matches as compared to Sachin so we will be mainly looking at average statistics. Here I will be referring to Sir Donald Bradman as Don and Sachin Tendulkar as Sachin.</p>
                <h5>Test Matches</h5>
                <ul>
                    <li><b>Don</b>'s batting average (<i>99.94</i>) is more than <b>Sachin</b>'s batting average (<i>53.78</i>)</li>
                    <li><b>Don</b>'s top score (<i>334</i>) is more than <b>Sachin</b>'s top score (<i>248*</i>)</li>
                </ul>
                <h5>First Class Matches</h5>
                <ul>
                    <li><b>Don</b>'s total runs scored (<i>28,067</i>) is more than <b>Sachin</b>'s total runs scored (<i>25,396</i>) even though Don has played less matches than sachin.</li>
                    <li><b>Don</b>'s batting average (<i>95.14</i>) is more than <b>Sachin</b>'s batting average (<i>57.84</i>)</li>
                    <li><b>Don</b>'s top score (<i>452*</i>) is more than <b>Sachin</b>'s top score (<i>248*</i>)</li>
                </ul>
                <p>So we can say that <b>Sir Donald Bradman</b> was a better cricketer that <b>Sachin Tendulkar</b> after looking at comparisons shown above.</p>
                <p>So the statement <i>“Sachin Tendulkar is a former Indian cricketer, widely regarded to be the greatest cricketer of all time.”</i> is <b>not true</b>. But we can rephrase the statement and say that
                <i>“Sachin Tendulkar is a former Indian cricketer, widely regarded to be <b>one of</b> the greatest cricketers of all time.”</i></p>
            </div>
        );
    }
}

export default Conclude;