import React from "react";
import { DataGrid } from "@mui/x-data-grid";

function StateChart({ stateData }) {
  console.log(stateData);

  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];

  return (
    <div>
      <h2>State Table:</h2>
      <div style={{ height: 300, width: "80%", padding: 50 }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default StateChart;
