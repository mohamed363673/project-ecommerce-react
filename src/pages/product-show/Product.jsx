import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications';
function BuyProduct({ data, open }) {
    // const [product, setProduct] = useState({});
    return (<>

    </>)
}
export default function Product() {
    const { id } = useParams();
    const [dataProduct, setProduct] = useState({ images: [] })
    const [quantity, setQuantity] = useState(false);

    window.scrollTo(0, 0)
    useEffect(() => {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
            .then(res => {
                setProduct(res.data.data)
                // console.log(res.data.data);
            })
    }, [id])
    return (
        <>
            <section className='w-full h-auto flex  justify-center items-center gap-12  py-14 '>
                <div style={{ height: "500px" }} className="card flex rounded-2xl gap-2 flex-shrink-0 w-auto p-3 rounded-l-lg bg-base-100 shadow-xl  ">
                    <div className="h-full overflow-y-auto w-44 ">
                        <div className='flex flex-col gap-1'>
                            {
                                dataProduct.images.map((item, i) =>
                                (<>
                                    <img className='w-full h-full' key={i} src={item} alt="Shoes" />
                                </>
                                )
                                )
                            }
                        </div>
                    </div>
                    <img className='w-auto h-full ' onMouseLeave={() => {
                        let imgCa_Pr = document.querySelector(".imgCa_Pr");
                        imgCa_Pr.style.opacity = 0;
                    }} onMouseMove={(e) => {
                        let imgCa_Pr = document.querySelector(".imgCa_Pr");
                        imgCa_Pr.children[0].src = dataProduct.brand.image;
                        imgCa_Pr.style.top = e.clientY + "px";
                        imgCa_Pr.style.left = e.clientX + "px";
                        imgCa_Pr.style.opacity = 1;
                    }} src={dataProduct.imageCover} alt="Shoes" />
                </div>
                <div className="w-1/2 h-auto flex-shrink-0 p-4 rounded-lg bg-base-100 shadow-xl">
                    <h1 className=" card-title text-3xl">{dataProduct.title}</h1>
                    <br />
                    <p>{dataProduct.description}</p>
                    <div className="flex items-center pt-4 gap-3 w-full justify-center">
                        <p>${dataProduct.price}</p>
                        |
                        <p className='flex items-center'>{dataProduct.ratingsAverage}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-orange-400">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                            </svg>
                        </p>
                        |
                        <p className='flex items-center '>
                            {dataProduct.ratingsQuantity}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                            </svg>
                        </p>
                        |
                        <p className='flex items-center '>
                            {dataProduct.sold}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </p>
                        |
                        <p className='flex items-center '>
                            {dataProduct.quantity}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-indigo-800">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>
                        </p>
                    </div>
                    <br />
                    <hr />
                    <div className="as-btn-Buy_And_Add w-full gap-2 p-4 flex justify-center items-center">
                        <button onClick={() => {
                            setQuantity(true)
                            document.body.style.overflow = "hidden";
                        }} className="btn active:scale-95 btn-primary btn-buy text-lg transition-all bg-blue-500 w-1/2 text-white p-3 rounded-lg">Buy Now</button>
                        <button onClick={() => {
                            ;
                            fetch("https://ecommerce.routemisr.com/api/v1/cart", {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json',
                                    "token": localStorage.getItem("token")
                                },
                                body: JSON.stringify({
                                    "productId": id,
                                })
                            }).then((res) => res.json()).then((d) => {
                                document.getElementById("audio").play();
                                NotificationManager.success('has been added successfully', 'The product .');
                            })
                        }} className="btn active:scale-95 btn-primary btn-addP text-lg transition-all bg-green-500 w-1/2 text-white p-3 rounded-lg">+Add</button>
                        <button onClick={() => {
                            fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "token": localStorage.getItem("token")
                                },
                                body: JSON.stringify({ productId: id })
                            }).then(res => res.json())
                                .then(data => {
                                    NotificationManager.success("Added to wishlist", "Success", 2000);
                                    document.getElementById("audio").play();
                                })

                        }} className="btn transition-all rotate-180 active:scale-95 p-3 rounded-lg text-white  flex justify-center items-center  bg-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            <NotificationContainer></NotificationContainer>
            <div className={`w-full h-dvh flex justify-center z-50 items-center ${quantity ? "fixed" : "hidden"} inset-0 bg-black/25`}>
                <div onClick={() => {
                    setQuantity(false);
                    document.body.style.overflow = "auto";
                }} className="close-buy fixed inset-0 w-full h-full z-10"></div>
                <div className="w-1/2 h-auto bg-white relative z-40 p-5 rounded-lg">
                    <h1 className="text-2xl font-bold">Buy Product</h1>
                    <div className="w-full h-auto py-4 px-4 rounded-lg bg-white shadow-lg mt-4">
                        <div className="w-full h-auto flex flex-col gap-3 justify-center items-center">
                            <div className="w-full p-2 flex items-center gap-3 h-auto rounded-lg bg-green-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 text-green-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                </svg>
                                <div className="w-auto h-auto">
                                    <h1 className="text-xl font-bold">Payment card</h1>
                                    <p className='text-slate-500'>Direct payment and payment card</p>
                                </div>
                            </div>
                            <input placeholder='Payment card code' className="text-blue-900 inputBUY bg-slate-100 w-full p-4 rounded-lg outline-none" type="text" />
                        </div>
                    </div>
                    <div className="w-full h-auto p-4 rounded-lg bg-white shadow-lg mt-4">
                        <button onClick={() => {
                            let value = document.querySelector(".inputBUY").value;
                            if (value === "") {
                                document.querySelector(".inputBUY").style.border = "1px solid red";
                            } else {
                                document.querySelector(".inputBUY").style.border = "1px solid green";
                                // fetch("https://ecommerce.routemisr.com/api/v1/orders", {
                                //     method: "POST",
                                //     headers: {
                                //         'Content-Type': 'application/json',
                                //         "token": localStorage.getItem("token")
                                //     },
                                //     body: JSON.stringify({
                                //         "productId": id,
                                //         "paymentId": value
                                //     })
                                // }).then((res) => res.json()).then((d) => {
                                //     NotificationManager.success('has been added successfully', 'The product .');
                                // })
                            }
                        }} className="bg-blue-500 w-full text-2xl  text-white  px-5 py-3 rounded-md ">Buy</button>
                    </div>
                </div>
            </div>
            <div style={{ zIndex: "70", opacity: "0" }} className="w-20 h-20  rounded-lg shadow-2xl transition-opacity pointer-events-none overflow-hidden imgCa_Pr  fixed top-0 right-0 bg-white ">
                <img className='  w-full h-full' src="" alt="" />
            </div>
        </>
    )
}
