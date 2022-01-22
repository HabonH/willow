import Button from "@mui/material/Button";

function TherapistRegister(props) {
  const {
    saveTherapist,
    emailHandler,
    passHandler,
    nameHandler,
    organizationHandler,
    titleHandler,
    descriptionHandler,
    profileHandler,
    phoneHandler,
  } = props;

  return (
    <div className='form-container'>
      <form onSubmit={saveTherapist} className='login-form'>
        <input
          placeholder='Name'
          onChange={nameHandler}
          type='name'
          className='login-input'
        />
        <input
          placeholder='Organization'
          onChange={organizationHandler}
          type='organization'
          className='login-input'
        />
        <input
          placeholder='Title'
          onChange={titleHandler}
          type='title'
          className='login-input'
        />
        <input
          placeholder='Description'
          onChange={descriptionHandler}
          type='description'
          className='login-input'
        />
        <input
          placeholder='Profile Picture URL'
          onChange={profileHandler}
          type='profile'
          className='login-input'
        />
        <input
          placeholder='Phone'
          onChange={phoneHandler}
          type='phone'
          className='login-input'
        />
        <input
          placeholder='Email'
          onChange={emailHandler}
          type='email'
          className='login-input'
        />
        <input
          placeholder='Password'
          onChange={passHandler}
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

export default TherapistRegister;
