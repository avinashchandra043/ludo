import React from "react";
import "./restTable.css";

const restTable = (props) => {
  return (
    <div>
      <table className="rest_table">
        <tr>
          <td>
            <div id="t23" className="wid"></div>
          </td>
          <td>
            <div id="t24" className="wid">
              <div className="arrow g"></div>
            </div>
          </td>
          <td>
            <div id="t25" className="wid"></div>
          </td>
        </tr>

        <tr>
          <td>
            <div id="t22" className="wid"></div>
          </td>
          <td className="theme g">
            <div id="t24_1" className="wid"></div>
          </td>
          <td className="theme g">
            <div id="t26" className="wid"></div>
          </td>
        </tr>
        <tr>
          <td id="t21">
            <div id="t21" className="wid">
              <div className="star g"></div>
            </div>
          </td>
          <td className="theme g">
            <div id="t24_2" className="wid"></div>
          </td>
          <td>
            <div id="t27" className="wid"></div>
          </td>
        </tr>
        <tr>
          <td>
            <div id="t20" className="wid"></div>
          </td>
          <td className="theme g">
            <div id="t24_3" className="wid"></div>
          </td>
          <td>
            <div id="t28" className="wid"></div>
          </td>
        </tr>
        <tr>
          <td>
            <div id="t19" className="wid"></div>
          </td>
          <td className="theme g">
            <div id="t24_4" className="wid"></div>
          </td>
          <td>
            <div id="t29" className="wid"></div>
          </td>
        </tr>
        <tr>
          <td>
            <div id="t18" className="wid"></div>
          </td>
          <td className="theme g">
            <div id="t24_5" className="wid"></div>
          </td>
          <td>
            <div id="t30" className="wid"></div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default restTable;
