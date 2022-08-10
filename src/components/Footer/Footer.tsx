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
            <p>Built by <Link to="/">Jonas Schmedtmann</Link> for his online course ADVANCED CSS AND SASS. Copyright © by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas Schmedtmann, is of course highly appreciated!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
