-- Drop and recreate habits table

DROP TABLE IF EXISTS habits CASCADE;


CREATE TABLE habits (
  id SERIAL PRIMARY KEY NOT NULL,
  habit VARCHAR(255) NOT NULL,
  student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
  habit_image_id INTEGER REFERENCES habit_images(id) ON DELETE CASCADE
);

