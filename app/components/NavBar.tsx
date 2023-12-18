"use client"
import { useState, useEffect } from "react"
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function NavBar() {
  const { data: session, status } = useSession()
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || status === "loading") return null;
  return (
    <div className='flexCont inline-flex bg-gradient-to-r from-indigo-500'>
        <p className='items-end mx-5 flex-row-reverse'><Link href="/">Home</Link></p>
        <p className='items-end mx-5 flex-row-reverse'><Link href="/dashboard">My Dashboard</Link></p>
        { session && <p className='items-end mx-5 flex-row-reverse'><Link href="/api/auth/signout">Sign-out from user: {session.user.username}</Link></p>}
        { !session && <p className='items-end mx-5 flex-row-reverse'><Link href="/api/auth/signin">Sign-in</Link></p>}
    </div>
  )
}
