-- Drop and recreate therapists table

DROP TABLE IF EXISTS therapists CASCADE;


CREATE TABLE therapists (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  students_id INTEGER  --list of students for each therapist
);

