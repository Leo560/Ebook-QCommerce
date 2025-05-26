import React from 'react'

function Cards({item}) {
    console.log(item)
  return (
  <>
  <div className='mt-4 my-3 p-3 flex'>
  <div className="card text-black w-92 shadow-xl hover:scale-105 duration-200 ">
  <figure>
    <img
      src={item.image}
      alt="Books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 duration-200 hover:text-white px-2 py-1 cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
  </div>

  </>
  )
}

export default Cards