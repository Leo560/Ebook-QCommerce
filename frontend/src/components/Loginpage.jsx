import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

function Loginpage() {
      const navigate=useNavigate()
  return (
    <>
    
        <div className='flex items-center justify-center min-h-screen bg-gray-100 border shadow-md'>
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative text-black">
          <form>
            <button type="button" 
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-white text-black" 
            onClick={()=>navigate(-1)}>✕</button>
            <h3 className="font-bold text-lg mb-4 text-black">Login</h3>
            <div className='space-y-2'>
              <label className="block text-black">Email</label>
              <input type="email" placeholder='Enter your email' className='w-full px-3 py-1 border rounded-md outline-none bg-white' />
              <label className="block text-black">Password</label>
              <input type='password' placeholder='Enter your password' className='w-full px-3 py-1 border rounded-md outline-none bg-white' />
            </div>
            <div className='flex justify-between items-center mt-4'>
              <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'>Login</button>
              <p className="text-black text-sm">
                Not Registered?{' '}
                <Link className='underline text-blue-500 cursor-pointer' to="/signup">Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Loginpage