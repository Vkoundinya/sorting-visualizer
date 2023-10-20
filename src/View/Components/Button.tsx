import React from 'react';
import { BUTTON_SIZES, BUTTON_STYLES, STATIC_BUTTON_STYLES } from '../../assets/static/styles';


interface IButtonProps{
  buttonLabel: string;
  emphasis: IButtonEmphasis;
  size: IButtonSize;
  onClick?: any;
  disabled?: boolean;
}
interface IButtonState{
  type: string,
  text: string
}

declare type IButtonSize = 'sm' | 'md';
declare type IButtonEmphasis = 'PRIMARY' | 'SECONDARY' | 'TERITIARY';

class Button extends React.Component<IButtonProps, IButtonState>{

  constructor(props: IButtonProps){
    super(props);
    this.state = {
      type: 'Primary',
      text: props.buttonLabel
    }
  }

  static getButtonStyle = (emphasis: IButtonEmphasis) => {
    return BUTTON_STYLES['PRIMARY'];
  }

  static getButtonSize = (size: 'sm' | 'md'): string => {
    return BUTTON_SIZES[size];
  }

  render(){
    return (
      <>
        <button disabled={this.props.disabled} className={`${Button.getButtonSize(this.props.size)} ${Button.getButtonStyle(this.props.emphasis)} ${STATIC_BUTTON_STYLES}`} onClick={this.props.onClick} >{this.state.text}</button>
      </>
    )
  }
}


export default Button