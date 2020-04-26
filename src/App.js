import React from 'react';
import './App.css'
import Projects from './components/Projects/index'
import Footer from './components/Footer/index'
import Header from './components/Header/index';
import About from './components/About/index';
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <div>
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>

      </div>
      
  
  );
}

export default App;
