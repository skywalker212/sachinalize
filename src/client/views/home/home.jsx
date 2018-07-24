import React from 'react';
import Footer from '../../components/footer/footer.jsx';
import Navbar from '../../components/navbar/navbar.jsx';
import About from '../../components/About/about.jsx';
import Highlights from '../../components/highlights/highlights.jsx';
import Stats from '../../components/stats/stats.jsx';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar active="home"/>
        <div className="container">
            <About />
            <Highlights />
            <Stats />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
