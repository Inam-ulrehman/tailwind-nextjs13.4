import React from 'react'
import CopyRight from './copyRight'
import NavLinks from './navLinks'
import SocialMedia from './socialMedia'
import Address from './address'
import Logo from './logo'

const Footer = () => {
  return (
    <footer className='grid border-2   '>
      <Logo />
      <div className='grid m-auto lg:grid-cols-3 py-5 '>
        <NavLinks />
        <SocialMedia />
        <Address />
      </div>
      <CopyRight></CopyRight>
    </footer>
  )
}

export default Footer
