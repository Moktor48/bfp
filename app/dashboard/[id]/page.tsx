"use client"
import { useSession } from "next-auth/react"

export default function DashBoard() {
    const {data: session, status} = useSession()
    console.log(session)
  return (
    <div>page</div>
  )
}
