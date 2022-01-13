DROP TABLE IF EXISTS emojis CASCADE;

CREATE TABLE emojis (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  icon VARCHAR(255),
  description TEXT,
  affirmation TEXT
);
