import React from 'react';
import {Fragment} from 'react';
import Logo from './../../Assets/tff.png';
import './Main.css';

function Main () {
  return (
    <Fragment>
      <div className="main-container justify-content-center align-items-center container-fluid row">
        <div className="row justify-content-center align-items-center logo-box col-12">
          <img src={Logo} alt="tff_logo" className="img-fluid col-5" />
        </div>
      </div>
    </Fragment>
  );
}

export default Main;
