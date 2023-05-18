import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <ul className='flex py-4'>
        <li>
          <Link
            className='p-2 ml-2 rounded-md border-2 hover:border-pink-300'
            href={'/samples'}
          >
            samples
          </Link>
        </li>
        <li>
          <Link
            className='p-2 ml-2 rounded-md border-2 hover:border-pink-300'
            href={'/'}
          >
            home
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
