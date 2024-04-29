import { ButtonProps } from '@/types/button/index';
import React from "react";

const Button: React.FC<ButtonProps> = (buttonProps) => {
  const { classButton, onClick, text, type } = buttonProps;
  
  return (
    <button 
      className={classButton}
      type={type} 
      onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;