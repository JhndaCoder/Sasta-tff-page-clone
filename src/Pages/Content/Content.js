import React from 'react';
import {Fragment} from 'react';
import './Content.css';
import Logo from './../../Assets/tff.png';
import Coke from './../../Assets/cocaCola.png';
import Keventer from './../../Assets/Keventers.png';
import TFF_16 from './../../Assets/tff_16.png';

function Content () {
  return (
    <Fragment>
      <div className="content-container container-fluid">
        <div className="row content justify-content-center align-items-center">
          {/* About Us */}
          <div className="about row col-8 col-lg-11 my-4 p-4 justify-content-center align-items-center">
            <h1 className="text-center">About Us</h1>
            <div className="content-text col-md-5 col-10 text-center order-2 order-md-1">
              <h3>Who we are</h3>
              <p>
                WHO WE ARE
                Thapar Food Festival is one of the most magnificient and pompous fests of Thapar Institute of Engineering and Technology. The fest takes place in September and with Coca-Cola as our title sponsor, we hope mesmerise more people by the beauty of food .
              </p>
              <h3 className="">THE PALLETE OF FLAVOURS</h3>
              <p>
                The theme, a palette of flavors is an idea revolving around the concept that basic flavors blend to give rise to an assortment of flavors bringing about the diversity in food. The motive is to bring to light, foods that are visually appealing and exquisitely flavoured.
              </p>
            </div>
            <div className="logo col-md-5 col-10 order-1 order-md-2">
              <img src={Logo} alt="" className="img-fluid" />
            </div>
          </div>

          {/* Past Sponsors */}
          <div className="about row col-lg-11 col-10 my-5 p-4 justify-content-center align-items-center">
            <h1 className="text-center">Past Sponsors</h1>
            <div className="sponsors row justify-content-center align-items-center p-lg-4 p-2">
              <img src={Coke} className="col-lg-2 col-4 m-lg-2 m-1 img-fluid" alt="coke" />
              <img src={Keventer} className="col-lg-2 col-4 m-lg-2 m-1 img-fluid" alt="" />
              <img src={Coke} className="col-lg-2 col-4 m-lg-2 m-1 img-fluid" alt="coke" />
              <img src={Keventer} className="col-lg-2 col-4 m-lg-2 m-1 img-fluid" alt="" />
              <img src={Coke} className="col-lg-2 col-4 m-lg-2 m-1 img-fluid" alt="coke" />
              <img src={Keventer} className="col-lg-2 col-4 m-lg-2 m-1 img-fluid" alt="" />
              <img src={Coke} className="col-lg-2 col-4 m-lg-2 m-1 img-fluid" alt="coke" />
              <img src={Keventer} className="col-lg-2 col-4 m-lg-2 m-1 img-fluid" alt="" />
            </div>
          </div>
          {/* Memories */}
          <div className="about row col-lg-11 col-10 my-5 p-4 justify-content-center align-items-center">
            <h1 className="text-center">Memories</h1>
            <p className="text-center col-8 my-4">
              Memories are treasures one will always preserve. One may not live a moment again, but can remember and cherish it forever. Memoreies are windows to the past that allow one to jump into that momentous joy and rekive it again. Thapar Food Festival is a joy of many and has always created a plethora of memories, that cherish this unique concoction of food,fun and satisfaction. Music, Art, Dance, Sweet, Sour-our bag is a mixture of all emotions. Below are glimpse of the same:
            </p>
            <div className="memories row justify-content-center align-items-center p-4 col-10">
              <img src={TFF_16} className="col-lg-4 col-5 img-fluid m-2" alt="" />
              <img src={TFF_16} className="col-lg-4 col-5 img-fluid m-2" alt="" />
              <img src={TFF_16} className="col-lg-4 col-5 img-fluid m-2" alt="" />
              <img src={TFF_16} className="col-lg-4 col-5 img-fluid m-2" alt="" />
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
}

export default Content;
