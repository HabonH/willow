import Button from "@mui/material/Button";

const JournalListItem = (props) => {
  const { id, name, img, title, getTherapist } = props;

  const clickHandler = () => {
    getTherapist(id);
  };
  return (
    <article className='therapist-card'>
      <div className='therapist-plus'>
        <img className='therapist-choice' src={img} alt='profile' />
      </div>
      <section className='therapist-content'>
        <div className='therapist-title-content'>
          <h3>{name}</h3>
          <p className=''>{title}</p>
        </div>

        <Button
          variant='contained'
          color='primary'
          className='button-right'
          onClick={clickHandler}
        >
          <h4>Details</h4>
        </Button>
      </section>
    </article>
  );
};

export default JournalListItem;
