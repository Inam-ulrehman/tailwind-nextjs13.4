import Link from 'next/link'

async function getData() {
  const res = await fetch('http://localhost:3000/api/v1/samples', {
    next: { revalidate: 10 },
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Component() {
  const data = await getData()

  return (
    <div>
      <Link href={'/samples'}>samples</Link>
      <Link href={'/'}>home</Link>
      <h1>Details</h1>
      {data.result.map((item) => {
        return <div>name: {item.name}</div>
      })}
    </div>
  )
}
