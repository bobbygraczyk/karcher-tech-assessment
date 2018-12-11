import React, { Component } from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Main from './views/main.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
