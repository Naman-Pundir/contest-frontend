import Link from 'next/link'
import React from 'react'

type Props = {}

const Menu = (props: Props) => {
  return (
    <header>
        <nav className='flex items-center gap-5 w-full text-wh-10 bg-neutral-800 h-14 px-10 rounded-lg'>
            <Link href="/contest" className="hover:text-green-500">Problems</Link>
            <Link href="/contest" className="hover:text-green-500">Description</Link>
            <Link href="/contest" className="hover:text-green-500">Submissions</Link>
        </nav>
    </header>
  )
}

export default Menu