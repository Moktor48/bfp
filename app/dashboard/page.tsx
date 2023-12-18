"use client"
import { useSession } from "next-auth/react"


export default function DashBoard() {
    const {data: session, status} = useSession()
  return (
    <div>
      You are signed in as {session?.user?.username}.
    </div>
  )
}
