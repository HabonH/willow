const TherapistShow = (props) => {
  const { name, phone, organization_name } = props.therapist[0];

  return (
    <div className='therapist-show'>
      <article className='therapist-details'>
        <section className='therapist-details-personal'>
          <img
            className='therapist-show-profile-pic'
            src='https://images.unsplash.com/photo-1628258475456-0224b1e4225a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhpamFifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60'
            alt='profile'
          />
        </section>
        <section className='therapist-details-contact'>
          <div className='therapist-title-content'>{name}</div>
          <div>This is where we will have a brief intro for each therapist</div>
        </section>
      </article>

      <div className='therapist-title-content '>
        <h4>Organization:</h4>
        <div className='therapist-info'>{organization_name}</div>
        <h4>Phone:</h4>
        <div className='therapist-info'>{phone}</div>
        <h4>Email:</h4>
        <div className='therapist-info'>{name}@gmail.com</div>
        <button className='button'>Book</button>
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
