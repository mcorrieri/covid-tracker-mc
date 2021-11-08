import React from "react";
import Card from "@mui/material/Card";
import { Button, CardActions, CardContent, Typography } from "@mui/material";

function StateList({ item }) {
  const { state, cases, date, deaths } = item;
  return (
    <div>
      <Card sx={{ maxWidth: 275, backgroundColor: "grey" }} variant="outlined">
        <CardContent>
          <Typography color="GrayText" sx={{ fontSize: 20 }}>
            {state}
          </Typography>
          <Typography>Date: {date}</Typography>
          <Typography>Cases: {cases}</Typography>
          <Typography>Deaths: {deaths}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See History</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default StateList;
