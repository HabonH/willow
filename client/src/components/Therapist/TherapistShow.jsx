import { useState } from "react";
import { Button } from "@mui/material";
// import LinkWrapper from "./LinkWrapper";

const TherapistShow = (props) => {
  const { name, phone, email, img, description, organization_name } =
    props.therapist[0];
  const [open, setOpen] = useState(false);
  const [full, setFull] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };
  const link = "https://calendly.com/final-therapist/therapy-sessions";

  return (
    <>
      {open ? (
        <div className='therapist-show'>
          <div className='close-button' onClick={clickHandler}></div>
          <iframe
            seamless
            src={link}
            style={{ width: "100%", height: "800px", border: "none" }}
          />
        </div>
      ) : (
        <div className='therapist-show'>
          <div
            className='close-button'
            onClick={() => {
              return props.exitShow();
            }}
          ></div>
          <article className='therapist-details'>
            <section className='therapist-details'>
              <img
                className='therapist-show-profile-pic'
                src={img}
                alt='profile'
              />
              <div className='therapist-title-content'>
                <h3>{name}</h3>
                <p className='therapist-info'>{description}</p>
              </div>
            </section>
          </article>

          <div className='therapist-detail-content '>
            <h4>Organization:</h4>
            <div className='therapist-details-personal'>
              <p>{organization_name}</p>
            </div>
            <h4>Phone:</h4>
            <div className='therapist-details-personal'>
              <p>{phone}</p>
            </div>
            <h4>Email:</h4>
            <div className='therapist-details-personal'>
              <p>{email}</p>
            </div>
          </div>
          <div>
            {full ? (
              <Button
                variant='contained'
                color='secondary'
                onClick={clickHandler}
              >
                <h4>Full</h4>
              </Button>
            ) : (
              <Button
                variant='contained'
                color='primary'
                onClick={clickHandler}
              >
                <h4>Book</h4>
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TherapistShow;
