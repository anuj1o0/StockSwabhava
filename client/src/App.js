import React from 'react';
import "./App.css";
import Home from '../src/Home/Home';
import WhyUs from '../src/WhyUs/whyus';
import NewsUpdate from "../src/NewsUpdate/NewsUpdate"
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="app">
      <Home />
      
      <WhyUs/>
      <NewsUpdate/>
      <Footer/>
    </div>
  );
}

export default App;
