import React from 'react';
import "./Footer.css"

const Footer = () => {
 return (
  <footer className="footer">
   <div className="footer-content">
    <div className="footer-section">
     <h3>About us</h3>
     <p>ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improve their employability opportunities in the Industry. The Company is supported by Govt. of India , partnered by Govt. of Kerala and the IT industry.</p>
    </div>

    <div className="footer-section">
     <h3>Contact us</h3>
     <p>For more details Contact us @ info@ictkerala.org OR reach us at 0471-2700811/12/13</p>
    </div>

    <div className="footer-section">
     <h3>Quicklinks</h3>
     <ul>
      <li>
       <a href="#loginalumini">Login</a>
      </li>
      <li>
       <a href="#sign">SignUp</a>
      </li>
      {/* Add more links as needed */}
     </ul>
    </div>
   </div>

   <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} ICT Academy of Kerala. All rights reserved.</p>
   </div>
  </footer>
 );
};

export default Footer;