import StudentListItem from "./StudentListItem";
import ShowJournalList from "./ShowJournalList";
import { Button } from "@mui/material";
import ConfirmFull from "./ConfirmFull";
import "./Student.css";

import { useEffect, useState } from "react";
import axios from "axios";

const StudentsList = () => {
  const [show, setShow] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState([]);
  const [full, setFull] = useState(false);
  const [fullCapacity, setFullCapiacity] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    axios
      .get("http://localhost:3002/students", {
        headers: { authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setStudents(res.data);
      });
  }, []);

  const getStudent = (id) => {
    const filteredStudent = students.filter((student) => student.id === id);
    setSelectedStudent(filteredStudent);
    setShow(true);
  };

  const exitShow = () => {
    setShow(false);
  };

  const parsedStudents = students.map((student) => {
    return (
      <StudentListItem
        key={student.id}
        id={student.id}
        getStudent={getStudent}
        username={student.username}
      />
    );
  });

  const fullHandler = () => {
    setFull(true);
  };

  const getConfirmFullChoice = (choice) => {
    if (!choice) {
      return setFull(false);
    }
    confirmFullHandler();
  };

  const confirmFullHandler = () => {
    // make axios request to do a post in therapist table
    // set the full_capacity to true
    const accessToken = localStorage.getItem("accessToken");
    const data = { full: true };
    axios
      .put(
        "http://localhost:3002/therapists/full",
        {
          data,
        },
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      )
      .catch((err) => console.log(err));
    setFullCapiacity(true);
  };

  const acceptHandler = () => {
    // make axios request to do a post in therapist table
    // set the full_capacity to true
    const accessToken = localStorage.getItem("accessToken");
    const data = { full: false };
    axios
      .put(
        "http://localhost:3002/therapists/accept",
        {
          data,
        },
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      )
      .catch((err) => console.log(err));
    setFullCapiacity(false);
  };

  return (
    <>
      {full && <ConfirmFull getConfirmFullChoice={getConfirmFullChoice} />}
      {show ? (
        <ShowJournalList student={selectedStudent} exitShow={exitShow} />
      ) : (
        [
          <>
            {fullCapacity ? (
              <Button
                variant='contained'
                color='primary'
                type='submit'
                className='full-button'
                onClick={acceptHandler}
              >
                Accept Students
              </Button>
            ) : (
              <Button
                variant='contained'
                color='primary'
                type='submit'
                className='full-button'
                onClick={fullHandler}
              >
                Full
              </Button>
            )}
            <div className='student-holder'>{parsedStudents}</div>
          </>,
        ]
      )}
    </>
  );
};

export default StudentsList;
