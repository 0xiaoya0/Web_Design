import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import NarBar from './NarBar';
import Home from './Home';
import Sing from './Sing';
import Choir from './Choir';
import Piece from './Piece';
import Musical from './Musical';
import './App.css';

function App() {
  const [page, setPage] = useState('Home');
  const [darkTheme, setDarkTheme] = useState(false); 

  const goToHome = () => {
    console.log('Navigating to home');
    setPage('Home');
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme); 
  };

  return (
    <>
      <a class="skip" href="#main">Skip to content</a>
      <div className={`app ${darkTheme ? 'dark' : ''}`}>
        <div className='head'>
          <Header goToHome={goToHome}/>
          <button className="theme" onClick={toggleTheme} type="button">theme</button>
        </div>
        <NarBar setPage={setPage}/>
        {page === 'Home' && <Home setPage={setPage}/>}
        {page === 'Sing' && <Sing setPage={setPage}/>}
        {page === 'Choir' && <Choir setPage={setPage}/>}
        {page === 'Piece' && <Piece setPage={setPage}/>}
        {page === 'Musical' && <Musical setPage={setPage}/>}
        <Footer/> 
      </div>
    </>
  );
}

export default App;
