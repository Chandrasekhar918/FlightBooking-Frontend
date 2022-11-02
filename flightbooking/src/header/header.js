import React from "react";
import logo from "./flight-logo.jpg";
import "./header.css";
import { Link } from "react-router-dom";
function Header(){
    return(

        <div>
<nav class="navbar navbar-expand-lg fixed-top bg-light navbar-light">
  <div class="container">
    <a class="navbar-brand"  href="#"
      ><img class="cs1"
        id="Flight-logo"
        src="https://tse2.mm.bing.net/th?id=OIP.eZiMCh-VMPYNnqOYWjuiewAAAA&pid=Api&P=0"
     
       
        height="35"
    /></a>
  
    <div  id="cs">
      <ul class="navbar-nav ms-auto align-items-center">
        <li class="nav-item">
          
          <a class="nav-link " href="/"><i class="fas fa-plus-circle pe-2"></i>Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link mx-2" href="/aboutus"><i class="fas fa-bell pe-2"></i>About Us</a>
        </li>

        <li class="nav-item">
          <a class="nav-link mx-2" href="/contactus"><i class="fas fa-bell pe-2"></i>Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="/signin"><i class="fas fa-bell pe-2"></i>Sign in</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="/signup"><i class="fas fa-bell pe-2"></i>Sign up</a>
        </li>

        <li class="nav-item">
          <a class="nav-link mx-2" href="/search"><i class="fas fa-bell pe-2"></i>Search</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link mx-2" href="/checkin"><i class="fas fa-bell pe-2"></i>Checkin</a>
        </li>
       
        
      </ul>
    </div>
  </div>
</nav>


  </div>


    );
}
export default Header;