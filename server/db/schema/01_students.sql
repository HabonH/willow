-- Drop and recreate Users table

DROP TABLE IF EXISTS students CASCADE;


CREATE TABLE students (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  organization_name VARCHAR(255),
  username VARCHAR(255)
);

