import React from 'react'
import { FaAirbnb } from 'react-icons/fa'

const Logo = () => {
  return (
    <div className='flex items-center gap-2 text-red-500'>
      <FaAirbnb size={34} />
      <span className='text-2xl font-bold '>airbnb</span>
    </div>
  )
}

export default Logo
