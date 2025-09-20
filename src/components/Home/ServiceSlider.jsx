import React from 'react'

const ServiceSlider = () => {
    return (
        <div>
            <div className="w-full center mt-20 text-[#FFFDF6] h-screen relative">
                <div className="absolute h-full w-full">
                    <img className='w-full h-full object-cover' src="/HomePage/service slider/img1.jpg" alt="" />
                </div>
                <div className="absolute w-[90%] h-[85%] bg-[#454738] z-[9] p-8">
                    <div className=" w-full h-[40%]  pb-5 flex flex-col justify-between">
                        <div className=" flex  justify-between">
                            <div className="flex gap-2 uppercase text-4xl">
                                <p>Our</p>
                                <h2 className='italic'>Services</h2>
                            </div>
                            <div className="flex gap-2 items-end">
                                <p className='text-7xl'>01/</p>
                                <p className='text-5xl opacity-50'>04</p>
                            </div>
                        </div>
                        <div className=" flex items-end justify-between">
                            <p className='text-5xl uppercase'>Residential Interior </p>
                            <div className="w-[30%] leading-none">
                                <p className=''>End-to-end spatial design and structural planning that shape how people live and work.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[60%] w-full">
                        <img className='w-full h-full object-cover ' src="/HomePage/service slider/img1.jpg" alt="" />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ServiceSlider