const JournalListItem = (props) => {
  const { id, name, getTherapist } = props;

  const clickHandler = () => {
    getTherapist(id);
  };
  return (
    <article className='content'>
      <section className='row-container'>
        <div className='title-content'>{name}</div>
        <div> we also need an image</div>
      </section>
      <section className='row-container'>
        <button className='exit-show' onClick={clickHandler}>
          Details
        </button>
      </section>
    </article>
  );
};

export default JournalListItem;
