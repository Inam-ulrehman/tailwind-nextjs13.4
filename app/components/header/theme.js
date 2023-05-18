'use client'
import {
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
  setItemInLocalStorage,
} from '@/lib/localStorage/localStorage'
import { VscColorMode } from 'react-icons/vsc'
import React, { useEffect, useState } from 'react'
const theme = getItemFromLocalStorage('theme')
const Theme = () => {
  const [state, setState] = useState('')
  const changeTheme = () => {
    const theme = getItemFromLocalStorage('theme')
    if (!theme) {
      setState('dark')
      setItemInLocalStorage('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      setState('light')
      removeItemFromLocalStorage('theme', 'dark')
      document.documentElement.classList.remove('dark')
    }
  }
  useEffect(() => {
    const theme = getItemFromLocalStorage('theme')
    if (theme) {
      setState('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])
  return (
    <div>
      <button
        className='flex items-center gap-1 border-2 px-2 rounded-md  hover:bg-slate-100 dark:hover:bg-slate-700'
        onClick={changeTheme}
      >
        {state === 'dark' ? 'Light' : 'Dark'} theme
        <VscColorMode />
      </button>
    </div>
  )
}

export default Theme
