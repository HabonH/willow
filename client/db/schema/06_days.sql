-- Drop and recreate days table

DROP TABLE IF EXISTS days CASCADE;


CREATE TABLE days (
  id SERIAL PRIMARY KEY NOT NULL,
  day VARCHAR(255),
  habit_id INTEGER REFERENCES habits(id) ON DELETE CASCADE
);

