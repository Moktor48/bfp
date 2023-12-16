"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'


export default function RegisterPage() {
    const router = useRouter()
    const [pass, setPass] = useState("")
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        rePassword: ""
    })

    const registerUser = async (e: any) => {
        e.preventDefault()
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({data})
        })

        const userInfo = await response.json()
        router.push('/login')
    }

    useEffect(() => {
        if (data.password != data.rePassword){
            setPass("Passwords must match")
        } else {
            setPass("")
        }               
    }, [data])

  return (
<>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register for your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <form className="space-y-6" onSubmit={registerUser}>

          <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  autoComplete="new-username"
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={data.username}
                  onChange={(e) => {setData({...data, username: e.target.value})}}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  autoComplete="new-email"
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={data.email}
                  onChange={(e) => {setData({...data, email: e.target.value})}}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={data.password}
                  onChange={(e) => {setData({...data, password: e.target.value})}}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="rePassword" className="block text-sm font-medium leading-6 text-gray-900">
                  Re-enter Password {pass}
                </label>
                <div className="text-sm">
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="rePassword"
                  name="rePassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={data.rePassword}
                  onChange={(e) => {setData({...data, rePassword: e.target.value})}}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}
