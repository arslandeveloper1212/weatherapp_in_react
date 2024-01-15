import './App.css';
import Header from "./components/Header"

import Map from './components/MapComponent';

import Accordion from './components/Accordion';
import BreadCrumb from './components/BreadCrumb'
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Health from './components/Health';
import RawalpindiAPi from './components/RawalpindiAPi';
import Today from './components/Today';
import CustomDrawer from './components/CustomDrawer';
function App() {
  return (
    <div>
      <Header />
        <Routes>
        <Route path='/rawalpindi' element= {<RawalpindiAPi/>}/>
          <Route path='/'element={<Today/>}/>
          <Route path='/Health&Services'element={<Health/>}/>
        </Routes>
       <Map/>
      <Accordion/>
      <BreadCrumb/>
      <Footer/>
     </div>


  );
}

export default App
