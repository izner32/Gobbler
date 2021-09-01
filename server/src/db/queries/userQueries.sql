CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    firstname VARCHAR(50), 
    lastname VARCHAR(50), 
    username VARCHAR(150) UNIQUE NOT NULL,  
    email VARCHAR(150) UNIQUE NOT NULL, 
    password VARCHAR(150) NOT NULL, 
    startingInfo VARCHAR(255) NOT NULL, 
    isVerified BOOLEAN DEFAULT FALSE,
    created TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- CREATE
INSERT INTO users () VALUES ();
-- READ by email
SELECT * FROM users WHERE email = <email_here>;
-- UPDATE by user id
UPDATE users SET  username = <new_username_here> WHERE id = <id_here>;
-- DELETE by user id
DELETE from users where id = <id_here>;