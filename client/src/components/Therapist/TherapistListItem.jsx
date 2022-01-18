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
      <article className='therapist-card '>
        <section className='therapist-content'>
          <img className='therapist-profile-pic' src={img} alt='profile' />
          <div className='therapist-title-content'>
            <h3>{name}</h3>
          </div>
        </section>
        <section>
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
