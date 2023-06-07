import * as React from 'react'

export interface IButton extends React.HTMLProps<HTMLButtonElement> {}

const Button: React.FC<IButton> = ({ children, onClick }) => {
  return <button style={{width: "200px", backgroundColor: "red"}} onClick={onClick}>{children}</button>
}

export default Button