import { Link } from "react-router-dom";
import logo1 from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#151515] text-white">
      <Link to='/'>
        <img src={logo1} alt="" />
        <p >
          Edwin Diaz is a software and web<br /> technologies engineer, a 
           life coach<br /> trainer who is 
            also a serial .
        </p>
        
      </Link>
      <nav>
        <h6 className="footer-title">About</h6>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
       
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">Why Car Doctor </a>
        <a className="link link-hover">About </a>
        <a className="link link-hover">Blog </a>
       
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accessability</a>
      </nav>
    </footer>
  );
};

export default Footer;
