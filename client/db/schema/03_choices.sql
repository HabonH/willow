-- Drop and recreate choicestable

DROP TABLE IF EXISTS choices CASCADE;


CREATE TABLE choices(
  id SERIAL PRIMARY KEY NOT NULL,
  label VARCHAR(255) NOT NULL,
  image TEXT
);