import Link from 'next/link'
import List from './list'

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE}/api/v1/samples/static`,
    {
      // next: { revalidate: 10 },
    }
  )

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Sample = async () => {
  const data = await getData()
  console.log(data)
  return (
    <div>
      <Link className='pr-3 ' href={'/samples'}>
        samples
      </Link>
      <Link className='pr-3 ' href={'/'}>
        home
      </Link>
      <h1>Details</h1>
      <List data={data} />
    </div>
  )
}

export default Sample
