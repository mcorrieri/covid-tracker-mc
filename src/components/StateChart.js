import React from "react";

function StateChart({ stateData }) {
  const { state, cases, data, deaths } = stateData;
  console.log(stateData);

  return (
    <div>
      <h2>State: {state}</h2>
    </div>
  );
}

export default StateChart;
