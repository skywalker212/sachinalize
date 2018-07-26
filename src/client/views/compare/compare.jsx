import React from 'react';
import Footer from '../../components/footer/footer.jsx';
import Navbar from '../../components/navbar/navbar.jsx';
import Comparison from '../../components/comparison/comparison.jsx';

class Compare extends React.Component {
  render() {
    return (
      <div>
        <Navbar active="comparison"/>
        <div className="container">
        <h3>Info</h3>
        <p>In this section we are going to compare Sachin Tendulkar's stats with Sir Don Bradman's Stats. This data is extracted from wikipedia pages of the players.</p>
        </div>
        <Comparison />
        <Footer />
      </div>
    );
  }
}

export default Compare;
