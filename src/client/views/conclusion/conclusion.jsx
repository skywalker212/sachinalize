import React from 'react';
import Footer from '../../components/footer/footer.jsx';
import Navbar from '../../components/navbar/navbar.jsx';
import Conclude from '../../components/conclude/conclude.jsx';

class Conclusion extends React.Component {
  render() {
    return (
      <div>
        <Navbar active="conclusion"/>
        <div className="container">
          <Conclude />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Conclusion;
