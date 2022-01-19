import LinkWrapper from "./LinkWrapper";

const TherapistShow = (props) => {
  const { name, phone, email, img, description, organization_name } =
    props.therapist[0];
  const external_link = "https://calendly.com/final-therapist/therapy-sessions";

  return (
    <div className='therapist-show'>
      <div
        className='close-button'
        onClick={() => {
          return props.exitShow();
        }}
      ></div>
      <article className='therapist-details'>
        <section className='therapist-details'>
          <img className='therapist-show-profile-pic' src={img} alt='profile' />
          <div className='therapist-title-content'>
            <h4>{name}</h4>
            <p className='therapist-info'>{description}</p>
          </div>
        </section>
      </article>

      <div className='therapist-title-content '>
        <h4>Organization:</h4>
        <div className='therapist-details-personal'>
          <p>{organization_name}</p>
        </div>
        <h4>Phone:</h4>
        <div className='therapist-details-personal'>
          <p>{phone}</p>
        </div>
        <h4>Email:</h4>
        <div className='therapist-details-personal'>
          <p>{email}</p>
        </div>
        <LinkWrapper link={external_link} />
      </div>
    </div>
  );
};

export default TherapistShow;
