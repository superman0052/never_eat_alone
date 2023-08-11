import * as React from 'react';
import { DisplayMode, User } from '../../definitions';
import { ResetPasswordPage } from './reset_password_page';
import { ResetPasswordPageModel } from './reset_password_page_model';

interface Properties {
  displayMode: DisplayMode;
  model: ResetPasswordPageModel;
  onSaveAndLogInSuccess: (account: User) => void;
}

interface State {
  isLoaded: boolean;
  errorCode: ResetPasswordPage.ErrorCode;
}

export class ResetPasswordPageController extends React.Component<Properties,
    State> {
  constructor(props: Properties) {
    super(props);
    this.state = {
      isLoaded: false,
      errorCode: ResetPasswordPage.ErrorCode.NONE
    };
  }

  public render(): JSX.Element {
    if (!this.state.isLoaded || this.state.errorCode !==
        ResetPasswordPage.ErrorCode.NONE) {
      return <div />;
    }
    return <ResetPasswordPage
      displayMode={this.props.displayMode}
      displayName={this.props.model.displayName}
      profileImageSrc={this.props.model.profileImageSrc}
      errorCode={this.state.errorCode}
      onSaveClick={this.handleOnSaveClick}
    />;
  }

  private handleOnSaveClick = async (newPassword: string) => {
    try {
      const account = await this.props.model.savePassword(newPassword);
      if (account && account.id !== -1) {
        this.props.onSaveAndLogInSuccess(account);
      } else {
        this.setState({
          errorCode: ResetPasswordPage.ErrorCode.NO_CONNECTION
        });
      }
    } catch {
      this.setState({ errorCode: ResetPasswordPage.ErrorCode.NO_CONNECTION });
    }
  }
}
