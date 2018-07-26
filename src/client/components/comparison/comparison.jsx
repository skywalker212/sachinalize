import React from 'react';
import './comparison.scss';
import Sachin from '../../assets/img/sachin.jpg';
import donB from '../../assets/img/DonaldBradman.jpg';

class Comparison extends React.Component{
    render(){
        return (
            <div className="comparison">
            <table>
              <thead>
                <tr>
                    <th className="red attr">Player Names</th>
                    <th className="blue attr">
                      Sachin Tendulkar
                    </th>
                    <th className="green attr">
                      Sir Donald Bradman
                    </th>
                </tr>
                <tr>
                  <th className="attr">
                    Photos
                  </th>
                  <th>
                    <img src={Sachin} alt="Sachin Tendulkar" />
                  </th>
                  <th>
                    <img src={donB} alt="Sir Donald Bradman" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="attr">Batting</td>
                  <td>Right-handed</td>
                  <td>Right-handed</td>
                </tr>
                <tr className="grey-row">
                  <td className="attr">National side</td>
                  <td>India</td>
                  <td>Australia</td>
                </tr>
                <tr>
                  <td className="attr">Matches (Test)</td>
                  <td>200</td>
                  <td>52</td>
                </tr>        
                <tr className="grey-row">
                  <td className="attr">Runs Scored (Test)</td>
                  <td>15,921</td>
                  <td>6,996</td>
                </tr>
                <tr>
                  <td className="attr">Batting Average (Test)</td>
                  <td>53.78</td>
                  <td>99.94</td>
                </tr>
                <tr className="grey-row">
                  <td className="attr">100s/50s (Test)</td>
                  <td>51/68</td>
                  <td>29/13</td>
                </tr>
                <tr>
                  <td className="attr">Top score (Test)</td>
                  <td>248*</td>
                  <td>334</td>
                </tr>
                <tr className="grey-row">
                  <td className="attr">Catches/stumpings (Test)</td>
                  <td>115/–</td>
                  <td>32/–</td>
                </tr>
                <tr>
                  <td className="attr">Matches (FC)</td>
                  <td>310</td>
                  <td>234</td>
                </tr>
                <tr className="grey-row">
                  <td className="attr">Runs scored (FC)</td>
                  <td>25,396</td>
                  <td>28,067</td>
                </tr>
                <tr>
                  <td className="attr">Batting average (FC)</td>
                  <td>57.84</td>
                  <td>95.14</td>
                </tr>
                <tr className="grey-row">
                  <td className="attr">100s/50s (FC)</td>
                  <td>81/116</td>
                  <td>117/69</td>
                </tr>
                <tr>
                  <td className="attr">Top score (FC)</td>
                  <td>248*</td>
                  <td>452*</td>
                </tr>
                <tr className="grey-row">
                  <td className="attr">Catches/stumpings (FC)</td>
                  <td>186/–</td>
                  <td>131/1</td>
                </tr>
              </tbody>
            </table>
  </div>
        );
    }
}

export default Comparison;