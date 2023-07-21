
import './App.css';
import { Route, Routes } from "react-router-dom";
import "../src/App.css";

import SignupUser from "./components/USER/SignupUser";
import LoginNavbarUser from "./components/USER/LoginNavbarUser";
import ViewJobsUser from "./components/USER/ViewJobsUser";
import FooterUser from "./components/USER/FooterUser";
import LoginUser from "./components/USER/LoginUser";
import SignupNavbarUser from "./components/USER/SignupNavbarUser";
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/SignupNavbarUser" element={<SignupNavbarUser/>}></Route>
      <Route path="/LoginUser" element={<LoginUser/>}></Route>
        <Route path="/ViewJobsUser" element={<ViewJobsUser/>}></Route>
        <Route path="/SignupUser" element={<SignupUser/>}></Route>
        <Route path="/LoginNavbarUser" element={<LoginNavbarUser/>}></Route>
        <Route path="/FooterUser" element={<FooterUser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
