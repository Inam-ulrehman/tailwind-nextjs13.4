import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <ul className='flex gap-1'>
        <li>
          <Link className='p-1 ml-2 hover:border-b-2 ' href={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className='p-1 ml-2 hover:border-b-2 ' href={'/samples'}>
            Samples
          </Link>
          <Link className='p-1 ml-2 hover:border-b-2 ' href={'/contact'}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
