import * as fs from 'fs';
import * as path from 'path';
import { Pool } from 'pg';
import { UserProfileImage
} from '../../../../client/library/source/definitions';

/** UserProfileImage related database manipulations class. */
export class UserProfileImageDatabase {
  /** @param pool - The pool connection to the postgres database. */
  constructor(pool: Pool) {
    this.pool = pool;
  }

  /** Returns the user profile image based on the user id.
   * @param userId - User id.
   */
  public loadProfileImageByUserId = async (userId: number):
      Promise<UserProfileImage> => {
    const result = await this.pool.query('SELECT * FROM user_profile_images \
      WHERE user_id = $1', [userId]);
    if (result.rows.length === 0) {
      return UserProfileImage.NoImage();
    }
    return new UserProfileImage(parseInt(result.rows[0].user_id), parseInt(
      result.rows[0].id), result.rows[0].src);
  }

  public uploadProfileImage = async (userId: number,
      imageFile: Express.Multer.File): Promise<UserProfileImage> => {
    const fileName = `${userId}-${Date.now()}-${imageFile.originalname}`;
    const filePath = path.join('/resources/uploads', fileName);
    // Save the uploaded file to the local disk.
    fs.writeFileSync(filePath, imageFile.buffer);
    // Store the file path in the database.
    const result = await this.pool.query('INSERT INTO user_profile_images \
      (user_id, src, created_at, updated_at) VALUES ($1, $2, DEFAULT, DEFAULT) \
      RETURNING *', [userId, filePath]);
    if (!result || !result.rows || result.rows.length === 0) {
      return UserProfileImage.NoImage();
    }
    return new UserProfileImage(parseInt(result.rows[0].id), parseInt(
      result.rows[0].user_id), result.rows[0].src);
  }

  /** The postgress pool connection. */
  private pool: Pool;
}
