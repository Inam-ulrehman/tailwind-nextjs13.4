'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const List = ({ data }) => {
  const router = useRouter()
  return (
    <div>
      {data.result.map((item, index) => {
        return (
          <Link
            href={`/samples/${item._id}`}
            className='hover:cursor-pointer hover:text-cyan-300'
            key={index}
          >
            name: {item.name}
          </Link>
        )
      })}
    </div>
  )
}

export default List
