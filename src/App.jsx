import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Index';
import Departments from './pages/department/index';
import About from './pages/about/Index';
import Faculty from './pages/faculty/Index';
import AboutHistory from './pages/about-history/Index';
import Campus from './pages/campus/Index';
import UGPrograms from './pages/ug-programs/Index';
import Events from './pages/events/Index';
import Program from './pages/program-details/Index';
import DepartmentOfBasicScience from './pages/department/pages/BasicScience';
import './styles/main.scss'
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import BasicScience from './pages/department/pages/BasicScience';
import ContactUs from './pages/contactus/Index';
import Admission from './pages/admission/Index';
import Test from './pages/home/component/Test';
import MainLayout from './MainLayout';
function App() {
  return (
    <>
     <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/departments/:program" element={<Departments />} /> 
          <Route path="/departments/department-of-basicscience" element={<DepartmentOfBasicScience />} /> 
          <Route path="/program/:program" element={<Program />} /> 
          <Route path="/faculty" element={<Faculty />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/about/history" element={<AboutHistory />} /> 
          <Route path="/campus" element={<Campus />} /> 
          <Route path="/programs" element={<UGPrograms />} /> 
          <Route path="/events" element={<Events />} /> 
          <Route path="/department/basic-science" element={<BasicScience />} /> 
          <Route path="/admission" element={<Admission />} /> 
          <Route path="/contact-us" element={<ContactUs />} /> 
          <Route path="/test" element={<Test />} /> 
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </MainLayout>
    </Router>
    </>
  );
}

export default App;
