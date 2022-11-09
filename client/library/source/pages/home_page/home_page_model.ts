/** Base class for the model used by the HomePage. */
export abstract class HomePageModel {
  /** Loads the data to display on the HomePage, must be called before calling
   * any other method of this class.
   */
  public abstract load(): Promise<void>;
}