import React from "react";
import "./restTable.css";

const restTable = (props) => {
  return (
    <div>
      <table className="rest_table">
        <tr>
          <td>
            <div id="t10" className="wid"></div>
          </td>
          <td>
            <div id="t11" className="wid">
              <div className="arrow r"></div>
            </div>
          </td>
          <td>
            <div id="t12" className="wid"></div>
          </td>
        </tr>

        <tr>
          <td>
            <div id="t9" className="wid"></div>
          </td>
          <td className="theme r">
            <div id="t11_1" className="wid"></div>
          </td>
          <td className="theme r">
            <div id="t13" className="wid"></div>
          </td>
        </tr>
        <tr>
          <td>
            <div id="t8" className="wid">
              <div className="star r"></div>
            </div>
          </td>
          <td className="theme r">
            <div id="t11_2" className="wid"></div>
          </td>
          <td>
            <div id="t14" className="wid"></div>
          </td>
        </tr>
        <tr>
          <td>
            <div id="t7" className="wid"></div>
          </td>
          <td className="theme r">
            <div id="t11_3" className="wid"></div>
          </td>
          <td>
            <div id="t15" className="wid"></div>
          </td>
        </tr>
        <tr>
          <td id="t6">
            <div id="t6" className="wid"></div>
          </td>
          <td className="theme r">
            <div id="t11_4" className="wid"></div>
          </td>
          <td>
            <div id="t16" className="wid"></div>
          </td>
        </tr>
        <tr>
          <td>
            <div id="t5" className="wid"></div>
          </td>
          <td className="theme r">
            <div id="t11_5" className="wid"></div>
          </td>
          <td>
            <div id="t17" className="wid"></div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default restTable;
