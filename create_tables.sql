CREATE DATABASE nodebcrypt
    WITH 
    OWNER = postgres
    TABLESPACE = pg_default;
    
CREATE TABLE users(
	id serial PRIMARY KEY,
	first_name varchar(100),
	last_name varchar(100),
	email varchar(255) UNIQUE,
	user_password varchar(255) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

INSERT INTO users (first_name, last_name, email, user_password) 
VALUES ('Suslik', 'Ananievich', 'suslik@mail.ua', 'password') RETURNING *;

UPDATE users 
SET first_name='Anannniy', last_name='Suslokovich', updated_at = NOW() 
WHERE email = 'suslik@mail.ua';



SELECT user_password FROM users
WHERE email = ''



CREATE TABLE persons(
	id serial PRIMARY KEY,
	first_name varchar(100),
	last_name varchar(100),
	person_role varchar(10) NOT NULL,
	age int,
	email varchar(255) UNIQUE,
	university_id int,
	FOREIGN KEY (university_id) REFERENCES universities(id)
);

CREATE TABLE courses(
	id serial PRIMARY KEY,
	course_name varchar(100) NOT NULL,
	university_id int,
	FOREIGN KEY (university_id) REFERENCES universities(id)
);

CREATE TABLE persons_courses(
	person_id int,
	course_id int,
	student_mark int,
	FOREIGN KEY (person_id) REFERENCES persons(id),
	FOREIGN KEY (course_id) REFERENCES courses(id)
)



SELECT course_id FROM persons_courses
                                                    INNER JOIN persons
                                                    ON person_id = persons.id
                                                    WHERE persons.email = 'surdukov-ivan@docent.gov'
                                                    AND persons.person_role = 'professor'
                                                    INTERSECT 
                                                    SELECT course_id FROM persons_courses
                                                    INNER JOIN persons
                                                    ON person_id = persons.id
                                                    WHERE persons.email = 'pereverziev@mail.ua'
                                                    AND persons.person_role = 'student'
                                                    INTERSECT 
                                                    SELECT id FROM courses
                                                    WHERE courses.course_name = 'Astronomiya';