const JournalListItem = (props) => {
  const { id, name, phone, organization_name, getTherapist } = props;

  const clickHandler = () => {
    getTherapist(id);
  };
  return (
    <article className='content' onClick={clickHandler}>
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
  );
};

export default JournalListItem;
