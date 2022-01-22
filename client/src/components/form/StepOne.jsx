import { Button } from "@mui/material";

function StepOne(props) {
  const {
    nameHandler,
    organizationHandler,
    titleHandler,
    descriptionHandler,
    profileHandler,
    getView,
    error,
  } = props;

  return (
    <div className='form-container'>
      <form className='login-form'>
        {error && (
          <p className='invalid-Register'>Please fill out all fields!</p>
        )}
        <input
          placeholder='Name'
          onChange={nameHandler}
          type='name'
          className='login-input'
        />
        <input
          placeholder='Profile Picture URL'
          onChange={profileHandler}
          type='profile'
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
        <textarea
          type='description'
          placeholder='Description'
          onChange={descriptionHandler}
          className='login-input'
        />
        <Button variant='contained' color='primary' onClick={getView}>
          Continue
        </Button>
      </form>
    </div>
  );
}

export default StepOne;
