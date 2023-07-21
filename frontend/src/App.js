// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/employer/Login';
import HomePage from './components/HomePage/HomePage';
import Signup from './components/employer/Signup';
// import Navbar from './components/employer/Navbar';
import Navbar from './components/NavBar/NavBar';
import Dashboard from './components/employer/Dashboard';
import Footer from './components/Footer/Footer'
import Addjobs from './components/employer/AddJobs'
import JobDetails from './components/JobDetails/JobDetails';
import PostedJobs from './components/employer/PostedJobs';
function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/> 
      <Route path="/job/:id" element={<JobDetails />} />
      <Route path='/postedjobs' element={<PostedJobs/>}/> 

    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  );
}
export default App;
