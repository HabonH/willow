DROP TABLE IF EXISTS calming_images CASCADE;

CREATE TABLE calming_images (
  id SERIAL PRIMARY KEY NOT NULL,
  img TEXT,
  affirmations VARCHAR(255)
);
