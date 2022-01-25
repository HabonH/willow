const Header = (props) => {
  const { therapistName } = props;
  return (
    <>
      {therapistName ? (
        <div className='therapist-header'>
          <article className='name-text'>
            <h1>{therapistName}</h1>
            <p> is your primary therapist </p>
          </article>
        </div>
      ) : (
        <div className='therapist-header'>
          <article className='header-text'>
            <h4>To book an appointment:</h4>
            <p>
              <span>1.</span> Choose the therpaist you'd like to book with.
            </p>
            <p>
              <span>2.</span> Click the 'Book' button.
            </p>
            <p>
              <span>3.</span> In the new window choose a day and time slot.
            </p>
          </article>
        </div>
      )}
    </>
  );
};

export default Header;
