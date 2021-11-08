import React from "react";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";

function StateList({ item }) {
  const { state, cases, date, deaths } = item;
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 20 }}>{state}</Typography>
          <Typography>Date: {date}</Typography>
          <Typography>Cases: {cases}</Typography>
          <Typography>Deaths: {deaths}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default StateList;
