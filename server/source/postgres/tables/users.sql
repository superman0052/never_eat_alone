CREATE TABLE IF NOT EXISTS users (
  id          SERIAL             PRIMARY KEY                  ,
  name        VARCHAR(200)       NOT NULL                     ,
  email       TEXT               NOT NULL                     ,
  user_name   VARCHAR(200)                                    ,
  user_status user_status_enum               DEFAULT 'PENDING',
  created_at  TIMESTAMP                      DEFAULT NOW()
);

INSERT INTO users (
  name,
  email,
  user_name,
  user_status,
  created_at
)
VALUES
  ('Shahrzad',
  'shmn942@gmail.com',
  'shahrzad',
  'PENDING',
  '2020-01-01 14:35'
  ),
  ('Aurora',
  'amazing.aurora84@gmail.com',
  'amazing_aurora',
  'BANNED',
  '2020-01-02 10:35'
  ),
  ('Alexa',
  'info@nevereatalone.net',
  'Queen',
  'DELETED',
  '2020-01-01 11:55'
  ),
  ('Elena',
  'nevereatalonetoronto@gmail.com',
  'travel_queen',
  'ACTIVE',
  '2020-03-01 09:30'
  ),
  ('Mike',
  'shahrzad@nevereatalone.net',
  'mk3622',
  'DEACTIVE',
  '2020-03-01 23:14'
  ),
  ('Sofia',
  'shahrzadmasoumnia@gmail.com',
  '',
  'ACTIVE',
  '2020-04-15 04:47:23'
  ),
  ('Alexa',
  'shahrzad@spiretrading.com',
  'foodie98',
  'PENDING',
  '2020-05-14 14:24'
  ),
  ('Sara',
  'shahrzad_masoumnia@yahoo.com',
  'peddington',
  'DEACTIVE',
  '2020-09-14 03:15'
  ),
  ('Lena',
  'shahrzad+1@nevereatalone.net',
  'lena_palma',
  'ACTIVE',
  '2021-04-10 02:47:23'
  ),
  ('John',
  'shahrzad+2@nevereatalone.net',
  'jk_fitness',
  'ACTIVE',
  '2020-12-12 04:25:13'
  ),
  ('Ken',
  'shahrzad+3@nevereatalone.net',
  'applejuice',
  'ACTIVE',
  '2020-03-01 02:47:23'
  ),
  ('Maria',
  'shahrzad+4@nevereatalone.net',
  'coffeeLover',
  'ACTIVE',
  '2020-04-15 04:47:23'
  ),
  ('Anna',
  'shahrzad+5@nevereatalone.net',
  'free2020',
  'ACTIVE',
  '2020-03-09 04:02:23'
  ),
  ('Mary Miller',
  'shahrzad+6@nevereatalone.net',
  'van_mill',
  'ACTIVE',
  '2020-03-09 04:02:23'
  ),
  ('Jess',
  'shahrzad+7@nevereatalone.net',
  'j12445',
  'ACTIVE',
  '2020-03-09 04:02:23'
  ),
  ('Rob Smith',
  'shahrzad+8@nevereatalone.net',
  'rob',
  'ACTIVE',
  '2020-03-09 04:02:23'
  ),
  ('Bobby MacDonald',
  'shahrzad+9@nevereatalone.net',
  '',
  'ACTIVE',
  '2020-03-09 04:02:23'
  ),
  ('Anna',
  'shahrzad+10@nevereatalone.net',
  'hiking_buddy',
  'ACTIVE',
  '2020-03-09 04:02:23'
  ),
  ('Alexandra Richardson',
  'shahrzad+11@nevereatalone.net',
  'chefAlex',
  'ACTIVE',
  '2020-03-09 04:02:23'
  ),
  ('Patrick Hernández',
  'shahrzad+12@nevereatalone.net',
  '',
  'ACTIVE',
  '2020-03-09 04:02:23'
  );