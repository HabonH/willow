import Button from "@mui/material/Button";

function StudentListItem(props) {
  const { id, username, getStudent } = props;
  const profile = "https://imgur.com/u5CoNBr.png";
  const clickHandler = () => {
    getStudent(id);
  };
  return (
    <article className='student-card'>
      <div className='student-plus'>
        <img className='student-choice' src={profile} alt='profile' />
      </div>
      <section className='student-content'>
        <div className='student-title-content'>
          <h3>{username}</h3>
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
}

export default StudentListItem;
