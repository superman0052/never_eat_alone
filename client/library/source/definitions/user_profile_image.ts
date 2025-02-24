export class UserProfileImage {
  public static fromJson(value: any): UserProfileImage {
    return new UserProfileImage(value.userId, value.src);
  }

  public static default(userId: number = -1): UserProfileImage {
    return new UserProfileImage(userId, '/resources/avatars/profile-image-0.svg'
      );
  }

  constructor(userId: number, src: string) {
    this._userId = userId;
    this._src = src;
  }

  public get userId(): number {
    return this._userId;
  }

  public get src(): string {
    return this._src;
  }

  public equals(other: UserProfileImage): boolean {
    return this._userId === other._userId && this._src === other._src;
  }

  /** Converts UserProfileImage to json. */
  public toJson(): any {
    return {
      userId: this._userId,
      src: this._src
    };
  }

  private _userId: number;
  private _src: string;
}
