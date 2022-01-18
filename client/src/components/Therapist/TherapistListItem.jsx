const JournalListItem = (props) => {
  const { id, name, img, getTherapist } = props;

  const clickHandler = () => {
    getTherapist(id);
  };
  return (
    <article className='therapist-card '>
      <section className='therapist-content'>
        <img className='therapist-profile-pic' src={img} alt='profile' />
        <div className='therapist-title-content'>
          <h3>{name}</h3>
        </div>
      </section>
      <section>
        <button className='exit-show details button' onClick={clickHandler}>
          <h4>Details</h4>
        </button>
      </section>
    </article>
  );
};

export default JournalListItem;
