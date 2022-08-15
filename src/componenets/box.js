// import React from "react";
import RestTableBlue from "./restTable/restTableBlue";
import RestTableGreen from "./restTable/restTableGreen";
import RestTableYellow from "./restTable/restTableYellow";
import RestTableRed from "./restTable/restTableRed";
import RestSectionBlue from "./restSection/restSectionBlue";
import RestSectionGreen from "./restSection/restSectionGreen";
import RestSectionYellow from "./restSection/restSectionYellow";
import RestSectionRed from "./restSection/restSectionRed";
import Center from "./center";
import Dice from "./dice/dice";
import "./box.css";

const box = () => {
  return (
    <div className="outer_main_box">
      <div className="box">
        <div className="box1">
          <div className="upper">
            <RestSectionRed></RestSectionRed>
            <RestTableGreen></RestTableGreen>
            <RestSectionGreen></RestSectionGreen>
          </div>
          <div className="mid">
            <div className="rot90">
              <RestTableRed></RestTableRed>
            </div>
            <Center></Center>
            <div className="rot-90">
              <RestTableYellow></RestTableYellow>
            </div>
          </div>
          <div className="lower">
            <RestSectionBlue></RestSectionBlue>
            <div className="rot180">
              <RestTableBlue></RestTableBlue>
            </div>
            <RestSectionYellow></RestSectionYellow>
          </div>
        </div>
        <div id="box_2" className="box2">
          <Dice></Dice>
        </div>
      </div>
    </div>
  );
};

export default box;
