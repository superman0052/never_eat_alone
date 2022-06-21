import * as React from 'react';
import * as Router from 'react-router-dom';
import { CheckBox, CloseButton, EmailInputField, PasswordInputField,
  PrimaryTextButton, RedNavLink} from '../components';
import { DisplayMode } from '../definitions';

interface Properties {
  displayMode: DisplayMode;

  /** Represents the email input field value. */
  email?: string;

  /** represents the form error message. */
  formErrorMessage?: string;

  /** Indicates whether the inputfields have an error or not. */
  inputFieldHasError: boolean;

  /** Indicates the close button is clicked. */
  onClose: () => void;

  /** Indicates the Log In button is clicked. */
  onLogIn: () => void;

  /** Indicates the Forgot password button is clicked. */
  onForgotPassword: () => void;
}

interface RouterProps extends Router.RouteComponentProps {
}

interface State {
  email: string;
  password: string;
}

/** Displays the Log In Modal. */
export class LogInModal extends React.Component<Properties & RouterProps,
    State> {
  constructor(props: Properties & RouterProps) {
    super(props);
    this.state = {
      email: this.props.email || '',
      password: ''
    };
  }

  public render(): JSX.Element {
    const emailErrorMessage = (() => {
      if (!this.props.formErrorMessage) {
        return null;
      }
      return (
        <div style={ERROR_MESSAGE_STYLE} >
          {this.props.formErrorMessage}
        </div>);
    })();
    const containerStyle = (this.props.displayMode === DisplayMode.MOBILE &&
      MOBILE_CONTAINER_STYLE || CONTAINER_STYLE);
    return (
      <div style={containerStyle} >
        <CloseButton
          style={CLOSE_BUTTON_STYLE}
          displayMode={this.props.displayMode}
          onClick={this.props.onClose}
        />
        <div style={LOGO_CONTAINER_STYLE} >
          <img
            style={LOGO_STYLE}
            src='resources/log_in_modal/icons/logo.svg'
            alt='NEA Logo'
          />
        </div>
        <div style={TITLE_STYLE} >LOG IN</div>
        <EmailInputField
          style={INPUT_FIELD_STYLE}
          placeholder='Your Email'
          value={this.state.email}
          hasError={this.props.inputFieldHasError}
          onChange={this.handleEmailChange}
        />
        <PasswordInputField
          style={INPUT_FIELD_STYLE}
          placeholder='Your Password'
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <div style={ROW_CONTAINER_STYLE} >
          <CheckBox label='Remember Me' />
          <RedNavLink
            {...this.props}
            label='Forgot password?'
            to='/forgot_password'
            style={FORGOT_LINK_STYLE}
          />
        </div>
        <div style={ERROR_CONTAINER_STYLE} >{emailErrorMessage}</div>
        <PrimaryTextButton
          style={LOG_IN_BUTTON_STYLE}
          label='LOG IN'
          onClick={this.props.onLogIn}
        />
      </div>);
  }

  private handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  }

  private handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>
      ) => {
    this.setState({ password: event.target.value });
  }
}

const CONTAINER_STYLE: React.CSSProperties = {
  position: 'relative',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '490px',
  height: '622px',
  padding: '60px 90px',
  borderRadius: '4px',
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 1px 4px rgba(86, 70, 40, 0.25)',
  overflow: 'hidden'
};

const MOBILE_CONTAINER_STYLE: React.CSSProperties = {
  position: 'relative',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '375px',
  height: '622px',
  padding: '60px 32px',
  backgroundColor: '#FFFFFF',
  borderRadius: '4px',
  boxShadow: '0px 1px 4px rgba(86, 70, 40, 0.25)',
  overflow: 'hidden'
};

const CLOSE_BUTTON_STYLE: React.CSSProperties = {
  position: 'absolute',
  top: '20px',
  right: '20px'
};

const LOGO_CONTAINER_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50px',
  height: '43px'
};

const LOGO_STYLE: React.CSSProperties = {
  backgroundColor: 'transparent',
  minWidth: '50px',
  minHeight: '43px',
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

const TITLE_STYLE: React.CSSProperties = {
  marginTop: '15px',
  fontFamily: 'Oswald',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '26px',
  lineHeight: '39px',
  color: '#000000'
};

const LOG_IN_BUTTON_STYLE: React.CSSProperties = {
  width: '100%',
  height: '35px'
};

const ERROR_CONTAINER_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '40px'
};

const ERROR_MESSAGE_STYLE: React.CSSProperties = {
  height: '18px',
  marginTop: '17px',
  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '18px',
  color: '#FF2C79',
  textAlign: 'center'
};

const INPUT_FIELD_STYLE: React.CSSProperties = {
  marginTop: '20px'
};

const ROW_CONTAINER_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '20px',
  marginTop: '20px'
};

const FORGOT_LINK_STYLE: React.CSSProperties = {
  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '18px',
  width: 'fit-content',
  height: '18px'
};
