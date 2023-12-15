"use client"

import Link from 'next/link'


export default function NavBar() {

  return (
    <div className='flexCont inline-flex bg-gradient-to-r from-indigo-500'>
        <p className='items-end mx-5 flex-row-reverse'><Link href="/dashboard">My Dashboard</Link></p>
        <p className='items-end mx-5 flex-row-reverse'><Link href="/api/auth/signout">Sign Out</Link></p>
    </div>
  )
}
