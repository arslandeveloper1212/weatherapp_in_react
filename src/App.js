import './App.css';
import Header from "./components/Header"
import ShowData from "../src/components/ShowData";
import Map from './components/MapComponent';
import {  Container } from '@mui/material';
import Accordion from './components/Accordion';
import BreadCrumb from './components/BreadCrumb'
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='bg_color'>
      <Container maxWidth="xl">
      <Header />
        <Routes>
          <Route path='/' element={<ShowData/>}/>
        </Routes>
      
     
      <Map/>
      <Accordion/>
      </Container>
      <BreadCrumb/>
      <Footer/>
     </div>


  );
}

export default App
