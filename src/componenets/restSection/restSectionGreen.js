import React from "react";
import "./restSection.css";

const restSection = (props) => {
  return (
    <div className="rest_pos">
      <div className="inner_box bg">
        <div className="dot_home">
          <div className="upper_home">
            <div id="g1c" className="dot dot1 g">
              <div class="testing">
                <div id="g1" className="gpiece"></div>
              </div>
            </div>
            <div id="g2c" className="dot dot2 g">
              <div class="testing">
                <div id="g2" className="gpiece"></div>
              </div>
            </div>
          </div>
          <div className="lower_home">
            <div id="g3c" className="dot dot3 g">
              <div class="testing">
                <div id="g3" className="gpiece"></div>
              </div>
            </div>
            <div id="g4c" className="dot dot4 g">
              <div class="testing">
                <div id="g4" className="gpiece"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default restSection;
