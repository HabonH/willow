import LinkWrapper from "./LinkWrapper";

const TherapistShow = (props) => {
  const { name, phone, email, img, description, organization_name } =
    props.therapist[0];
  const external_link = "https://calendly.com/final-therapist/therapy-sessions";

  return (
    <div className='therapist-show'>
      <article className='therapist-details'>
        <section className='therapist-details-personal'>
          <img className='therapist-show-profile-pic' src={img} alt='profile' />
        </section>
        <section className='therapist-details'>
          <div className='therapist-title-content'>
            <h4>{name}</h4>
            <p className='therapist-info'>{description}</p>
          </div>
        </section>
      </article>

      <div className='therapist-title-content '>
        <h4>Organization:</h4>
        <div className='therapist-info'>
          <p>{organization_name}</p>
        </div>
        <h4>Phone:</h4>
        <div className='therapist-info'>
          <p>{phone}</p>
        </div>
        <h4>Email:</h4>
        <div className='therapist-info'>
          <p>{email}</p>
        </div>
        {/* <a
          href='https://calendly.com/final-therapist/therapy-sessions'
          target='_blank'
          rel='noopener noreferrer'
          class='button'
        >
          Book
        </a> */}
        <LinkWrapper link={external_link} />
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
