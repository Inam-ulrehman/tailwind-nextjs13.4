'use client'
import {
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
  setItemInLocalStorage,
} from '@/lib/localStorage/localStorage'
import React, { useEffect, useState } from 'react'

const Theme = () => {
  const changeTheme = () => {
    const theme = getItemFromLocalStorage('theme')
    if (!theme) {
      setItemInLocalStorage('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      removeItemFromLocalStorage('theme', 'dark')
      document.documentElement.classList.remove('dark')
    }
  }
  useEffect(() => {
    const theme = getItemFromLocalStorage('theme')
    if (theme) {
      document.documentElement.classList.add('dark')
    }
  }, [])
  return (
    <div>
      <button onClick={changeTheme}>Change theme</button>
    </div>
  )
}

export default Theme
