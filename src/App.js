import React from 'react'
import AddSection from './components/AddSection';
import Appointments from './components/Appointments';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='page-title'>React Appointment App</h1>
       <div className='components'>
         <AddSection />
         <Appointments />
       </div>
    </div>
  );
}

export default App;
