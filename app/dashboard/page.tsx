"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import AdminComponent from "../components/AdminComponent"

export default function DashBoard() {
  const router = useRouter()
  const {data: session, status} = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    
    <div>
      <p>You are signed in as {session?.user?.username}.</p>

      <AdminComponent />

    </div>
    
  )
}
