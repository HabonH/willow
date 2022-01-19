import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../ThemeMUI/Theme";

const JournalListItem = (props) => {
  const { id, name, img, getTherapist } = props;

  const clickHandler = () => {
    getTherapist(id);
  };
  return (
    <ThemeProvider theme={Theme}>
      <article className='therapist-card'>
        <div className='journal-plus'>
          <img className='journal-choice' src={img} alt='profile' />
        </div>
        <section className='therapist-content'>
          <div className='therapist-title-content'>
            <h3>{name}</h3>
          </div>

          <Button
            variant='contained'
            color='secondary'
            className='right'
            onClick={clickHandler}
          >
            <h4>Details</h4>
          </Button>
        </section>
      </article>
    </ThemeProvider>
  );
};

export default JournalListItem;
