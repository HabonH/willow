import React from "react";
import Card from "../UI/Card";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import SpaIcon from "@mui/icons-material/Spa";
import { Button } from "@material-ui/core";

function Coping() {
  return (
    <>
      <Card className="instructions">
        <h4>More Coping Mechanisms</h4>
        <div className="mechanisms-button">
          <Button
            style={{ backgroundColor: "#C9E4D7", color: "#FFFFFF" }}
            variant="contained"
            startIcon={<SelfImprovementIcon />}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://google.com";
            }}
          >
            Meditation
          </Button>
          <Button
            style={{ backgroundColor: "#C9E4D7", color: "#FFFFFF" }}
            variant="contained"
            startIcon={<SpaIcon />}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://google.com";
            }}
          >
            Meditation
          </Button>
        </div>
      </Card>
      <div className="dashboard-spacer"></div>
    </>
  );
}

export default Coping;
