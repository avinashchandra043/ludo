import React, { useState } from "react";
import DiceHandler from "./diceHandler";

// logic start

// append data start
function appendPiece(pId, i) {
  let x = document.getElementById(pId);
  let y = document.getElementById("t" + i);
  y.appendChild(x);
  console.log("reaching");
}
function appendPieceIn(pId, i, h) {
  let x = document.getElementById(pId);
  let y = document.getElementById("t" + i + "_" + h);
  y.appendChild(x);
  console.log("reaching");
}

// append data end

// logic end
const Dice = () => {
  // random value use start
  const [randValue, randomValue] = useState();
  // random value use state end

  // use state for blue start
  let [b1position, b1positionFunc] = useState(-1);
  let [b1posOut, b1posOutFunc] = useState(false);
  let [b2position, b2positionFunc] = useState(-1);
  let [b2posOut, b2posOutFunc] = useState(false);
  let [b3position, b3positionFunc] = useState(-1);
  let [b3posOut, b3posOutFunc] = useState(false);
  let [b4position, b4positionFunc] = useState(-1);
  let [b4posOut, b4posOutFunc] = useState(false);

  // use state for blue end

  // use state for red start

  let [r1position, r1positionFunc] = useState(12);
  let [r1posOut, r1posOutFunc] = useState(false);
  let [r2position, r2positionFunc] = useState(12);
  let [r2posOut, r2posOutFunc] = useState(false);
  let [r3position, r3positionFunc] = useState(12);
  let [r3posOut, r3posOutFunc] = useState(false);
  let [r4position, r4positionFunc] = useState(12);
  let [r4posOut, r4posOutFunc] = useState(false);
  let [r1no_time, r1setNo_time] = useState(false);
  let [r2no_time, r2setNo_time] = useState(false);
  let [r3no_time, r3setNo_time] = useState(false);
  let [r4no_time, r4setNo_time] = useState(false);
  //use state for red end

  // use state for green start

  let [g1position, g1positionFunc] = useState(25);
  let [g1posOut, g1posOutFunc] = useState(false);
  let [g2position, g2positionFunc] = useState(25);
  let [g2posOut, g2posOutFunc] = useState(false);
  let [g3position, g3positionFunc] = useState(25);
  let [g3posOut, g3posOutFunc] = useState(false);
  let [g4position, g4positionFunc] = useState(25);
  let [g4posOut, g4posOutFunc] = useState(false);
  let [g1no_time, g1setNo_time] = useState(false);
  let [g2no_time, g2setNo_time] = useState(false);
  let [g3no_time, g3setNo_time] = useState(false);
  let [g4no_time, g4setNo_time] = useState(false);
  // use state for green end

  // use state for yellow start
  let [y1position, y1positionFunc] = useState(38);
  let [y1posOut, y1posOutFunc] = useState(false);
  let [y2position, y2positionFunc] = useState(38);
  let [y2posOut, y2posOutFunc] = useState(false);
  let [y3position, y3positionFunc] = useState(38);
  let [y3posOut, y3posOutFunc] = useState(false);
  let [y4position, y4positionFunc] = useState(38);
  let [y4posOut, y4posOutFunc] = useState(false);
  let [y1no_time, y1setNo_time] = useState(false);
  let [y2no_time, y2setNo_time] = useState(false);
  let [y3no_time, y3setNo_time] = useState(false);
  let [y4no_time, y4setNo_time] = useState(false);

  let [chance, setChance] = useState(1);
  let [rank, setRank] = useState(1);
  // use state for yellow end

  // move function start

  // blue move start
  function bmove(pId, x, i, p) {
    if (x === 6 && !p) {
      i++;
      if (pId == "b1") {
        b1posOutFunc(true);
        b1posOut = true;
      } else if (pId == "b2") {
        b2posOutFunc(true);
        b2posOut = true;
      } else if (pId == "b3") {
        b3posOutFunc(true);
        b3posOut = true;
      } else {
        b4posOutFunc(true);
        b4posOut = true;
      }
      appendPiece(pId, i);
    } else if (p) {
      i = i + x;
      if (i < 51) appendPiece(pId, i);
      else if (i < 56) {
        let h = i - 50;
        appendPieceIn(pId, 50, h);
      } else if (i === 56) {
        window.alert("won");
      } else {
        i = i - x;
      }
    }
    console.log(i);
    return i;
  }
  // blue move end

  // red move start
  function rmove(pId, x, i, p, n) {
    if (x === 6 && !p) {
      i++;
      if (pId == "r1") {
        r1posOutFunc(true);
        r1posOut = true;
      } else if (pId == "r2") {
        r2posOutFunc(true);
        r2posOut = true;
      } else if (pId == "r3") {
        r3posOutFunc(true);
        r3posOut = true;
      } else {
        r4posOutFunc(true);
        r4posOut = true;
      }
      appendPiece(pId, i);
    } else if (p) {
      i += x;
      if (i < 52 && !n) {
        appendPiece(pId, i);
      } else if (i > 51) {
        i = i - 52;
        if (pId == "r1") {
          r1setNo_time(true);
        } else if (pId == "r2") {
          r2setNo_time(true);
        } else if (pId == "r3") {
          r3setNo_time(true);
        } else {
          r4setNo_time(true);
        }
        appendPiece(pId, i);
      } else if (i < 12 && n) {
        appendPiece(pId, i);
      } else if (n && i < 17) {
        let h = i - 11;
        appendPieceIn(pId, 11, h);
      } else if (i === 17 && n) {
        window.alert("you won");
      } else {
        i = i - x;
      }
    }
    console.log(i);
    return i;
  }
  // red move end

  // green move start
  function gmove(pId, x, i, p, n) {
    if (x === 6 && !p) {
      i++;
      if (pId == "g1") {
        g1posOutFunc(true);
        g1posOut = true;
      } else if (pId == "g2") {
        g2posOutFunc(true);
        g2posOut = true;
      } else if (pId == "g3") {
        g3posOutFunc(true);
        g3posOut = true;
      } else {
        g4posOutFunc(true);
        g4posOut = true;
      }
      appendPiece(pId, i);
    } else if (p) {
      i += x;
      if (i < 52 && !n) {
        appendPiece(pId, i);
      } else if (i > 51) {
        i = i - 52;
        if (pId == "g1") {
          g1setNo_time(true);
        } else if (pId == "g2") {
          g2setNo_time(true);
        } else if (pId == "g3") {
          g3setNo_time(true);
        } else {
          g4setNo_time(true);
        }
        appendPiece(pId, i);
      } else if (i < 25 && n) {
        appendPiece(pId, i);
      } else if (n && i < 30) {
        let h = i - 24;
        appendPieceIn(pId, 24, h);
      } else if (i === 30 && n) {
        window.alert("you won");
      } else {
        i = i - x;
      }
    }
    console.log(i);
    return i;
  }
  // green move end

  // yellow move start
  function ymove(pId, x, i, p, n) {
    if (x === 6 && !p) {
      i++;
      if (pId == "y1") {
        y1posOutFunc(true);
        y1posOut = true;
      } else if (pId == "y2") {
        y2posOutFunc(true);
        y2posOut = true;
      } else if (pId == "y3") {
        y3posOutFunc(true);
        y3posOut = true;
      } else {
        y4posOutFunc(true);
        y4posOut = true;
      }
      appendPiece(pId, i);
    } else if (p) {
      i += x;
      if (i < 52 && !n) {
        appendPiece(pId, i);
      } else if (i > 51) {
        i = i - 52;
        if (pId == "y1") {
          y1setNo_time(true);
        } else if (pId == "y2") {
          y2setNo_time(true);
        } else if (pId == "y3") {
          y3setNo_time(true);
        } else {
          y4setNo_time(true);
        }
        appendPiece(pId, i);
      } else if (i < 38 && n) {
        appendPiece(pId, i);
      } else if (n && i < 43) {
        let h = i - 37;
        appendPieceIn(pId, 37, h);
      } else if (i === 43 && n) {
        window.alert("you won");
      } else {
        i = i - x;
      }
    }
    console.log(i);
    return i;
  }
  // yellow move end
  //move function end

  const handleRandomNum = (event) => {
    event.preventDefault();
    let valueOfRandomNo = Math.floor(Math.random() * 6 + 1);
    randomValue(valueOfRandomNo);
    const b1p = document.getElementById("b1");
    const b2p = document.getElementById("b2");
    const b3p = document.getElementById("b3");
    const b4p = document.getElementById("b4");

    const r1p = document.getElementById("r1");
    const r2p = document.getElementById("r2");
    const r3p = document.getElementById("r3");
    const r4p = document.getElementById("r4");

    const g1p = document.getElementById("g1");
    const g2p = document.getElementById("g2");
    const g3p = document.getElementById("g3");
    const g4p = document.getElementById("g4");

    const y1p = document.getElementById("y1");
    const y2p = document.getElementById("y2");
    const y3p = document.getElementById("y3");
    const y4p = document.getElementById("y4");
    let i = chance;
    const chanceColor = document.getElementById("box_2");
    if (i === 1) {
      chanceColor.style.background = "rgb(60, 157, 243)";
      function bcut(curPos) {
        if (
          !(
            curPos === 0 ||
            curPos === 8 ||
            curPos === 13 ||
            curPos === 21 ||
            curPos === 26 ||
            curPos === 34 ||
            curPos === 39 ||
            curPos === 47
          )
        ) {
          if (r1position === curPos) {
            r1posOut = false;
            r1setNo_time(false);
            r1positionFunc(12);
            const cutIdr1 = document.retElementById("r1c");
            cutIdr1.appendChild(r1p);
          }
          if (r2position === curPos) {
            r2posOut = false;
            r2positionFunc(12);
            r2setNo_time(false);
            const cutIdr2 = document.getElementById("r2c");
            cutIdr2.appendChild(r2p);
          }
          if (r3position === curPos) {
            r3posOut = false;
            r3positionFunc(12);
            r3setNo_time(false);
            const cutIdr3 = document.getElementById("r3c");
            cutIdr3.appendChild(r3p);
          }
          if (r4position === curPos) {
            r4posOut = false;
            r4positionFunc(12);
            r4setNo_time(false);
            const cutIdr4 = document.getElementById("r4c");
            cutIdr4.appendChild(r4p);
          }
          if (g1position === curPos) {
            g1posOut = false;
            g1positionFunc(38);
            g1setNo_time(false);
            const cutIdg1 = document.getElementById("g1c");
            cutIdg1.appendChild(g1p);
          }
          if (g2position === curPos) {
            g2posOut = false;
            g2positionFunc(38);
            g2setNo_time(false);
            const cutIdg2 = document.getElementById("g2c");
            cutIdg2.appendChild(g2p);
          }
          if (g3position === curPos) {
            g3posOut = false;
            g3positionFunc(38);
            g3setNo_time(false);
            const cutIdg3 = document.getElementById("g3c");
            cutIdg3.appendChild(g3p);
          }
          if (g4position === curPos) {
            g4posOut = false;
            g4positionFunc(38);
            g4setNo_time(false);
            const cutIdg4 = document.getElementById("g4c");
            cutIdg4.appendChild(g4p);
          }
          if (y1position === curPos) {
            y1posOut = false;
            y1positionFunc(38);
            y1setNo_time(false);
            const cutIdy1 = document.getElementById("y1c");
            cutIdy1.appendChild(y1p);
          }
          if (y2position === curPos) {
            y2posOut = false;
            y2positionFunc(38);
            y2setNo_time(false);
            const cutIdy2 = document.getElementById("y2c");
            cutIdy2.appendChild(y2p);
          }
          if (y3position === curPos) {
            y3posOut = false;
            y3positionFunc(38);
            y3setNo_time(false);
            const cutIdy3 = document.getElementById("y3c");
            cutIdy3.appendChild(y3p);
          }
          if (y4position === curPos) {
            y4posOut = false;
            y4positionFunc(38);
            y4setNo_time(false);
            const cutIdy4 = document.getElementById("y4c");
            cutIdy4.appendChild(y4p);
          }
        }
      }
      let t = true;
      b1p.onclick = function () {
        if (t) {
          let i = bmove("b1", valueOfRandomNo, b1position, b1posOut);
          b1positionFunc(i);
          if (b1posOut) {
            let curPos = b1position + valueOfRandomNo;
            bcut(curPos);
          }
          console.log("b1position" + b1position + " " + valueOfRandomNo);
          if (b1posOut) {
            t = false;
          }
        }
      };
      b2p.onclick = function () {
        if (t) {
          b2positionFunc(bmove("b2", valueOfRandomNo, b2position, b2posOut));
          if (b2posOut) {
            let curPos = b2position + valueOfRandomNo;
            bcut(curPos);
          }
          console.log("b2position" + b2position + " " + valueOfRandomNo);
          if (b2posOut) {
            t = false;
          }
        }
      };
      b3p.onclick = function () {
        if (t) {
          b3positionFunc(bmove("b3", valueOfRandomNo, b3position, b3posOut));
          console.log("b3position" + b3position + " " + valueOfRandomNo);
          if (b3posOut) {
            let curPos = b3position + valueOfRandomNo;
            bcut(curPos);
          }
          if (b3posOut) {
            t = false;
          }
        }
      };
      b4p.onclick = function () {
        if (t) {
          b4positionFunc(bmove("b4", valueOfRandomNo, b4position, b4posOut));
          console.log("b4position" + b4position + " " + valueOfRandomNo);
          if (b4posOut) {
            let curPos = b4position + valueOfRandomNo;
            bcut(curPos);
          }
          if (b4posOut) {
            t = false;
          }
        }
      };
      if (
        b1position == 56 &&
        b2position == 56 &&
        b3position == 56 &&
        b4position == 56
      ) {
        window.alert("your position is " + rank);
        setRank(rank + 1);
      }
    } else if (i === 2) {
      function rcut(curPos) {
        if (
          !(
            curPos === 0 ||
            curPos === 8 ||
            curPos === 13 ||
            curPos === 21 ||
            curPos === 26 ||
            curPos === 34 ||
            curPos === 39 ||
            curPos === 47
          )
        ) {
          if (b1position === curPos) {
            b1posOut = false;
            b1positionFunc(-1);
            const cutIdb1 = document.getElementById("b1c");
            cutIdb1.appendChild(b1p);
          }
          if (b2position === curPos) {
            b2posOut = false;
            b2positionFunc(-1);
            const cutIdb2 = document.getElementById("b2c");
            cutIdb2.appendChild(b2p);
          }
          if (b3position === curPos) {
            b3posOut = false;
            b3positionFunc(-1);
            const cutIdb3 = document.getElementById("b3c");
            cutIdb3.appendChild(b3p);
          }
          if (b4position === curPos) {
            b4posOut = false;
            b4positionFunc(-1);
            const cutIdb4 = document.getElementById("b4c");
            cutIdb4.appendChild(b4p);
          }
          if (g1position === curPos) {
            g1posOut = false;
            g1positionFunc(38);
            g1setNo_time(false);
            const cutIdg1 = document.getElementById("g1c");
            cutIdg1.appendChild(g1p);
          }
          if (g2position === curPos) {
            g2posOut = false;
            g2positionFunc(38);
            g2setNo_time(false);
            const cutIdg2 = document.getElementById("g2c");
            cutIdg2.appendChild(g2p);
          }
          if (g3position === curPos) {
            g3posOut = false;
            g3positionFunc(38);
            g3setNo_time(false);
            const cutIdg3 = document.getElementById("g3c");
            cutIdg3.appendChild(g3p);
          }
          if (g4position === curPos) {
            g4posOut = false;
            g4positionFunc(38);
            g4setNo_time(false);
            const cutIdg4 = document.getElementById("g4c");
            cutIdg4.appendChild(g4p);
          }
          if (y1position === curPos) {
            y1posOut = false;
            y1positionFunc(38);
            y1setNo_time(false);
            const cutIdy1 = document.getElementById("y1c");
            cutIdy1.appendChild(y1p);
          }
          if (y2position === curPos) {
            y2posOut = false;
            y2positionFunc(38);
            y2setNo_time(false);
            const cutIdy2 = document.getElementById("y2c");
            cutIdy2.appendChild(y2p);
          }
          if (y3position === curPos) {
            y3posOut = false;
            y3positionFunc(38);
            y3setNo_time(false);
            const cutIdy3 = document.getElementById("y3c");
            cutIdy3.appendChild(y3p);
          }
          if (y4position === curPos) {
            y4posOut = false;
            y4positionFunc(38);
            y4setNo_time(false);
            const cutIdy4 = document.getElementById("y4c");
            cutIdy4.appendChild(y4p);
          }
        }
      }
      chanceColor.style.background = "red";

      let t = true;

      r1p.onclick = function () {
        if (t) {
          r1positionFunc(
            rmove("r1", valueOfRandomNo, r1position, r1posOut, r1no_time)
          );
          console.log("r1position" + r1position + " " + valueOfRandomNo);
          if (r1posOut) {
            let curPos = r1position + valueOfRandomNo;
            rcut(curPos);
          }
          if (r1posOut) {
            t = false;
          }
        }
      };
      r2p.onclick = function () {
        if (t) {
          r2positionFunc(
            rmove("r2", valueOfRandomNo, r2position, r2posOut, r2no_time)
          );
          console.log("r2position" + r2position + " " + valueOfRandomNo);
          if (r2posOut) {
            let curPos = r2position + valueOfRandomNo;
            rcut(curPos);
          }
          if (r2posOut) {
            t = false;
          }
        }
      };
      r3p.onclick = function () {
        if (t) {
          r3positionFunc(
            rmove("r3", valueOfRandomNo, r3position, r3posOut, r3no_time)
          );
          console.log("r3position" + r3position + " " + valueOfRandomNo);
          if (r3posOut) {
            let curPos = r3position + valueOfRandomNo;
            rcut(curPos);
          }
          if (r3posOut) {
            t = false;
          }
        }
      };
      r4p.onclick = function () {
        if (t) {
          r4positionFunc(
            rmove("r4", valueOfRandomNo, r4position, r4posOut, r4no_time)
          );
          console.log("r4position" + r4position + " " + valueOfRandomNo);
          if (r4posOut) {
            let curPos = r4position + valueOfRandomNo;
            rcut(curPos);
          }
          if (r4posOut) {
            t = false;
          }
        }
      };
      if (
        r1position === 17 &&
        r2position === 17 &&
        r3position === 17 &&
        r4position === 17 &&
        r1no_time &&
        r2no_time &&
        r3no_time &&
        r4no_time
      ) {
        window.alert("your position is " + rank);
        setRank(rank + 1);
      }
    } else if (i === 3) {
      chanceColor.style.background = "green";
      function gcut(curPos) {
        if (
          !(
            curPos === 0 ||
            curPos === 8 ||
            curPos === 13 ||
            curPos === 21 ||
            curPos === 26 ||
            curPos === 34 ||
            curPos === 39 ||
            curPos === 47
          )
        ) {
          if (b1position === curPos) {
            b1posOut = false;
            b1positionFunc(-1);
            const cutIdb1 = document.getElementById("b1c");
            cutIdb1.appendChild(b1p);
          }
          if (b2position === curPos) {
            b2posOut = false;
            b2positionFunc(-1);
            const cutIdb2 = document.getElementById("b2c");
            cutIdb2.appendChild(b2p);
          }
          if (b3position === curPos) {
            b3posOut = false;
            b3positionFunc(-1);
            const cutIdb3 = document.getElementById("b3c");
            cutIdb3.appendChild(b3p);
          }
          if (b4position === curPos) {
            b4posOut = false;
            b4positionFunc(-1);
            const cutIdb4 = document.getElementById("b4c");
            cutIdb4.appendChild(b4p);
          }
          if (r1position === curPos) {
            r1posOut = false;
            r1setNo_time(false);
            r1positionFunc(12);
            const cutIdr1 = document.retElementById("r1c");
            cutIdr1.appendChild(r1p);
          }
          if (r2position === curPos) {
            r2posOut = false;
            r2positionFunc(12);
            r2setNo_time(false);
            const cutIdr2 = document.getElementById("r2c");
            cutIdr2.appendChild(r2p);
          }
          if (r3position === curPos) {
            r3posOut = false;
            r3positionFunc(12);
            r3setNo_time(false);
            const cutIdr3 = document.getElementById("r3c");
            cutIdr3.appendChild(r3p);
          }
          if (r4position === curPos) {
            r4posOut = false;
            r4positionFunc(12);
            r4setNo_time(false);
            const cutIdr4 = document.getElementById("r4c");
            cutIdr4.appendChild(r4p);
          }
          if (y1position === curPos) {
            y1posOut = false;
            y1positionFunc(38);
            y1setNo_time(false);
            const cutIdy1 = document.getElementById("y1c");
            cutIdy1.appendChild(y1p);
          }
          if (y2position === curPos) {
            y2posOut = false;
            y2positionFunc(38);
            y2setNo_time(false);
            const cutIdy2 = document.getElementById("y2c");
            cutIdy2.appendChild(y2p);
          }
          if (y3position === curPos) {
            y3posOut = false;
            y3positionFunc(38);
            y3setNo_time(false);
            const cutIdy3 = document.getElementById("y3c");
            cutIdy3.appendChild(y3p);
          }
          if (y4position === curPos) {
            y4posOut = false;
            y4positionFunc(38);
            y4setNo_time(false);
            const cutIdy4 = document.getElementById("y4c");
            cutIdy4.appendChild(y4p);
          }
        }
      }
      let t = true;
      g1p.onclick = function () {
        if (t) {
          g1positionFunc(
            gmove("g1", valueOfRandomNo, g1position, g1posOut, g1no_time)
          );
          console.log("g1position" + g1position + " " + valueOfRandomNo);
          if (g1posOut) {
            let curPos = g1position + valueOfRandomNo;
            gcut(curPos);
          }
          if (g1posOut) {
            t = false;
          }
        }
      };
      g2p.onclick = function () {
        if (t) {
          g2positionFunc(
            gmove("g2", valueOfRandomNo, g2position, g2posOut, g2no_time)
          );
          console.log("g2position" + g2position + " " + valueOfRandomNo);
          if (g2posOut) {
            let curPos = g2position + valueOfRandomNo;
            gcut(curPos);
          }
          if (g2posOut) {
            t = false;
          }
        }
      };
      g3p.onclick = function () {
        if (t) {
          g3positionFunc(
            gmove("g3", valueOfRandomNo, g3position, g3posOut, g3no_time)
          );
          console.log("g3position" + g3position + " " + valueOfRandomNo);
          if (g3posOut) {
            let curPos = g3position + valueOfRandomNo;
            gcut(curPos);
          }
          if (g3posOut) {
            t = false;
          }
        }
      };
      g4p.onclick = function () {
        if (t) {
          g4positionFunc(
            gmove("g4", valueOfRandomNo, g4position, g4posOut, g4no_time)
          );
          console.log("g4position" + g4position + " " + valueOfRandomNo);
          if (g4posOut) {
            let curPos = g4position + valueOfRandomNo;
            gcut(curPos);
          }
          if (g4posOut) {
            t = false;
          }
        }
      };
      if (
        g1position === 30 &&
        g2position === 30 &&
        g3position === 30 &&
        g4position === 30 &&
        g1no_time &&
        g2no_time &&
        g3no_time &&
        g4no_time
      ) {
        window.alert("your position is " + rank);
        setRank(rank + 1);
      }
    } else {
      chanceColor.style.background = "orange";
      function ycut(curPos) {
        if (
          !(
            curPos === 0 ||
            curPos === 8 ||
            curPos === 13 ||
            curPos === 21 ||
            curPos === 26 ||
            curPos === 34 ||
            curPos === 39 ||
            curPos === 47
          )
        ) {
          if (b1position === curPos) {
            b1posOut = false;
            b1positionFunc(-1);
            const cutIdb1 = document.getElementById("b1c");
            cutIdb1.appendChild(b1p);
          }
          if (b2position === curPos) {
            b2posOut = false;
            b2positionFunc(-1);
            const cutIdb2 = document.getElementById("b2c");
            cutIdb2.appendChild(b2p);
          }
          if (b3position === curPos) {
            b3posOut = false;
            b3positionFunc(-1);
            const cutIdb3 = document.getElementById("b3c");
            cutIdb3.appendChild(b3p);
          }
          if (b4position === curPos) {
            b4posOut = false;
            b4positionFunc(-1);
            const cutIdb4 = document.getElementById("b4c");
            cutIdb4.appendChild(b4p);
          }
          if (r1position === curPos) {
            r1posOut = false;
            r1setNo_time(false);
            r1positionFunc(12);
            const cutIdr1 = document.retElementById("r1c");
            cutIdr1.appendChild(r1p);
          }
          if (r2position === curPos) {
            r2posOut = false;
            r2positionFunc(12);
            r2setNo_time(false);
            const cutIdr2 = document.getElementById("r2c");
            cutIdr2.appendChild(r2p);
          }
          if (r3position === curPos) {
            r3posOut = false;
            r3positionFunc(12);
            r3setNo_time(false);
            const cutIdr3 = document.getElementById("r3c");
            cutIdr3.appendChild(r3p);
          }
          if (r4position === curPos) {
            r4posOut = false;
            r4positionFunc(12);
            r4setNo_time(false);
            const cutIdr4 = document.getElementById("r4c");
            cutIdr4.appendChild(r4p);
          }
          if (g1position === curPos) {
            g1posOut = false;
            g1positionFunc(38);
            g1setNo_time(false);
            const cutIdg1 = document.getElementById("g1c");
            cutIdg1.appendChild(g1p);
          }
          if (g2position === curPos) {
            g2posOut = false;
            g2positionFunc(38);
            g2setNo_time(false);
            const cutIdg2 = document.getElementById("g2c");
            cutIdg2.appendChild(g2p);
          }
          if (g3position === curPos) {
            g3posOut = false;
            g3positionFunc(38);
            g3setNo_time(false);
            const cutIdg3 = document.getElementById("g3c");
            cutIdg3.appendChild(g3p);
          }
          if (g4position === curPos) {
            g4posOut = false;
            g4positionFunc(38);
            g4setNo_time(false);
            const cutIdg4 = document.getElementById("g4c");
            cutIdg4.appendChild(g4p);
          }
        }
      }

      let t = true;

      y1p.onclick = function () {
        if (t) {
          let i = ymove("y1", valueOfRandomNo, y1position, y1posOut, y1no_time);
          y1positionFunc(i);
          console.log("y1position" + y1position + " " + valueOfRandomNo);
          if (y1posOut) {
            let curPos = y1position + valueOfRandomNo;
            ycut(curPos);
          }
          if (y1posOut) {
            t = false;
          }
        }
      };
      y2p.onclick = function () {
        if (t) {
          y2positionFunc(
            ymove("y2", valueOfRandomNo, y2position, y2posOut, y2no_time)
          );
          console.log("y2position" + y2position + " " + valueOfRandomNo);
          if (y2posOut) {
            let curPos = y2position + valueOfRandomNo;
            ycut(curPos);
          }
          if (y2posOut) {
            t = false;
          }
        }
      };
      y3p.onclick = function () {
        if (t) {
          y3positionFunc(
            ymove("y3", valueOfRandomNo, y3position, y3posOut, y3no_time)
          );
          console.log("y3position" + y3position + " " + valueOfRandomNo);
          if (y3posOut) {
            let curPos = y3position + valueOfRandomNo;
            ycut(curPos);
          }
          if (y3posOut) {
            t = false;
          }
        }
      };
      y4p.onclick = function () {
        if (t) {
          y4positionFunc(
            ymove("y4", valueOfRandomNo, y4position, y4posOut, y4no_time)
          );
          console.log("y4position" + y4position + " " + valueOfRandomNo);
          if (y4posOut) {
            let curPos = y4position + valueOfRandomNo;
            ycut(curPos);
          }
          if (y4posOut) {
            t = false;
          }
        }
      };
      if (
        y1position === 43 &&
        y2position === 43 &&
        y3position === 43 &&
        y4position === 43 &&
        y1no_time &&
        y2no_time &&
        y3no_time &&
        y4no_time
      ) {
        window.alert("your position is " + rank);
        setRank(rank + 1);
      }
    }
    if (valueOfRandomNo === 6) {
      setChance(i);
    } else {
      i++;
      i = i % 4;
      setChance(i);
    }
  };
  return (
    <div className="dice_out" onClick={handleRandomNum}>
      <DiceHandler value={randValue}></DiceHandler>
    </div>
  );
};
export default Dice;
