import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
function Signup() {
     const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()

   const onSubmit = (data) => console.log(data)
  const navigate = useNavigate();

  return (
    <>
      <div  className='flex items-center justify-center min-h-screen bg-gray-100 border shadow-md'>
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-white text-black "
              onClick={() => navigate(-1)} 
            >✕</button>
            <h3 className="font-bold text-lg mb-4 text-black">Sign Up</h3>
            <div className='space-y-2'>
              <label className="block text-black">Name</label>
              <input type="text" placeholder='Enter your name' className='w-full px-3 py-1 border rounded-md outline-none bg-white text-black' {...register("name", { required: true })}/>
         <br/>
         {errors.name && <span className='text-sm text-red-500 '>This field is required</span>}
              <label className="block text-black">Email</label>
              <input type="email" placeholder='Enter your email' className='w-full px-3 py-1 border rounded-md outline-none bg-white text-black' {...register("email", { required: true })}/>
         <br/>
         {errors.email && <span className='text-sm text-red-500 '>This field is required</span>}
              <label className="block text-black">Password</label>
              <input type='password' placeholder='Enter your password' className='w-full px-3 py-1 border rounded-md outline-none bg-white text-black' {...register("password", { required: true })}/>
         <br/>
         {errors.password && <span className='text-sm text-red-500 '>This field is required</span>}
            </div>
            <div className='flex justify-between items-center mt-4'>
              <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'>Sign Up</button>
              <p className="text-black text-sm">
                Already registered?{' '}
                <Link className='underline text-blue-500 cursor-pointer' to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup