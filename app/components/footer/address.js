import Link from 'next/link'
import React from 'react'
const address = [
  {
    name: 'Email: ',
    path: 'mailto:Support@inamwebsolutions.com',
    title: 'support@inamwebsolutions.com',
  },
  { name: 'Mobile: ', path: 'tel:4165606790', title: '4165606790' },
  {
    name: 'Address: ',
    path: 'https://www.google.com/maps/@43.4450731,-80.4859129,17z',
    title: '86 Cedar Street,Kitchener, ON,  N2G 3L8',
  },
]

const Address = () => {
  return (
    <div>
      <p className='font-extrabold text-lg text-center  mb-2'>Our address</p>
      <ul>
        {address.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.path} target={'_blank'}>
                {item.name} {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Address
