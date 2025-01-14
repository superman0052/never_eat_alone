CREATE TABLE IF NOT EXISTS user_profile_images (
  user_id       INTEGER                        NOT NULL UNIQUE,
  src           TEXT                           NOT NULL,
  created_at    TIMESTAMP WITH TIME ZONE       DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP WITH TIME ZONE       DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE user_profile_images
  ADD CONSTRAINT fk_user_profile_images_users
  FOREIGN KEY (user_id)
  REFERENCES users (id)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

INSERT INTO user_profile_images (
  user_id,
  src
) VALUES
(1, '/resources/images/profile1.jpeg'),
(2, '/resources/images/profile2.jpeg'),
(3, '/resources/images/profile3.jpeg'),
(4, '/resources/images/profile4.jpeg'),
(5, '/resources/images/profile5.jpeg'),
(6, '/resources/images/profile6.jpeg'),
(7, '/resources/images/profile7.jpeg'),
(8, '/resources/images/profile8.jpeg'),
(9, '/resources/images/profile9.jpeg'),
(10, '/resources/images/profileguy10.jpeg'),
(11, '/resources/images/profileguy1.jpeg'),
(12, '/resources/avatars/profile-image-0.svg'),
(13, '/resources/avatars/profile-image-1.svg'),
(14, '/resources/avatars/profile-image-2.svg'),
(15, '/resources/avatars/profile-image-3.svg'),
(16, '/resources/avatars/profile-image-4.svg'),
(17, '/resources/avatars/profile-image-5.svg'),
(18, '/resources/avatars/profile-image-6.svg'),
(19, '/resources/avatars/profile-image-7.svg'),
(20, '/resources/avatars/profile-image-8.svg'),
(21, '/resources/images/profileguy8.jpeg'
);
