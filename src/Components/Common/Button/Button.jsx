import React from 'react'
import './Button.css'

const Button = ({btntxt}) => {
  return (
    <div className='gradient-button text-xl px-6 py-2 rounded-full'>
        {btntxt}
    </div>
  )
}

export default Button