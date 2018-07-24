import React from 'react';
import './footer.scss';

const Footer = ()=>(
    <p className="text-center footer">made with
            <span role="img" style={{"color":"red"}} aria-label="jsx-ally/accessible-emoji">❤️</span> by
            <a href="https://github.com/skywalker212" style={{"textDecoration":"none"}} target="_blank">akash</a>
        </p>
);

export default Footer;