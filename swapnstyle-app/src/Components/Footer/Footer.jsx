
import './Footer.css';
import footer_logo from '../Assets/logo.jpg';
import { LiaInstagram } from "react-icons/lia";
import { BsFacebook } from "react-icons/bs";


function Footer () {
  return(
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt="Logo" className='logo'/>
      </div>

      <ul className='footer-links'>
        <li>Company</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='social-icon'>
        <LiaInstagram size='26px' className='insta-icon'/>
        <BsFacebook size='26px' />       
      </div>  
        
        <div className='copyright'>
        <p>&copy;&nbsp;&nbsp;{new Date().getFullYear()} &nbsp;SwapNstyle </p>

      </div>

    </div>
  );

}

export default Footer