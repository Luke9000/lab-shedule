
import clsx from 'clsx';
import React, { FC } from 'react'
import styles from './styles.module.css'

type BaseButtonAttributes = React.ComponentPropsWithoutRef<"button">;

interface ButtonProps extends BaseButtonAttributes {
    enabled?: boolean;
    className?:string,
    text: string
  }

 
  
  const Button: FC<ButtonProps> = ({enabled,className,text, ...rest}) => {
    return (
      <button 
        className={clsx(styles.button,className)} 
        disabled={enabled} 
        {...rest}> 

      {text}</button>
    )
  }
  
  export default Button