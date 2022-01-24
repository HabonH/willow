import StudentListItem from "./StudentListItem";
import ShowJournalList from "./ShowJournalList";
import { Button } from "@mui/material";
import "./Student.css";

import { useEffect, useState } from "react";
import axios from "axios";

const StudentsList = () => {
  const [show, setShow] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState([]);

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

  return (
    <>
      {show ? (
        <ShowJournalList student={selectedStudent} exitShow={exitShow} />
      ) : (
        <>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className='full-button'
          >
            Full
          </Button>
          <div className='student-holder'>{parsedStudents}</div>
        </>
      )}
    </>
  );
};

export default StudentsList;
