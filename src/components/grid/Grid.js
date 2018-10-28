import React from "react";
import uuid4 from "uuid4";
import classes from "./Grid.module.css";
// props.data props.click props.numpad
const Grid = props => {
  let rows = [];
  for (let i = 0; i < props.data.length; i++) {
    // console.log(props.data[i].keyName || 1);

    let row = (
      <div
        key={uuid4()}
        className={classes.item}
        onClick={() => props.click(props.data[i].keyName)}
      >
        {props.data[i].keyName}
      </div>
    );
    if (props.data[i].keyName === "Lock") {
      row = (
        <div key={uuid4()} className={classes.item} onClick ={props.numLock}>
          {props.data[i].keyName}
        </div>
      );
    }
    if (props.data[i].doubleHeight) {
      row = (
        <div
          key={uuid4()}
          className={`${classes.item} ${classes.doubleHeight}`}
          onClick={() => props.click(props.data[i].keyName)}
        >
          {props.data[i].keyName}
        </div>
      );
    }
    if (props.data[i].doubleWidth) {
      row = (
        <div
          key={uuid4()}
          className={`${classes.item} ${classes.doubleWidth}`}
          onClick={() => props.click(props.data[i].keyName)}
        >
          {props.data[i].keyName}
        </div>
      );
    }

    rows.push(row);
  }

  return <div className={`${classes.container}`}>{rows}</div>;
};

export default Grid;
