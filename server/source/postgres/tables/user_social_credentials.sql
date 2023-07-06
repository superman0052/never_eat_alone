CREATE TABLE IF NOT EXISTS user_social_credentials (
  user_id         INTEGER NOT NULL,
  provider        social_account_type_enum  NOT NULL,
  accessToken     VARCHAR(255)              NOT NULL,
  tokenExpiry     TIMESTAMP,
  email           VARCHAR(255)              NOT NULL,
  updated_at      TIMESTAMP                 DEFAULT NOW(),
  PRIMARY KEY (user_id, provider, email),
  FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO user_social_credentials (
  user_id,
  provider,
  accessToken,
  tokenExpiry,
  email
) VALUES
(1, 'GOOGLE', 'access_token1', '2024-01-01 10:00:00',
  'info+user1@nevereatalone.net'),
(2, 'FACEBOOK', 'access_token2', '2024-01-02 11:00:00',
  'info+user2@nevereatalone.net'),
(3, 'TWITTER', 'access_token3', '2024-01-03 12:00:00',
  'info+user3@nevereatalone.net'),
(4, 'INSTAGRAM', 'access_token4', '2024-01-04 13:00:00',
  'info+user4@nevereatalone.net'),
(5, 'GOOGLE', 'access_token5', '2024-01-05 14:00:00',
  'info+user5@nevereatalone.net'),
(5, 'FACEBOOK', 'access_token5', '2024-01-05 14:00:00',
  'info+user5@nevereatalone.net'),
(6, 'FACEBOOK', 'access_token6', '2024-01-06 15:00:00',
  'info+user6@nevereatalone.net'),
(7, 'TWITTER', 'access_token7', '2024-01-07 16:00:00',
  'info+user7@nevereatalone.net'),
(8, 'INSTAGRAM', 'access_token8', '2024-01-08 17:00:00',
  'info+user8@nevereatalone.net'),
(9, 'GOOGLE', 'access_token9', '2024-01-09 18:00:00',
  'info+user9@nevereatalone.net'),
(10, 'FACEBOOK', 'access_token10', '2024-01-10 19:00:00',
  'info+user10@nevereatalone.net'),
(11, 'TWITTER', 'access_token11', '2024-01-11 20:00:00',
  'info+user11@nevereatalone.net'),
(12, 'INSTAGRAM', 'access_token12', '2024-01-12 21:00:00',
  'info+user12@nevereatalone.net'),
(13, 'GOOGLE', 'access_token13', '2024-01-13 22:00:00',
  'info+user13@nevereatalone.net'),
(14, 'FACEBOOK', 'access_token14', '2024-01-14 23:00:00',
  'info+user14@nevereatalone.net'),
(15, 'TWITTER', 'access_token15', '2024-01-15 00:00:00',
  'info+user15@nevereatalone.net'),
(16, 'INSTAGRAM', 'access_token16', '2024-01-16 01:00:00',
  'info+user16@nevereatalone.net'),
(17, 'GOOGLE', 'access_token17', '2024-01-17 02:00:00',
  'info+user17@nevereatalone.net'),
(18, 'FACEBOOK', 'access_token18', '2024-01-18 03:00:00',
  'info+user18@nevereatalone.net'),
(19, 'TWITTER', 'access_token19', '2024-01-19 04:00:00',
  'info+user19@nevereatalone.net'),
(20, 'INSTAGRAM', 'access_token20', '2024-01-20 05:00:00',
  'info+user20@nevereatalone.net');
