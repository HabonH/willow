const TherapistShow = (props) => {
  const { name, phone, email, img, description, organization_name } =
    props.therapist[0];

  return (
    <div className='therapist-show'>
      <article className='therapist-details'>
        <section className='therapist-details-personal'>
          <img className='therapist-show-profile-pic' src={img} alt='profile' />
        </section>
        <section className='therapist-details-contact'>
          <div className='therapist-title-content'>{name}</div>
          <div>{description}</div>
        </section>
      </article>

      <div className='therapist-title-content '>
        <h4>Organization:</h4>
        <div className='therapist-info'>{organization_name}</div>
        <h4>Phone:</h4>
        <div className='therapist-info'>{phone}</div>
        <h4>Email:</h4>
        <div className='therapist-info'>{email}</div>
        <a
          href='https://calendly.com/final-therapist/therapy-sessions'
          class='button'
        >
          Book
        </a>
        {/* <button className='button'>Book</button> */}
      </div>

      <button
        className='exit-show'
        onClick={() => {
          return props.exitShow();
        }}
      >
        x
      </button>
    </div>
  );
};

export default TherapistShow;
