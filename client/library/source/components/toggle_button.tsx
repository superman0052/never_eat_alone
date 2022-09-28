import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';

interface Properties {
  style?: React.CSSProperties;
  checked: boolean;
  onClick: () => void;
}

interface State {
  checked: boolean;
}

/** Displays a Toggle Button. */
export class ToggleButton extends React.Component<Properties, State> {
  constructor(props: Properties) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
  }

  public render(): JSX.Element {
    const sliderClassName = (this.state.checked && css(styles.checkedSlider) ||
      css(styles.slider));
    const sliderStyle = (this.state.checked && CHECKED_SLIDER || SLIDER_STYLE);
    console.log('checked', this.state.checked);
    return (
      <label style={{...LABEL_STYLE, ...this.props.style}} >
        <input
          style={INPUT_STYLE}
          type='checkbox'
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        <span style={sliderStyle} className={sliderClassName} />
      </label>);
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((preState) => ({ checked: !preState.checked }));
    this.props.onClick();
  }
}

const LABEL_STYLE: React.CSSProperties = {
  position: 'relative',
  display: 'inline-block',
  width: '44px',
  height: '24px',
  backgroundColor: 'transparent'
};

const INPUT_STYLE: React.CSSProperties = {
  opacity: 0,
  width: '0px',
  height: '0px'
};

const SLIDER_STYLE: React.CSSProperties = {
  boxSizing: 'border-box',
  position: 'absolute',
  cursor: 'pointer',
  top: '0px',
  left: '0px',
  right: '0px',
  bottom: '0px',
  backgroundColor: 'transparent',
  border: '1px solid #969696',
  WebkitTransition: '.4s',
  transition: '.4s',
  borderRadius: '20px',
  boxShadow: 'none'
};

const CHECKED_SLIDER: React.CSSProperties = {
  ...SLIDER_STYLE,
  backgroundColor: 'transparent',
  border: '1px solid #F26B55'
};

const FOCUSED_SLIDER: React.CSSProperties = {
  boxShadow: '0px 1px 5px rgba(86, 70, 40, 0.4)'
};

const styles = StyleSheet.create({
  checkedSlider: {
    ':before': {
      WebkitTransform: 'translateX(26px)',
      MsTransform: 'translateX(26px)',
      transform: 'translateX(26px)',
      position: 'absolute',
      content: '""',
      height: '26px',
      width: '26px',
      right: '26px',
      bottom: '-2px',
      WebkitTransition: '.4s',
      transition: '.4s',
      borderRadius: '50%',
      backgroundColor: '#F26B55'
    }
  },
  slider: {
    ':before': {
      position: 'absolute',
      content: '""',
      height: '26px',
      width: '26px',
      right: '18px',
      bottom: '-2px',
      backgroundColor: '#969696',
      WebkitTransition: '.4s',
      transition: '.4s',
      borderRadius: '50%'
    }
  }
});
