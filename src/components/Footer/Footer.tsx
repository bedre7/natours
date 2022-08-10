import React from "react";
import { Link } from "react-router-dom";
import logo from '../../img/logo-green-2x.png';
import "./Footer.scss"

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
            <div className="navigation">
                <ul>
                    <li><Link to="/">Company</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/">Careers</Link></li>
                    <li><Link to="/">Privacy</Link></li>
                    <li><Link to="/">Terms</Link></li>
                </ul>
            </div>
        </div>
        <div className="col-1-of-2">
            <p>Built by <Link to="/">Jonas Schmedtmann</Link> for his online course ADVANCED CSS AND SASS. Originally the website was build with plain html. I recreated the website using React for practicing my skills </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
