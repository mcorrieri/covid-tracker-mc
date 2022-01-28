import React from "react";
import Card from "@mui/material/Card";
import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function StateList({ item }) {
  // const { state, cases, date, deaths } = item;
  const navigate = useNavigate();

  let cases = item.cases.toLocaleString();
  let deaths = item.deaths.toLocaleString();

  const handleHistory = () => {
    navigate("/state");
  };

  return (
    <div className="cards">
      <Card className="card" sx={{ maxWidth: 275 }} variant="outlined">
        <CardContent>
          <Typography color={"purple"} sx={{ fontSize: 20 }}>
            {item.state}
          </Typography>
          <Typography>Date: {item.date}</Typography>
          <Typography>Cases: {cases}</Typography>
          <Typography>Deaths: {deaths}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleHistory} size="small">
            See History
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default StateList;
