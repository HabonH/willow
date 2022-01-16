const JournalListItem = (props) => {
  const { id, name, getTherapist } = props;

  const clickHandler = () => {
    getTherapist(id);
  };
  return (
    <article className='card '>
      <section className='content'>
        <img
          className='therapist-profile-pic'
          src='https://images.unsplash.com/photo-1628258475456-0224b1e4225a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhpamFifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60'
          alt='profile'
        />
        <div className='title-content'>{name}</div>
      </section>
      <section>
        <button className='exit-show details button' onClick={clickHandler}>
          Details
        </button>
      </section>
    </article>
  );
};

export default JournalListItem;
