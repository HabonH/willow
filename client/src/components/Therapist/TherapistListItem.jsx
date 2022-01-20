import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../ThemeMUI/Theme";

const JournalListItem = (props) => {
  const { id, name, img, title, getTherapist } = props;

  const clickHandler = () => {
    getTherapist(id);
  };
  return (
    <ThemeProvider theme={Theme}>
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
            color='secondary'
            className='button-right'
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
