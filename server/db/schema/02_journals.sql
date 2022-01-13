-- Drop and recreate Journals table

DROP TABLE IF EXISTS journals CASCADE;


CREATE TABLE journals (
  id SERIAL PRIMARY KEY NOT NULL,
  scale INTEGER NOT NULL,
  title VARCHAR(255),
  entry TEXT,
  date DATE DEFAULT CURRENT_DATE,
  student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
);

