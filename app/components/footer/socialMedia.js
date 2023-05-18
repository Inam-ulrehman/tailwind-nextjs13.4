import React from 'react'
import { FaTwitterSquare } from 'react-icons/fa'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import Link from 'next/link'
const data = [
  {
    link: 'https://www.facebook.com/inamwebsolutions',
    icon: <BsFacebook size={30}></BsFacebook>,
  },
  {
    link: 'https://www.linkedin.com/in/Inamwebsolutions',
    icon: <BsLinkedin size={30}></BsLinkedin>,
  },
  {
    link: 'https://www.instagram.com/inamwebsolutions/',
    icon: <BsInstagram size={30}></BsInstagram>,
  },
  {
    link: 'https://twitter.com/Inamulrehmn',
    icon: <FaTwitterSquare size={30}></FaTwitterSquare>,
  },
]
const SocialMedia = () => {
  return (
    <div>
      <p className='font-extrabold text-lg text-center mb-2'>Social Media</p>
      <div className='flex justify-center gap-2'>
        {data.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              target='_blank'
              className='hover:text-red-500'
            >
              {item.icon}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SocialMedia
