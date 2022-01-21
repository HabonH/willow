-- Drop and recreate therapists table

DROP TABLE IF EXISTS therapists CASCADE;


CREATE TABLE therapists (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  img VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  description VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL, 
  organization_name VARCHAR(255)
);

