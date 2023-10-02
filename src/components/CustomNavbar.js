import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; 
import './Download.css'; 
import img1 from "../images/img2.jpg"

const CustomNavbar = () => {
  return (
      
    <Navbar className='px-3' expand="lg" fixed="top">
        <Navbar.Brand className='brand-container' href="#about">
          <img
            src={img1}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Profile Image"
          />
          <div className='name-and-title ms-3 me-5 text-center'>
            <p className='name text-white'>Bedir Gocmez</p> 
            <p className="title">Fullstack Web Developer</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link clasName=" active" href="#about">About</Nav.Link>
            <Nav.Link clasName="" href="#projects">Projects</Nav.Link>
            <Nav.Link clasName="" href="#skills">Skills</Nav.Link>
            <Nav.Link clasName="" href="#experiences">Experiences</Nav.Link>
            <Nav.Link clasName="" href="#educations">Educations</Nav.Link>
            <Nav.Link clasName="" href="#contact">Contact</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        <div className='download-cv float-right btn-one'>
            <span ><i class="fa-solid fa-download pe-2"></i>Download CV</span>        
        </div>
      </Navbar>
   
  );
}

export default CustomNavbar;


// import React from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg fixed-top">
//         <div class="container-fluid">
//           <a class="navbar-brand" href="#">
//             Navbar
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   Link
//                 </a>
//               </li>
//               <li class="nav-item dropdown">
//                 <a
//                   class="nav-link dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Dropdown
//                 </a>
//                 <ul class="dropdown-menu">
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Action
//                     </a>
//                   </li>
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Another action
//                     </a>
//                   </li>
//                   <li>
//                     <hr class="dropdown-divider" />
//                   </li>
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Something else here
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link disabled">Disabled</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
