import React from 'react';
import Footer from '../../components/footer/footer.jsx';
import Navbar from '../../components/navbar/navbar.jsx';

class Conclusion extends React.Component {
  render() {
    return (
      <div>
        <Navbar active="conclusion"/>
        <Footer />
      </div>
    );
  }
}

export default Conclusion;
