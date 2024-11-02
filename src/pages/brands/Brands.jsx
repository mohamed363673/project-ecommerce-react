import React, { useEffect, useState } from 'react';
import axios from "axios"
import "./brands.css";
import { Link } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
export default function Brands() {
  // window.scrollTo(0, 0)

  const [brands, setBrands] = useState([])
  const [dataBRANDS, setdataBRANDS] = useState([]);
  const [openBrandImg, setOpenBrandImg] = useState(false);
  useEffect(() => {
    axios.get("https://ecommerce.routemisr.com/api/v1/brands").then((res) => {
      setBrands(res.data.data);
      setdataBRANDS(res.data.data);
    })
  }, [])
  return (
    <>
      <section className='w-full p-4 brands bg-white h-40 flex justify-center items-center'>
        <input onChange={(e) => {
          setBrands(dataBRANDS.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
        }} type="text" placeholder="Search Brand" className='w-9/12 h-12 border-2 rounded-md p-2' />
      </section>
      <section className='w-full h-auto flex flex-wrap justify-center items-center gap-12  py-14 '>
        {brands.length > 0 ?
          brands.map((item, i) => (
            <>
              <div onClick={(e) => {
                setOpenBrandImg(true);
                document.body.style.overflow = "hidden";
                document.querySelector(".imgCoverBrnad").src = item.image
              }} id={item.id} className="card cursor-pointer w-52 h-52 flex-shrink-0 p-3 rounded-lg bg-base-100 shadow-xl overflow-hidden product">
                <img className='w-full h-full pointer-events-none' src={item.image} alt="" />
              </div>
            </>
          )) : <>
            <div className="card w-64 h-64 flex justify-center items-center flex-shrink-0 p-3 rounded-full bg-base-100 shadow-xl overflow-hidden product">
              <MoonLoader
                color="#007dff"
                loading={true}
                size={120}
                speedMultiplier={1}
              />
            </div>
          </>
        }
      </section>
      <section className={`w-full fixed h-dvh inset-0 z-50 overflow-auto ${openBrandImg ? "flex" : "hidden"}  justify-center items-center  bg-black/45`}>
        <div className="imgBrand w-96 z-10 overflow-hidden  rounded-lg h-96 bg-white shadow-xl flex justify-center items-center">
          <img className='w-full h-full imgCoverBrnad' src={""} alt="" />
        </div>
        <div onClick={() => {
          setOpenBrandImg(false);
          document.body.style.overflow = "auto";
        }} className="close-imgBrand-as absolute inset-0 " />

      </section>
    </>
  )
}
