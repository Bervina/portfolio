import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

function App() {
  return (

    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/contacts'} element={<Contacts/>}/>
          <Route path={'*'} element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
