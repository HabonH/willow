
DROP TABLE IF EXISTS therapist_students CASCADE;


CREATE TABLE therapist_students (
  id SERIAL PRIMARY KEY NOT NULL,
  therapist_id INTEGER REFERENCES therapists(id) ON DELETE CASCADE,
  student_id INTEGER REFERENCES students(id) ON DELETE CASCADE
);

