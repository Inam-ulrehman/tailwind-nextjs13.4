import Link from 'next/link'
import React from 'react'

const data = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/' },
  { name: 'Samples', link: '/samples' },
  { name: 'Contact', link: '/contact' },
  { name: 'About', link: '/' },
  { name: 'Home', link: '/' },
]
const NavLinks = () => {
  return (
    <div>
      <p className='font-extrabold text-lg text-center mb-2'>Quick links</p>
      <ul className='grid grid-cols-2  justify-items-center'>
        {data.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavLinks
