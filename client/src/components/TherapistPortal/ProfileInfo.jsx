const ProfileInfo = (props) => {
  const { therapist } = props;
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
            <p className="therapist-profile-data">
              {therapist.organization_name}
            </p>
          </div>
        </div>

        <div className="information-row">
          <div className="information-row-left">
            <h4 className="therapist-profile-info">Title: </h4>{" "}
          </div>
          <div className="information-row-right">
            <p className="therapist-profile-data">{therapist.title}</p>
          </div>
        </div>

        <div className="information-row">
          <div className="information-row-left">
            <h4 className="therapist-profile-info">Email:</h4>
          </div>
          <div className="information-row-right">
            <p className="therapist-profile-data">{therapist.email}</p>
          </div>
        </div>

        <div className="information-row">
          <div className="information-row-left">
            <h4 className="therapist-profile-info">Phone Number:</h4>
          </div>
          <div className="information-row-right">
            <p className="therapist-profile-data">{therapist.phone}</p>
          </div>
        </div>

        <div className="information-row">
          <div className="information-row-left">
            <h4 className="therapist-profile-info">Profile Picture: </h4>
          </div>
          <div className="information-row-right">
            <p className="therapist-profile-data">{therapist.img}</p>
          </div>
        </div>

        <div className="information-row">
          <div className="information-row-left">
            <h4 className="therapist-profile-info">Profile Description: </h4>
          </div>
          <div className="information-row-right">
            <p className="therapist-profile-data">{therapist.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
