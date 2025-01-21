import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import ParticlesBG from './components/particles/ParticlesBG'
import Header from './components/header/Header'
import Nav from './components/navbar/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Qualification from './components/qualification/Qualification'
import Services from './components/services/Services'
// import Testimonials from './components/testimonials/Testimonials'
import './App.css';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <ParticlesBG/>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Qualification/>
      <Services/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
    </BrowserRouter>
      
    
  );
}

export default App;
