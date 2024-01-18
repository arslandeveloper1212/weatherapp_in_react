import './App.css';
import Header from './components/Header'

import Map from './components/MapComponent';

import Accordion from './components/Accordion';
import BreadCrumb from './components/BreadCrumb'
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Health from './components/Health';
import RawalpindiAPi from './components/RawalpindiAPi';
import Today from './components/Today';
import AirQuality from './components/AirQuality';
import HeaderRawalpindiShown from './components/HeaderRawalpindiShown';


function App() {

  return (
    <div>
      <Routes>
        <Route
          path="/rawalpindi"
          element={
            <>
              <HeaderRawalpindiShown />
              <RawalpindiAPi />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Today />
            </>
          }
        />
        <Route
          path="/Health&Services"
          element={
            <>
              <Header />
              <Health />
            </>
          }
        />
        <Route
          path="/airquality"
          element={
            <>
              <Header />
              <AirQuality />
            </>
          }
        />
      </Routes>
      <Map />
      <Accordion />
      <BreadCrumb />
      <Footer />
    </div>


  );
}

export default App
