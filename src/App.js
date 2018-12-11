import React, { Component } from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="view-placeholder" />
        <Footer />
      </div>
    );
  }
}

export default App;
