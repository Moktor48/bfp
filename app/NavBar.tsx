"use client"

import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function NavBar() {
  const { data: session, status } = useSession()
  if (status === "loading") return null
  return (
    <div className='flexCont inline-flex bg-gradient-to-r from-indigo-500'>
        <p className='items-end mx-5 flex-row-reverse'><Link href="/">Home</Link></p>
        <p className='items-end mx-5 flex-row-reverse'><Link href="/dashboard">My Dashboard</Link></p>
        { session && <p className='items-end mx-5 flex-row-reverse'><Link href="/api/auth/signout">Sign Out</Link></p>}
        { session && <p className='items-end mx-5 flex-row-reverse'>[Signed in as {session.user.username}]</p>}
        { !session && <p className='items-end mx-5 flex-row-reverse'><Link href="/api/auth/signin">Sign In</Link></p>}
        { !session && <p className='items-end mx-5 flex-row-reverse'>[Not signed in]</p>}
    </div>
  )
}
