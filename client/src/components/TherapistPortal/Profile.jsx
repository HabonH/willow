import { Button } from "@mui/material";
import { useState } from "react";

import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ProfileInfo from "./ProfileInfo";
import ProfileEdit from "./ProfileEdit";

const Profile = (props) => {
  const { therapist, getTherapistEditData, save } = props;

  const [edit, setEdit] = useState(false);

  const editClickHandler = () => {
    setEdit(true);
  };

  const saveClickHandler = () => {
    save();
    setEdit(false);
  };

  const passTherapistEditData = (type, data) => {
    getTherapistEditData(type, data);
  };

  return (
    <>
      {!edit ? (
        <ProfileInfo therapist={therapist} />
      ) : (
        <ProfileEdit
          therapist={therapist}
          passTherapistEditData={passTherapistEditData}
        />
      )}

      {!edit ? (
        <Button
          variant="contained"
          color="primary"
          style={{ width: "100%" }}
          onClick={editClickHandler}
        >
          <ModeEditIcon
            color="disabled"
            fontSize="small"
            className="edit-icon"
            style={{ marginRight: "0.25rem" }}
          />
          Edit
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          style={{ width: "100%" }}
          onClick={saveClickHandler}
        >
          <CheckBoxOutlinedIcon
            color="disabled"
            fontSize="small"
            className="edit-icon"
            style={{ marginRight: "0.25rem" }}
          />
          Save
        </Button>
      )}
    </>
  );
};

export default Profile;
