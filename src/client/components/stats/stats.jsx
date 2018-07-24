import React from 'react';
import './stats.scss';

const Stats = ()=>(
    <div className="overall-stat text-center">
            <h3>Overall Statistics</h3>
            <table style={{"width":"100%", "margin":"-1px", "whiteSpace":"nowrap"}}>
                <tbody>
                    <tr>
                        <th style={{"width":"6em", "paddingRight":"1em"}}>Competition</th>
                        <th>
                            Test
                        </th>
                        <th>
                            ODI
                        </th>
                        <th>
                            FC
                        </th>
                        <th>
                            LA
                        </th>
                    </tr>
                    <tr>
                        <th style={{"width":"6em", "paddingRight":"1em"}}>Matches</th>
                        <td>200</td>
                        <td>463</td>
                        <td>310</td>
                        <td>551</td>
                    </tr>
                    <tr>
                        <th style={{"width":"6em", "paddingRight":"1em"}}>Runs scored</th>
                        <td>15,921</td>
                        <td>18,426</td>
                        <td>25,396</td>
                        <td>21,999</td>
                    </tr>
                    <tr>
                        <th style={{"width":"6em", "paddingRight":"1em"}}>
                            Batting average
                        </th>
                        <td>53.78</td>
                        <td>44.83</td>
                        <td>57.84</td>
                        <td>45.54</td>
                    </tr>
                    <tr>
                        <th style={{"width":"6em", "paddingRight":"1em"}}>100s/50s</th>
                        <td>51/68</td>
                        <td>49/96</td>
                        <td>81/116</td>
                        <td>60/114</td>
                    </tr>
                    <tr>
                        <th style={{"width":"6em", "paddingRight":"1em"}}>Top score</th>
                        <td>248*</td>
                        <td>200*</td>
                        <td>248*</td>
                        <td>200*</td>
                    </tr>
                    <tr>
                        <th style={{"width":"6em", "paddingRight":"1em"}}>
                            Balls bowled</th>
                        <td>4,240</td>
                        <td>8,054</td>
                        <td>7,605</td>
                        <td>10,230</td>
                    </tr>
                    <tr>
                        <th style={{"width":"6em", "paddingRight":"1em"}}>
                            Wickets
                        </th>
                        <td>46</td>
                        <td>154</td>
                        <td>71</td>
                        <td>201</td>
                    </tr>
                    <tr>
                        <th style={{"width":"6em", "paddingRight":"1em"}}>
                            Bowling average
                        </th>
                        <td>54.17</td>
                        <td>44.48</td>
                        <td>61.74</td>
                        <td>42.17</td>
                    </tr>
                    <tr>
                        <th style={{"width":"6em", "paddingRight":"1em"}}>5 wickets in innings
                        </th>
                        <td>0</td>
                        <td>2</td>
                        <td>0</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <th style={{"width":"6em", "paddingRight":"1em"}}>10 wickets in match</th>
                        <td>0</td>
                        <td>n/a</td>
                        <td>0</td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <th style={{"width":"6em", "paddingRight":"1em"}}>Best bowling</th>
                        <td>3/10</td>
                        <td>5/32</td>
                        <td>3/10</td>
                        <td>5/32</td>
                    </tr>
                    <tr>
                        <th style={{"width":"6em", "paddingRight":"1em"}}>Catches/ stumpings
                        </th>
                        <td>115/–</td>
                        <td>140/–</td>
                        <td>186/–</td>
                        <td>175/–</td>
                    </tr>
                </tbody>
            </table>
        </div>
);

export default Stats;