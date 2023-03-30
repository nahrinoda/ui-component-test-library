import React from "react";
import './button.css';


export interface ButtonProps {
  label: string;

}

const Button = ({ label }: ButtonProps) => {
  return <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">{label}</button>
}

export default Button;