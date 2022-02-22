import { Button } from "@mui/material";
import "./Therapist.css";

const ConfirmFull = (props) => {
  const { getConfirmFullChoice, name } = props;

  const yesClickHandler = () => {
    getConfirmFullChoice(true);
  };

  const noClickHandler = () => {
    getConfirmFullChoice(false);
  };

  return (
    <div className='full-backdrop-therapist' onClick={noClickHandler}>
      <div className='full-container-therapist'>
        <h3 className='full-text-therapist'>
          Do you want to set {name} as your primary therapist?{" "}
          <p>
            If yes, they will be able to view your journals to better assist
            you.
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
