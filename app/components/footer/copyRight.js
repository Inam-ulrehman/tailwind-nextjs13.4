import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'

const CopyRight = () => {
  return (
    <div className='flex items-center p-5 justify-center text-sm text-gray-500'>
      Copyright
      <span className='px-2'>
        <FaRegCopyright />
      </span>
      {new Date().getFullYear()} Inam web solutions. All rights reserved.
    </div>
  )
}

export default CopyRight
