import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Nav from './component/Nav/Nav';
import Home from './component/Home/Home';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import NavTop from './component/Nav/NavTop/NavTop';
import FooterBottom from './component/Footer/FooterBottom';
import Contact from './component/Contact/Contact';
import Faq from './component/Faq/Faq';
import FilmMaking from './component/Courses/FilmMaking/FilmMaking';
import IntensiveActing from './component/Courses/IntensiveActing/IntensiveActing';
import EditingAndVfx from './component/Courses/EditngAndVfx/EditngAndVfx';
import SoundDesignAndAudioProduction from './component/Courses/SoundDesignAndAudioProduction/SoundDesignAndAudioProduction';
import WorkshopsAndCrashCourses from './component/Courses/WorkshopsAndCrashCourses/WorkshopsAndCrashCourses';
import OnlineTrainingAndCoaching from './component/Courses/OnlineTrainingAndCoaching/OnlineTrainingAndCoaching';
import Faculty from "./component/Faculty/Faculty"
import Gallery from './component/Gallery/Gallery';

function App() {
  return (
    <div className="App overflow-clip">
      <Router>
    <Nav/>
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About/>} />
  <Route path="/filmaking" element={<FilmMaking/>} />
  <Route path="/intense" element={<IntensiveActing/>} />
  <Route path="/editing" element={<EditingAndVfx/>} />
  <Route path="/sound" element={<SoundDesignAndAudioProduction/>} />
  <Route path="/workshop" element={<WorkshopsAndCrashCourses/>} />
  <Route path="/online" element={<OnlineTrainingAndCoaching/>} />
  <Route path="/faculty" element={<Faculty/>} />
  <Route path="/gallery" element={<Gallery/>} />
  {/* <Route path="/about" element={<About/>} />
  <Route path="/career" element={<Career/>} />
  <Route path="/services" element={<Services/>} />
  <Route path="/excavation" element={<ExcavationServices/>} />
  <Route path="/demolition" element={<DemolitionDismantle/>} />
  */}
  
  {/*  */}
  <Route path="/faq" element={<Faq/>} /> 
  <Route path="/contact" element={<Contact/>} />
</Routes>
<Footer/>
{/* <FooterBottom/> */}
    </Router>
    </div>
  );
}

export default App;
