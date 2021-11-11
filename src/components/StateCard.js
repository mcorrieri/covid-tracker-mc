import React, { useState } from "react";
import Card from "@mui/material/Card";
import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function StateList({ item }) {
  // const { state, cases, date, deaths } = item;
  const [stateData, setStateData] = useState([]);
  const navigate = useNavigate();

  async function fetchStateData() {
    const response = await fetch(
      `https://disease.sh/v3/covid-19/nyt/states/${item.state}?lastdays=30`
    )
      .then((res) => res.json())
      .then((stateData) => setStateData(stateData));
    navigate("/:id/state");
  }
  console.log(stateData);

  return (
    <div className="cards">
      <Card className="card" sx={{ maxWidth: 275 }} variant="outlined">
        <CardContent>
          <Typography color="GrayText" sx={{ fontSize: 20 }}>
            {item.state}
          </Typography>
          <Typography>Date: {item.date}</Typography>
          <Typography>Cases: {item.cases}</Typography>
          <Typography>Deaths: {item.deaths}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={fetchStateData} size="small">
            See History
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default StateList;
