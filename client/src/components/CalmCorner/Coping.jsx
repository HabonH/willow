import React from "react";
import Card from "../UI/Card";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import SpaIcon from "@mui/icons-material/Spa";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import { Button } from "@material-ui/core";

import "./Coping.css";

function Coping() {
  return (
    <>
      <Card>
        <div className="coping-container">
          <h4>More Coping Mechanisms</h4>
          <div className="mechanisms-button">
            <Button
              color="primary"
              variant="contained"
              startIcon={<SelfImprovementIcon />}
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.youtube.com/watch?v=IN5z4gNOVYg";
              }}
              style={{ backgroundColor: "#37a993", margin: "0.5rem" }}
            >
              Meditation
            </Button>
            <Button
              color="primary"
              variant="contained"
              startIcon={<WbSunnyIcon />}
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.youtube.com/watch?v=ihwcw_ofuME";
              }}
              style={{ backgroundColor: "#37a993", margin: "0.5rem" }}
            >
              Mindfulness
            </Button>
            <Button
              color="primary"
              variant="contained"
              startIcon={<SpaIcon />}
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.youtube.com/watch?v=fTzXFPh6CPI";
              }}
              style={{ backgroundColor: "#37a993", margin: "0.5rem" }}
            >
              Yoga
            </Button>
            <Button
              color="primary"
              variant="contained"
              startIcon={<CloudIcon />}
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.thehelpfulcounselor.com/18-coping-skills-strategies-for-children-and-teens/";
              }}
              style={{ backgroundColor: "#37a993", margin: "0.5rem" }}
            >
              More
            </Button>
          </div>
        </div>
      </Card>
      <div className="dashboard-spacer"></div>
    </>
  );
}

export default Coping;
