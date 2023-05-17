import { revalidatePath } from 'next/cache'

import React from 'react'
import { AddButton } from './addButton'
import sample from '@/models/sample'

async function getData() {
  const res = await fetch('http://localhost:3000/api/v1/samples')
  return res.json()
}
const Create = async () => {
  const data = await getData()
  const handleSubmit = async (formData) => {
    'use server'
    const name = formData.get('name')
    const result = await sample.create({ name })

    revalidatePath('/samples/create')
  }
  return (
    <div>
      <h1>create</h1>
      <form action={handleSubmit}>
        <div>
          <input
            className='border-2 border-cyan-500 rounded-lg ml-2'
            type='text'
            name='name'
          />
        </div>
        <AddButton />
      </form>
      {data.result.map((item, index) => {
        return <div key={item._id}>name: {item.name}</div>
      })}
    </div>
  )
}

export default Create
