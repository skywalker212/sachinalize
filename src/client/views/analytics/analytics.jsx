import React from 'react';
import Footer from '../../components/footer/footer.jsx';
import Navbar from '../../components/navbar/navbar.jsx';

class Analytics extends React.Component {
  render() {
    return (
      <div>
        <Navbar active="analytics"/>
        <Footer />
      </div>
    );
  }
}

export default Analytics;