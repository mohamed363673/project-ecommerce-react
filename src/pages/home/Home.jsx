import React, { useEffect, useState } from 'react'
import "./home.css"
import { Link } from 'react-router-dom';
export default function Home() {
  // window.scrollTo(0, 0)

  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch("https://ecommerce.routemisr.com/api/v1/categories")
      .then(r => r.json())
      .then(d => {
        setCategories(d.data)
    })
  },[])
  return (
    <>
    <section onMouseMove={(e) => {
      document.querySelector(".home").style.backgroundPositionX = e.pageX + "px";
      document.querySelector(".home").style.backgroundPositionY = e.pageY + "px";
    }} style={{ height: "77dvh" }} className=' home w-full '>
      <div className='w-full h-full flex flex-col justify-center items-center z-0'>
        <p>Explore , discover , Shopping</p>
        <h1 className='text-6xl font-bold text-black'>Welcome to my website</h1>
          <p className='text-3xl font-bold pt-1 text-black'>This is Website From Route</p>
      </div>
        
      </section>

      <section className='w-full h-auto relative p-4 '>
        <div className="gap-6 w-full h-80 categories  bg-white items-center flex overflow-auto px-8">
        {categories.map((item, i) => (
          <>
            <div key={i} className="w-48 h-56 flex-shrink-0  rounded-lg bg-base-100 shadow-xl overflow-hidden ">
              <img src={item.image} alt="Card" className="w-full h-full object-cover" />
            </div>
          </>
        ))}
        </div>
        <div className="w-full flex items-center px-3 justify-between h-full object-cover absolute inset-0 z-10 bg-transparent">
          <button onClick={()=>{
            document.querySelector(".categories").scrollBy({
              left: -200,
              behavior: 'smooth',
            })
          }} className='h-1/2 transition-all shadow-lg active:scale-90 w-20 bg-slate-100 text-black flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>

          </button>
          <button onClick={()=>{
            document.querySelector(".categories").scrollBy({
              left: 200,
              behavior: 'smooth',
            })
          }} className='h-1/2 transition-all shadow-lg active:scale-90 w-20 bg-slate-100 text-black flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

          </button>
        </div>
      </section>
    </>
  )
}
