import React from 'react';
import { Hidden } from '../../assets/index';

type cInputProps = {
  onClick?: () => void,
  type?: string,
  label?: string,
  className?: string,
}
const CInput: React.FC<cInputProps> = ({ onClick = () => { }, type = 'text', label = '', className }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {label ? <p className="py-1 opacity-70">{label}</p> : ''}
        {type === 'password' ? <Hidden className="w-5 h-5 opacity-50 cursor-pointer" onClick={onClick} /> : ''}
      </div>
      <input type={type} className={`h-14 border outline-none rounded-md w-full px-6 ${className}`} placeholder="type here..." />
    </div>
  )
}
export default CInput;