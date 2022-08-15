import React from "react";
import "./restSection.css";

const restSection = (props) => {
  return (
    <div className="rest_pos">
      <div className="inner_box br">
        <div className="dot_home">
          <div className="upper_home">
            <div id="r1c" className="dot dot1 r">
              <div class="testing">
                <div id="r1" className="rpiece"></div>
              </div>
            </div>
            <div id="r2c" className="dot dot2 r">
              <div class="testing">
                <div id="r2" className="rpiece"></div>
              </div>
            </div>
          </div>
          <div className="lower_home">
            <div id="r3c" className="dot dot3 r">
              <div class="testing">
                <div id="r3" className="rpiece"></div>
              </div>
            </div>
            <div id="r4c" className="dot dot4 r">
              <div class="testing">
                <div id="r4" className="rpiece"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default restSection;
