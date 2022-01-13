-- Drop and recreate habit_images table

DROP TABLE IF EXISTS habit_images CASCADE;

CREATE TABLE habit_images (
  id SERIAL PRIMARY KEY NOT NULL,
  image TEXT NOT NULL
  );