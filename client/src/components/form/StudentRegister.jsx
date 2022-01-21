import Button from "@mui/material/Button";

function StudentRegister(props) {
  const { studentInfohandler } = props;
  // const { studentInfohandler, emailHandler, passHandler } = props;

  return (
    <div className='form-container'>
      <form onSubmit={studentInfohandler} className='login-form'>
        <input
          placeholder='Email'
          // onChange={emailHandler}
          type='email'
          className='login-input'
        />
        <input
          placeholder='Password'
          // onChange={passHandler}
          type='password'
          className='login-input'
        />
        <Button variant='contained' color='primary' type='submit'>
          Register
        </Button>
      </form>
    </div>
  );
}

export default StudentRegister;
