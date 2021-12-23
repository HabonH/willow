-- Drop and recreate Users table

DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  organization_name VARCHAR(255) NOT NULL,
  is_therapist BOOLEAN NOT NULL
);

