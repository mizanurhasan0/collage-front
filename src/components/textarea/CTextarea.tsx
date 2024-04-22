import React from 'react';

type cInputProps = {
  onClick?: () => void,
  type?: string,
  label?: string,
  className?: string,
}
const CTextarea: React.FC<cInputProps> = ({ onClick = () => { }, type = 'text', label = '', className }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {label ? <p className="py-1 opacity-70">{label}</p> : ''}
      </div>
      <textarea rows={5} className={`border outline-none rounded-md w-full px-6 py-3 ${className}`} placeholder="type here..." />
    </div>
  )
}
export default CTextarea;
