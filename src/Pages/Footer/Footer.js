import React from 'react';
import {Fragment} from 'react';
import './Footer.css';
import Fb from './../../Assets/facebook.png';

function Footer () {
  return (
    <Fragment>
      <div className="footer-container justify-content-center align-items-center container-fluid row">
        <div className="row content justify-content-lg-evenly justify-content-center align-items-start col-12 ">
          <div className="contact_us col-2 text-center">

            <h4>Contact Us</h4>
            <p>
              To know more about this unique amalgamation of food,fun and enjoyment, reach us
            </p>
            <span>
              Email → <br />thaparfoodfestival22@gmail.com
            </span>
          </div>
          <div className="facebook col-2 text-center mx-2 px-3">
            <h4>Facebook</h4>
            <img src={Fb} alt="" />
          </div>
          <div className="facebook col-2 text-center mx-2 px-3">
            <h4>Instagram</h4>
            <img src={Fb} alt="" />
          </div>
          <div className="facebook col-2 text-center mx-2 px-3">
            <h4>Location</h4>
            <img src={Fb} alt="" />
          </div>
        </div>
      </div>

      <footer className='bg-dark text-light text-center'>
        © Copyright THAPAR FOOD FESTIVAL 2022<br />
        Cloned by Amit Goyal 🙂
      </footer>
    </Fragment>
  );
}

export default Footer;
