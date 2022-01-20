import React from "react";
import Card from "../UI/Card";

function Coping() {
  return (
    <>
      <Card className="instructions">
        <h4>More Coping Mechanisms</h4>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "http://google.com";
          }}
        >
          {" "}
          Meditation
        </button>
      </Card>
      <div className="dashboard-spacer"></div>
    </>
  );
}

export default Coping;
