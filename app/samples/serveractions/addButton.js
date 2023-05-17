'use client'
// import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export const AddButton = () => {
  // const { pending } = useFormStatus()
  const pending = false
  return (
    <button className='btn-primary w-40' type='submit' disabled={pending}>
      {pending ? 'submitting...' : 'submit'}
    </button>
  )
}
