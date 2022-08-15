import React from "react";
import "./restSection.css";

const restSection = (props) => {
  return (
    <div className="rest_pos">
      <div className="inner_box by">
        <div className="dot_home">
          <div className="upper_home">
            <div id="y1c" className="dot dot1 y">
              <div class="testing">
                <div id="y1" className="ypiece"></div>
              </div>
            </div>
            <div id="y2c" className="dot dot2 y">
              <div class="testing">
                <div id="y2" className="ypiece"></div>
              </div>
            </div>
          </div>
          <div className="lower_home">
            <div id="y3c" className="dot dot3 y">
              <div class="testing">
                <div id="y3" className="ypiece"></div>
              </div>
            </div>
            <div id="y4c" className="dot dot4 y">
              <div class="testing">
                <div id="y4" className="ypiece"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default restSection;
