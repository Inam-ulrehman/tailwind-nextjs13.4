import Link from 'next/link'

export default function Home() {
  return (
    <main className=''>
      <Link href={'/samples'}>samples</Link>
      <Link href={'/'}>home</Link>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <button className='btn-primary'>Button</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        blanditiis magnam deleniti temporibus laborum dolor, sequi suscipit,
        omnis aliquam reiciendis aspernatur voluptate impedit dolorum eaque?
      </p>
    </main>
  )
}
