import React from "react";
import Subtract from "../assets/Subtract.png";
import avatar from "../assets/avatar.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import Ellipse from "../assets/Ellipse.png"

const Activities = () => {
  return (
    <div>
      <div className="activities">
        <div className="activities-main">
          <div className="activities-circle">
            <img src={Subtract} alt="circle-img" />
          </div>
          <div className="activities-box">
            <div className="activities-left">
              <div className="profile">
                <img src={avatar} alt="avatar" />
                <div className="profile-right">
                  <h3>Jenny Wilson</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
                </div>
              </div>
              <div className="profile">
                <img src={avatar1} alt="avatar" />
                <div className="profile-right">
                  <h3>Jenny Wilson</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
                </div>
              </div>
              <div className="profile">
                <img src={avatar2} alt="avatar" />
                <div className="profile-right">
                <h3>Jenny Wilson</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
                </div>
              </div>
            </div>
            <div className="activities-right">
              <img src={Ellipse} alt="Ellipse-arrow" />
                <div className="activities-right-top">
                    <h1>Tropical Adventure</h1>
                    <p className="p-student">for Students.</p>
                    <p className="activities-right-top-p">Student Tropical Vacation: Relax and Recharge</p>
                    <div className="activities-right-p">
                        <p><span className="dot"></span> Lorem ipsum dolor sit amet</p>
                        <p><span className="dot"></span> Massa quis natoque sit quam</p>
                        <p><span className="dot"></span> Eron non pellentesque elit</p>
                        <p><span className="dot"></span> tortor id euismod habitant</p>
                        <p><span className="dot"></span> Sed suspendisse id in ultrices</p>
                    </div>
                    <button className="activities-button">Explore more</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
