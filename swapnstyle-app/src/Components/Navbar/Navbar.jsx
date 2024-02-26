
import React, { useContext, useState, useRef } from "react";
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { FiMenu } from "react-icons/fi";

function Navbar () {
  const [menu, setMenu] = useState("womens");
  const { getTotalCartItems } = useContext (ShopContext);
  const menuRef = useRef();
  const userMenuRef = useRef();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleUserMenu = () => {
    setIsUserMenuVisible(!isUserMenuVisible);
  };

  return(
    <div className="navbar-box">
      <div className="navbar">
        <div className="nav-logo">
          <Link to='/'><img src={logo} alt="Logo" className="logo-imag" /></Link>
        </div>
        
        <div className="nav-dropdown">
          <FiMenu className="dropdown-icon" onClick={toggleMenu} />
        </div>
    
        <ul ref={menuRef} className={`nav-menu ${isMenuVisible ? 'nav-menu-visible' : ''}`} >   
          <li onClick={() => {setMenu("mens")}}>Men{menu==="mens"? <hr/> : <></>}</li>
          <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration:'none',color:"#716b6b"}} to="/">Women</Link>{menu==="womens"? <hr/> : <></>}</li>
          <li onClick={() => {setMenu("kids")}}>Kids{menu==="kids"? <hr/> : <></>}</li>           
        </ul>

        <div className="nav-login-cart">
          <Link to="/login"><button>Login</button></Link>     
          <FaRegHeart className="nav-icons"  color='#716b6b'/>
          <FaRegUser className="nav-icons"  color='#716b6b' onClick={toggleUserMenu} />
          <Link to="/cart"><AiOutlineShoppingCart className="nav-icons"  color='#716b6b' /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>     
        </div>

        {isUserMenuVisible && (
          <ul ref={userMenuRef} className="user-menu">
            <li >Profile</li>
            <Link to="/listings" style={{textDecoration:'none' }} 
                  onClick={()=>setIsUserMenuVisible(false)}>
                  <li >My Listings</li>
            </Link>
         
            <li >Purchases</li>
            <li >Messages</li>
            <li >Settings</li>
            <li >Help</li>     
            
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;





