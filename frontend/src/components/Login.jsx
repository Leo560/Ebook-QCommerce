import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
function Login() {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  
  return (
<div>
        <dialog id="my_modal_3" className="modal  text-white rounded-lg shadow-lg p-6">
  <div className="modal-box  max-w-none modal-custom">
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link type='button' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:bg-white " 
      onClick={()=>document.getElementById("my_modal_3").close()}
      >✕</Link>
   
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type="email" placeholder='Enter your email ' className='w-80 px-3  py-1 border rounded-md outline-none bg-white text-black' {...register("email", { required: true })}/>
         <br/>
         {errors.email && <span className='text-sm text-red-500 '>This field is required</span>}
        <br/>
        <span>Password</span>
        <br/>
        <input type='password' placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none bg-white text-black' {...register("password", { required: true })}></input>
         <br/>
         {errors.password && <span className='text-sm text-red-500 '>This field is required</span>}
    </div>
    {/*Button */}
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'>Login</button>
        <p>Not registed?{' '}
            <Link className='underline text-blue-500 cursor-pointer' to="/signup">Signup</Link></p>
          
    </div>
     </form>
  </div>
</dialog>
</div>
     
  )
}

export default Login