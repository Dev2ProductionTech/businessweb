import React from 'react'

export default function Button({children, onClick, className=''}){
  return (
    <button onClick={onClick} className={`bg-indigo-600 text-white px-4 py-2 rounded ${className}`}>{children}</button>
  )
}
