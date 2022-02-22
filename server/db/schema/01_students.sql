-- Drop and recreate Users table

DROP TABLE IF EXISTS students CASCADE;


CREATE TABLE students (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  organization_name VARCHAR(255),
  therapist_id INTEGER DEFAULT NULL REFERENCES therapists(id) ON DELETE CASCADE,
  username VARCHAR(255)
);

