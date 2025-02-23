CREATE TABLE IF NOT EXISTS user_credentials (
  user_id       INTEGER   PRIMARY KEY,
  hashed_pass   TEXT      NOT NULL,
  updated_at    TIMESTAMP WITH TIME ZONE       DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE user_credentials
  ADD CONSTRAINT fk_user_credentials_users
  FOREIGN KEY (user_id)
  REFERENCES users (id)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

INSERT INTO user_credentials (
  user_id,
  hashed_pass
) VALUES
(1, '4fc82b26aecb47d2868c4efbe3581732a3e7cbcc6c2efb32062c08170a05eeb8'),
(2, '6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918'),
(3, '3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278'),
(4, '8527a891e224136950ff32ca212b45bc93f69fbb801c3b1ebedac52775f99e61'),
(5, '1c6f8afb2f9d9836aa59d7fadea25a3176698a9347ac848017e7f5a6bd79a85d'),
(24, '710c9fd74f8e80b776d84a88007efe2c8751b1d56bd437c0d9f6d4e83a636ebe'),
(21, 'f9d1ed8adac889188f20cc193f1493c5572187e58fd245927af613e392b7936c'),
(23, '853d6f255d8297c75379c3a7f86891d6ef991ee9c8da379641ce6b89b74e7419'),
(25, '61a8b28f7e93e07bff5b49b0589cbcc718a98fd730431cace3d6886b4ab73326'),
(26, '086ab0ca7f64d10087e5d7a65abad59265051033f75e1bb31ad6fa1aef260ce6'),
(27, 'e559d4785372d5673681033f1d708a2c8c6ca4d3831da6291394bd12dcb5c7b3');
