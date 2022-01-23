import willowLogo from "../Homepage/assets/willow-logo.svg";
import "./Form.css";

const Nav = (props) => {
  const { showStudent, showTherapist } = props;
  return (
    <section>
      <nav className='form-navbar'>
        <div className='logo-container'>
          <img src={willowLogo} className='willow-logo' />
        </div>
      </nav>
      <div className='form-sections'>
        <h3 className='first-label' onClick={showStudent}>
          Student
        </h3>
        <h3 className='second-label' onClick={showTherapist}>
          Therapist
        </h3>
      </div>
    </section>
  );
};

export default Nav;
