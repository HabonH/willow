import { Button } from "@mui/material";
import "./TherapistDashboard.css";

const ConfirmFull = (props) => {
  const { getConfirmFullChoice } = props;

  const yesClickHandler = () => {
    getConfirmFullChoice(true);
  };

  const noClickHandler = () => {
    getConfirmFullChoice(false);
  };

  return (
    <div className='full-backdrop' onClick={noClickHandler}>
      <div className='full-container'>
        <h3 className='full-text'>
          Are you at full student capacity?{" "}
          <p>
            If yes, students will not be able to book with you until you choose
            to accept new students.
          </p>
        </h3>
        <div className='button-container-logout'>
          <Button variant='contained' color='primary' onClick={yesClickHandler}>
            Yes
          </Button>{" "}
          <Button variant='contained' color='primary' onClick={noClickHandler}>
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmFull;
