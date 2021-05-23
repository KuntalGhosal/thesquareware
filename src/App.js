import React from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Tab from './components/Tab/Tabs'

function App() {
  return (
    <>
      <div className="main-container">
        <div className=" container">
          <Header />
          <div style={{ marginRight: 'auto', marginLeft: 'auto' }}>
            <Tab />
          </div>
        </div>

      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
