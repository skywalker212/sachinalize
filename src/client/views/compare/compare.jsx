import React from 'react';
import Footer from '../../components/footer/footer.jsx';
import Navbar from '../../components/navbar/navbar.jsx';

class Compare extends React.Component {
  render() {
    return (
      <div>
        <Navbar active="comparison"/>
        <Footer />
      </div>
    );
  }
}

export default Compare;
