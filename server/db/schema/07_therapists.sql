-- Drop and recreate therapists table

DROP TABLE IF EXISTS therapists CASCADE;


CREATE TABLE therapists (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  img VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  description TEXT NOT NULL,
  title VARCHAR(255) NOT NULL, 
  organization_name VARCHAR(255),
  full_capacity BOOLEAN DEFAULT FALSE
);

