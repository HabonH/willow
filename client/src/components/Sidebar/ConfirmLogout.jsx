const ConfirmLogout = (props) => {
  const { getConfirmLogoutChoice } = props;

  const yesClickHandler = () => {
    getConfirmLogoutChoice(true);
  };

  const noClickHandler = () => {
    getConfirmLogoutChoice(false);
  };

  return (
    <div className="logout-backdrop" onClick={noClickHandler}>
      <div className="logout-container">
        <h3 className="logout-text">Are you sure you want to logout?</h3>
        <div className="button-container-logout">
          <button onClick={yesClickHandler}>Yes</button>{" "}
          <button onClick={noClickHandler}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogout;
