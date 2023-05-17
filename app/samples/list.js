'use client'
import { useRouter } from 'next/navigation'

const List = ({ data }) => {
  const router = useRouter()
  return (
    <div>
      {data.result.map((item, index) => {
        return (
          <div
            className='hover:cursor-pointer hover:text-cyan-300'
            key={index}
            onClick={() => router.push(`/samples/${item._id}`)}
          >
            name: {item.name}
          </div>
        )
      })}
    </div>
  )
}

export default List
