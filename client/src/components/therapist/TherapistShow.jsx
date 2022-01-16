const TherapistShow = (props) => {
  const { name, phone, organization_name } = props.therapist[0];

  return (
    <div className='therapist-show'>
      <article className='content'>
        <section className='row-container'>
          <div className='title-content'>{name}</div>
          <div> we also need an image</div>
          <div>This is where we will have a brief intro for each therapist</div>
        </section>
        <section className='row-container'>
          <div className='title-content'>{organization_name}</div>
          <div>{phone}</div>
          <div>`{name}@gmail.com`</div>
        </section>
      </article>
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
