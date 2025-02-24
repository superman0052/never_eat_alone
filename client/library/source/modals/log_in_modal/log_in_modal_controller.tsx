import * as React from 'react';
import { DisplayMode, User, UserStatus } from '../../definitions';
import { LogInModal } from './log_in_modal';
import { LogInModel } from './log_in_model';

interface Properties {
  /** The display mode. */
  displayMode: DisplayMode;

  /** Log in model. */
  model: LogInModel;

  /** Indicates the close button is clicked. */
  onClose: () => void;

  /** Indicates the log in was successful. */
  onLogInSuccess: (user: User) => void;
}

interface State {
  email: string;
  password: string;
  rememberMe: boolean;
  errorCode: LogInModal.ErrorCode;
}

export class LogInModalController extends React.Component<Properties, State> {
  constructor(props: Properties) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: true,
      errorCode: LogInModal.ErrorCode.NONE
    };
  }

  public render(): JSX.Element {
    return <LogInModal
      displayMode={this.props.displayMode}
      email={this.state.email}
      password={this.state.password}
      rememberMe={this.state.rememberMe}
      errorCode={this.state.errorCode}
      onLogIn={this.handleLogIn}
      onClose={this.props.onClose}
    />;
  }

  private handleLogIn = async (email: string, password: string,
      rememberMe: boolean) => {
    try {
      const user = await this.props.model.logIn(email, password,
        rememberMe);
      if (user.userStatus === UserStatus.ACTIVE) {
        this.props.onLogInSuccess(user);
      } else {
        this.setState({ errorCode: LogInModal.ErrorCode.LOGIN_FAILED });
      }
    } catch {
      this.setState({
        email: email,
        password: password,
        rememberMe: rememberMe,
        errorCode: LogInModal.ErrorCode.NO_CONNECTION
      });
    }
  }
}
