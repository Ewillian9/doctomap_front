import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Doctors from './Pages/Doctors/Doctors';
import DoctorDetail from './Pages/DoctorDetail/DoctorDetail';
import Error from './Pages/Error/Error';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctor/:id" element={<DoctorDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
