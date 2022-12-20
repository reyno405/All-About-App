import React from 'react';
//import './App.css';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';

function App() {
  const pageStyle = {
    backgroundColor: '#656d1e',
}
  return (
   <div style={pageStyle}>
    <Header></Header>
    <Footer></Footer>
   </div>
  );
}

export default App;