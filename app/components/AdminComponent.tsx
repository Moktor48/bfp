"use client"
import React from 'react'
import { useSession } from 'next-auth/react'

export default function AdminComponent() {
    const {data: session, status} = useSession()
    if(session?.user?.role === 'admin'){
  return (

    <div>
      <h1>Administration</h1>
    </div>

  )} else return null
}
