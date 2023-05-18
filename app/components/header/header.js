import React from 'react'
import Navbar from './navbar'
import Logo from './logo'
import Theme from './theme'

const Header = () => {
  return (
    <header className='flex items-center justify-around border-b-2 h-12'>
      <Logo />
      <Navbar />
      <Theme />
    </header>
  )
}

export default Header
