CREATE SEQUENCE user_id_seq;
CREATE TABLE users (
	id smallint NOT NULL DEFAULT nextval('user_id_seq') PRIMARY KEY,
	name VARCHAR (50) NOT NULL,
  birth_date DATE NOT NULL,
  document VARCHAR (11) UNIQUE,
  address VARCHAR (30) ,
  fone VARCHAR (12) UNIQUE,
  marital_state VARCHAR (12),
  spouse_name VARCHAR (30),
  created_on TIMESTAMP NOT NULL
);
ALTER SEQUENCE user_id_seq OWNED BY users.id;
