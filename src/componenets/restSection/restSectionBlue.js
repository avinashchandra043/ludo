import React from "react";
import "./restSection.css";

const restSection = (props) => {
  return (
    <div className="rest_pos">
      <div className="inner_box bb">
        <div className="dot_home">
          <div className="upper_home">
            <div id="b1c" className="dot dot1 b">
              <div class="testing">
                <div id="b1" className="bpiece"></div>
              </div>
            </div>
            <div id="b2c" className="dot dot2 b">
              <div class="testing">
                <div id="b2" className="bpiece"></div>
              </div>
            </div>
          </div>
          <div className="lower_home">
            <div id="b3c" className="dot dot3 b">
              <div class="testing">
                <div id="b3" className="bpiece"></div>
              </div>
            </div>
            <div id="b4c" className="dot dot4 b">
              <div class="testing">
                <div id="b4" className="bpiece"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default restSection;
