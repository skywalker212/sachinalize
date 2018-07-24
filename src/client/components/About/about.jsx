import React from 'react';
import './about.scss';
import sachin from '../../assets/img/sachin.jpg';

const About = ()=>(
    <div className="about">
            <h3 className="text-center">About Sachin Tendulkar</h3>
            <div className="about-desc">
                <img src={sachin} alt="Sachin Tendulkar"/>
                <table>
                    <tbody>
                    <tr>
                        <th>Full Name: </th>
                        <td>Sachin Ramesh Tendulkar
                        </td>
                    </tr>
                    <tr>
                        <th>Born: </th>
                        <td>24 April 1973 (age 45)
                        </td>
                    </tr>
                    <tr>
                        <th>Height: </th>
                        <td>5 ft 5 in (165 cm)
                        </td>
                    </tr>
                    <tr>
                        <th>Batting: </th>
                        <td>Right-handed
                        </td>
                    </tr>
                    <tr>
                        <th>Bowling: </th>
                        <td>Right-arm medium, leg break, off break
                        </td>
                    </tr>
                    <tr>
                        <th>Role: </th>
                        <td>Batsman
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
    </div>
);

export default About;