import React from 'react';
import './App.css';
import ProjectsPage from './components/ProjectsPage';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import Jadwal_Keberangkatan from './components/Jadwal_Keberangkatan';
import TrainSelection from './components/TrainSelection'; // Import TrainSelection

function App() {
  return (
    <BrowserRouter>
      <header className='sticky'>
        <div className='logo'>
          <img src="Logo-Baru-PT-KAI.jpg" alt='logo' width='50' height="10" />
        </div>

        <div className="nav-links">
          <NavLink to='/' className="button rounded">
            <span className='icon-home'></span>
            Home
          </NavLink>

          <NavLink to='/projects' className="button rounded">
            Booking tiket
          </NavLink>

          <NavLink to='/Jadwal_Keberangkatan' className="button rounded"> {/* Perbaiki path */}
            Jadwal keberangkatan
          </NavLink>
          
          <NavLink to='/TrainSelection' className="button rounded"> {/* Tambahkan menu untuk TrainSelection */}
           Pilih kereta yg ingin di naiki
          </NavLink>
        </div>
      </header>

      <div className='container'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/Jadwal_Keberangkatan" element={<Jadwal_Keberangkatan />} />
          <Route path="/TrainSelection" element={<TrainSelection />} /> {/* Tambahkan rute untuk TrainSelection */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;