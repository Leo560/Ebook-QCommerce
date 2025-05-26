import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'
function Course() {
  return (
    <>
    <div className='max-w-screen-2xl  container mx-auto md:px-10 px-4 text-black'>
        <div className='mt-16 items-center justify-center text-center'>
        <h1 className='text-2xl  md:text-4xl'>
        We're delighted to have you <span className='text-pink-500'>Here! :)</span>
        </h1>
        <p className='mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quod doloremque quae illum qui quam consequuntur harum repellat autem, libero est aut ea omnis tempore sed ut facere voluptatem in id aperiam beatae et explicabo cupiditate. Illo odio saepe culpa temporibus fuga recusandae totam similique. Dolorem, cupiditate iste? Debitis, voluptates?</p>
          <Link to='/'>
          <button className='bg-pink-500 text-white px-4 py-2 rounded-box mt-4 hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
        {
            list.map((item)=>(
                <Cards  item={item} key={item.id}/>
            ))
        }
      </div>
    </div>
    </>
  )
}

export default Course