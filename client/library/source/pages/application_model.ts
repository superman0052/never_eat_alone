import { User } from '../definitions';
import { HeaderModel } from '../components';

export abstract class ApplicationModel {
  public abstract load(): Promise<void>;
  public abstract getAccount(): User;
  public abstract getHeaderModel(): HeaderModel;
}
