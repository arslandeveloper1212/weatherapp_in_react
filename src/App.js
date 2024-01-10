import './App.css';
import Header from "./components/Header"
import ShowData from "../src/components/ShowData";
import Map from './components/MapComponent';
import {  Container } from '@mui/material';
import Accordion from './components/Accordion';
import BreadCrumb from './components/BreadCrumb'
import Footer from './components/Footer';
function App() {
  return (
    <div className='bg_color'>
      <Container maxWidth="xl">
      <Header />
      <ShowData />
      <Map/>
      <Accordion/>
      </Container>
      <BreadCrumb/>
      <Footer/>
     

    </div>


  );
}

export default App
