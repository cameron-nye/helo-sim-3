DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users(
id SERIAL PRIMARY KEY,
username VARCHAR(20),
password VARCHAR(40),
picture TEXT
);

INSERT INTO users
(username, password, picture)
VALUES
('camnye', 'hellopassword', 'http://......'),
('johndoe', 'qwerty', 'http://....');