CREATE TABLE IF NOT EXISTS dining_events (
  id                 SERIAL            PRIMARY KEY                          ,
  color_code         VARCHAR(100)                                           ,
  fee                NUMERIC(10, 2)                DEFAULT 5.00             ,
  cover_image_src    TEXT                                                   ,
  title              VARCHAR(255)                                           ,
  restaurant_id      INTEGER                                                ,
  dress_code         dress_code_enum               DEFAULT 'BUSINESS_CASUAL',
  seating            seating_enum                  DEFAULT 'STANDARD'       ,
  location_id        INTEGER                                                ,
  reservation_name   VARCHAR(255)                                           ,
  start_at           TIMESTAMP                                              ,
  end_at             TIMESTAMP                                              ,
  total_capacity     INTEGER                       DEFAULT 6                ,
  description        VARCHAR(4000)                                          ,
  rsvp_open_at       TIMESTAMP                                              ,
  rsvp_close_at      TIMESTAMP                                              ,
  status             event_status_enum             DEFAULT 'DRAFT'          ,
  type               event_type_enum               DEFAULT 'PUBLIC'         ,
  created_at         TIMESTAMP                     DEFAULT NOW()            ,
  updated_at         TIMESTAMP                     DEFAULT NOW()
);

INSERT INTO dining_events (
  color_code,
  fee,
  cover_image_src,
  title,
  restaurant_id,
  dress_code,
  seating,
  location_id,
  reservation_name,
  start_at,
  end_at,
  total_capacity,
  description,
  rsvp_open_at,
  rsvp_close_at,
  status,
  type,
  created_at,
  updated_at
)
VALUES
  ('hsva(9, 67%, 100%, 1)', 5.00, 'resources/images/cover_1.jpg',
  'Let''s Go To Darbar.', 1, 'CASUAL', 'BAR', 1, 'Sheryl Miller',
  '2023-04-01 18:45', '2023-04-01 20:45', 10,
  'This is the best Persian grill restaurant.', '2023-01-20 18:45',
  '2023-05-01 18:45', 'PUBLISHED', 'PUBLIC', '2022-03-01 10:45',
  '2023-02-01 11:45'),
  ('hsva(238, 67%, 100%, 1)', 6.00, 'resources/images/cover_2.jpg',
  'Let''s Go To Alobar.', 2, 'FORMAL', 'PATIO', 2, 'NEA Group',
  '2024-04-29 19:15', '2024-04-29 21:15', 8,
  'This is the best Modern restaurant.', '2021-04-28 19:15', '2021-04-29 19:15', 'DRAFT', 'PRIVATE',
  '2021-04-01 11:15', '2021-04-01 11:15'),
  ('Let''s Go To JaBistro.', '2021-06-01 19:30', '2021-06-01 21:30',
  'This is the best Sushi restaurant.', 3, 'Reservation under the name Sheryl',
  20, 3, 3, '2021-05-20 19:30', '2021-06-01 19:00', 'PUBLISHED', 'PUBLIC',
  '2020-05-21 01:55', '2020-05-21 01:55', 'hsva(324, 66%, 75%, 1)'),
  ('Let''s Go To Sassafraz.', '2021-04-30 20:00', '2021-04-30 22:00',
  'This is the best French restaurant.', 4, 'Reservation under the name Sheryl',
  16, 1, 1, '2021-04-12 20:00', '2021-04-30 20:00', 'PUBLISHED', 'PRIVATE',
  '2021-04-11 06:10', '2020-04-16 06:10', 'hsva(93, 67%, 80%, 1)'),
  ('Let''s Go To Jacob''s.', '2021-07-22 19:00',
  '2021-07-22 21:00', 'This is the best Steakhouse.', 5,
  'Reservation under the name Sheryl', 22, 1, 0, '2021-07-10 19:00',
  '2021-07-22 19:00', 'CANCELLED', 'PUBLIC', '2021-04-19 16:35',
  '2021-07-19 16:35', 'hsva(52, 67%, 75%, 1)'),
  ('Let''s Go To Jacob''s.', '2021-07-22 19:00', '2021-07-22 21:00',
  'This is the best Steakhouse.', 5, 'Reservation under the name Sheryl', 22, 1,
  1, '2021-06-20 19:00', '2021-07-21 19:00', 'PUBLISHED', 'PUBLIC',
  '2021-06-09 16:35', '2021-07-19 16:35', 'hsva(170, 67%, 83%, 1)'),
  ('Let''s Go To Shunoko.', '2021-08-22 19:00', '2021-08-22 21:00',
  'This is the best Sushi place.', 6, 'Reservation under the name Kevin', 20, 1,
  1, '2021-06-20 19:00', '2021-08-21 19:00', 'PUBLISHED', 'PUBLIC',
  '2021-04-09 16:35', '2021-04-19 16:35', 'hsva(170, 67%, 83%, 1)'),
  ('Let''s Go To Darbar.', '2021-05-11 18:45', '2021-05-11 20:45',
  'This is the best Persian grill restaurant.', 1,
  'Reservation under the name Sheryl', 10, 4, 1, '2021-04-20 18:45',
  '2021-05-01 18:45', 'PUBLISHED', 'PUBLIC', '2021-03-01 10:45',
  '2021-04-01 10:45', 'hsva(196, 67%, 78%, 1)'),
  ('Let''s Go To Grazie.', '2021-05-01 18:45', '2021-05-01 20:45',
  'This is the best Italian restaurant.', 9,
  'Reservation under the name Sheryl', 10, 4, 1, '2021-04-20 18:45',
  '2021-05-01 18:45', 'PUBLISHED', 'PUBLIC', '2021-03-01 10:45',
  '2021-04-01 10:45', 'hsva(343, 67%, 100%, 1)'),
  ('Share dinner table.', '2022-05-01 18:45', '2022-05-01 20:45',
  'Italian restaurant', 11, 'Sheryl M for reservation', 15, 5, 1,
  '2022-04-20 18:45', '2022-05-01 18:45', 'PUBLISHED', 'PUBLIC',
  '2022-03-01 10:45', '2022-04-01 10:45', 'hsva(0, 67%, 83%, 1)'),
  ('This is my birthday!', '2022-05-01 18:45', '2022-05-01 20:45',
  'Boat and Seafood', 10, 'Just say Meetup', 20, 2, 2, '2022-04-20 18:45',
  '2022-05-01 18:45', 'PUBLISHED', 'PUBLIC', '2022-03-01 10:45',
  '2022-04-01 10:45', 'hsva(324, 61%, 52%, 1)'),
  ('Can you believe that Covid is over?!', '2022-05-01 18:45',
  '2022-05-01 20:45', 'Greek food', 5, '', 30, 6, 3, '2022-04-20 18:45',
  '2022-05-01 18:45', 'PUBLISHED', 'PUBLIC', '2022-03-01 10:45',
  '2022-04-01 10:45', 'hsva(94, 75%, 69%, 1)'),
  ('Brunch by the pool', '2022-05-01 18:45', '2022-05-01 20:45', 'Grat view',
  12, '', 6, 6, 3, '2022-04-20 18:45', '2022-05-01 18:45', 'PUBLISHED',
  'PUBLIC', '2022-03-01 10:45', '2022-04-01 10:45', 'hsva(238, 67%, 100%, 1)'),
  ('Lapinu is the best', '2022-05-01 18:45',
  '2022-05-01 20:45', 'French food', 6, '', 10, 6, 3, '2022-04-20 18:45',
  '2022-05-01 18:45', 'PUBLISHED', 'PUBLIC', '2022-03-01 10:45',
  '2022-04-01 10:45', 'hsva(9, 67%, 100%, 1)'),
  ('Cocktails on a rooftop bar', '2022-05-01 18:45', '2022-05-01 20:45',
  'Check out their menu.', 7, '', 12, 6, 3, '2022-04-20 18:45',
  '2022-05-01 18:45', 'PUBLISHED', 'PUBLIC', '2022-03-01 10:45',
  '2022-04-01 10:45', 'hsva(19, 67%, 100%, 1)'),
  ('Lunch at Financial district', '2022-06-01 18:45', '2022-06-01 20:45',
  'Read the description.', 12, '', 25, 6, 3, '2022-04-20 18:45',
  '2022-06-01 18:45', 'PUBLISHED', 'PUBLIC', '2022-03-01 10:45',
  '2022-04-01 10:45', 'hsva(190, 67%, 100%, 1)'),
  ('New restaurant on Woodbine beach', '2022-07-01 18:45',
  '2022-07-01 20:45', '', 13, '', 20, 6, 3, '2022-06-20 18:45',
  '2022-07-01 18:45', 'PUBLISHED', 'PUBLIC', '2022-03-01 10:45',
  '2022-06-01 10:45', 'hsva(160, 67%, 95%, 1)'),
  ('Fun events', '2022-05-01 18:45', '2022-08-01 20:45', 'Gathering', 14, '',
  7, 6, 3, '2022-04-15 18:45', '2022-08-01 18:45', 'PUBLISHED', 'PUBLIC',
  '2022-03-01 10:45', '2022-04-01 10:45', 'hsva(225, 67%, 80%, 1)'),
  ('Steak and oyster night', '2022-08-01 18:45', '2022-09-01 20:45',
  'Great food', 14, '', 15, 6, 3, '2022-04-20 18:45', '2022-09-01 18:45',
  'PUBLISHED', 'PUBLIC', '2022-03-01 10:45', '2022-04-01 10:45',
  'hsva(68, 67%, 92%, 1)');
