import React from "react";
import { colorLog } from "./utils";

const InitialCycle = () => {
  return (
    <div>
      {colorLog("In component return", "red")}
      Look at the console!
    </div>
  );
};

export default InitialCycle;
