DROP TABLE IF EXISTS todo ;
DROP TABLE IF EXISTS users;

CREATE TABLE todo (
  id INT PRIMARY KEY,
  TITLE VARCHAR(250) NOT NULL,
  IS_DONE VARCHAR(250) NOT NULL,
  DESCRIPTION VARCHAR(250)
);

CREATE TABLE users (
   id INT PRIMARY KEY,
   FIRST_NAME VARCHAR(250) NOT NULL,
   LAST_NAME VARCHAR(250) NOT NULL,
   EMAIL VARCHAR(250) NOT NULL
);

INSERT INTO todo (ID, TITLE, IS_DONE, DESCRIPTION) VALUES
  (1, 'Faire une application Java/Angular', false,'Faire un fork pour la base config'),
  (2, 'Passer l''entretien technique', false, NULL),
  (3, 'Faire les courses', true, 'Gruyère, jus de citron');

INSERT INTO users (ID, FIRST_NAME, LAST_NAME, EMAIL) VALUES
  (1, 'first', 'last 1', 'abc1@gmail.com'),
  (2, 'first', 'last 2', 'abc2@gmail.com'),
  (3, 'first', 'last 3', 'abc3@gmail.com');