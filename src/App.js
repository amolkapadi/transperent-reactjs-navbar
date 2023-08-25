import React, {  useEffect } from 'react';
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import MyModal from './Component/CustomModal';

function App() {
  
  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem('modalShown');

    if (!hasModalBeenShown) {
      const modal = new window.bootstrap.Modal(document.getElementById('myModal'));
      modal.show();
      localStorage.setItem('modalShown', 'true');
    }
  }, []);
  return (
   <>
   <MyModal />
   <Navbar />
   <About />
   </>
  );
}

export default App;
