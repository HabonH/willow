import { useState } from "react";

const ProfileEdit = (props) => {
  const { therapist, passTherapistEditData } = props;

  const [therapistEdit, setTherapistEdit] = useState(therapist);

  const orgNameHandler = (e) => {
    passTherapistEditData("org", e.target.value);
    setTherapistEdit((prev) => {
      return { ...prev, organization_name: e.target.value };
    });
  };
  const titleHandler = (e) => {
    passTherapistEditData("title", e.target.value);
    setTherapistEdit((prev) => {
      return { ...prev, title: e.target.value };
    });
  };
  const emailHandler = (e) => {
    passTherapistEditData("email", e.target.value);
    setTherapistEdit((prev) => {
      return { ...prev, email: e.target.value };
    });
  };
  const phoneHandler = (e) => {
    passTherapistEditData("phone", e.target.value);
    setTherapistEdit((prev) => {
      return { ...prev, phone: e.target.value };
    });
  };
  const picHandler = (e) => {
    passTherapistEditData("image", e.target.value);
    setTherapistEdit((prev) => {
      return { ...prev, image: e.target.value };
    });
  };
  const descriptionHandler = (e) => {
    passTherapistEditData("desc", e.target.value);
    setTherapistEdit((prev) => {
      return { ...prev, description: e.target.value };
    });
  };

  return (
    <>
      <div className="therapist-profile-header">
        <img className="therapist-profile-picture" src={therapist.img} />
        <h3 className="therapist-profile-name">{therapist.name}</h3>
      </div>
      <div className="therapist-profile-body">
        <div className="information-row">
          <div className="information-row-left">
            <h4 className="therapist-profile-info">Organization Name:</h4>{" "}
          </div>
          <div className="information-row-right">
            <input
              className="therapist-profile-data"
              value={therapistEdit.organization_name}
              onChange={orgNameHandler}
            />
          </div>
        </div>

        <div className="information-row">
          <div className="information-row-left">
            <h4 className="therapist-profile-info">Title: </h4>{" "}
          </div>
          <div className="information-row-right">
            <input
              className="therapist-profile-data"
              value={therapistEdit.title}
              onChange={titleHandler}
            />
          </div>
        </div>

        <div className="information-row">
          <div className="information-row-left">
            <h4 className="therapist-profile-info">Email:</h4>
          </div>
          <div className="information-row-right">
            <input
              className="therapist-profile-data"
              value={therapistEdit.email}
              onChange={emailHandler}
            />
          </div>
        </div>

        <div className="information-row">
          <div className="information-row-left">
            <h4 className="therapist-profile-info">Phone Number:</h4>
          </div>
          <div className="information-row-right">
            <input
              className="therapist-profile-data"
              value={therapistEdit.phone}
              onChange={phoneHandler}
            />
          </div>
        </div>

        <div className="information-row">
          <div className="information-row-left">
            <h4 className="therapist-profile-info">Profile Picture: </h4>
          </div>
          <div className="information-row-right">
            <input
              className="therapist-profile-data"
              value={therapistEdit.img}
              onChange={picHandler}
            />
          </div>
        </div>

        <div className="information-row">
          <div className="information-row-left">
            <h4 className="therapist-profile-info">Profile Description: </h4>
          </div>
          <div className="information-row-right">
            <textarea
              className="therapist-profile-data"
              value={therapistEdit.description}
              onChange={descriptionHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
