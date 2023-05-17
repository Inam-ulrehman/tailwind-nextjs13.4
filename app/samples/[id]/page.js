import Link from 'next/link'
import React from 'react'

async function getProduct(id) {
  const res = await fetch(`http://localhost:3000/api/v1/samples/${id}`)
  return res.json()
}

// export async function generateMetadata({ params }) {
//   const product = await getProduct(params.id)

//   return { title: product.result.name }
// }
const Page = ({ params }) => {
  return (
    <div>
      <Link className='pr-3 ' href={'/samples'}>
        samples
      </Link>
      <Link className='pr-3 ' href={'/'}>
        home
      </Link>
      <h1>id: {params.id}</h1>
    </div>
  )
}

export default Page
