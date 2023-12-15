import Link from "next/link";


export default function Home() {
  return (
    <main>
      <Link href="/register"><h1 className="text-5xl">Register?</h1></Link><br />
      <Link href="/login"><h1 className="text-5xl">Login?</h1></Link>
    </main>
  )
}
