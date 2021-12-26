CREATE DATABASE error_class
    WITH 
    OWNER = postgres
    TABLESPACE = pg_default;

CREATE TABLE streets(
	id serial PRIMARY KEY,
	name text NOT NULL
);

insert into streets(name)
values ('perelazina'),
	   ('veselaya'),
	   ('nehodituda'),
	   ('klasnaya'),
	   ('rechnaya');
	   
