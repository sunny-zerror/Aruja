import React from 'react'
import Marquee from 'react-fast-marquee'

const index = () => {
    return (
        <div>
            <div className="w-full relative h-screen flex  ">

                


                <div className=" absolute top-5 left-10">
                    <a href="/">
                        <img src="/icons/logo_black.svg" alt="" />
                    </a>
                </div>
                <div className="h-full w-[25%]">
                    <img className='w-full  h-full object-[17%] object-cover' src="/Images/ContactPageImg.webp" alt="" />
                </div>
                <div className="h-full w-[75%] relative flex items-end justify-end">
                    <div className="absolute text-[6vw] uppercase overflow-hidden scroller_none  w-full top-[25%]">
                    <Marquee gradient gradientWidth={100} className='h-full w-full scroller_none ' >
                        <p className='h-full ml-[15vw]'>
                            chew on this
                        </p>
                        <p className='h-full ml-[15vw]'>
                            chew on this
                        </p>
                        <p className='h-full ml-[15vw]'>
                            chew on this
                        </p>
                    </Marquee>
                </div>

                    <div className="w-full font-semibold space-y-10 uppercase p-28">
                        <div className="flex w-full justify-between">

                            <div className="w-1/2">
                                <p className='text-sm'>Write US</p>
                                <p className='text-2xl mt-1'>hello@arujak.com</p>
                            </div>
                            <div className="w-1/2">
                                <p className='text-sm'>find US</p>
                                <p className='text-2xl mt-1'>H.no arujak mumbai, <br />india</p>
                            </div>
                        </div>
                        <div className="flex w-full justify-between">

                            <div className="w-1/2">
                                <p className='text-sm'>talk to US</p>
                                <p className='text-2xl mt-1'>+91 12345 67890</p>
                            </div>


                            <div className=" w-1/2 uppercase flex flex-col gap-y-2">
                                <button>
                                    <div className='  relative w-fit group overflow-hidden uppercase flex items-center gap-2'>
                                        <div className="w-[100%] group-hover:right-[-100%]   transition-all duration-300 h-[1px]  bg-[#2E2D2B]  bottom-0.5 right-0 absolute"></div>
                                        <p>
                                            instagram
                                        </p>

                                    </div>
                                </button>
                                <button>
                                    <div className=' relative w-fit group overflow-hidden uppercase flex items-center gap-2'>
                                        <div className="w-[100%] group-hover:right-[-100%]   transition-all duration-300 h-[1px]  bg-[#2E2D2B]  bottom-0.5 right-0 absolute"></div>
                                        <p>
                                            linkedIn
                                        </p>

                                    </div>
                                </button>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index