import React from 'react'

const StickyWork = () => {
    return (
        <div>
            <div className="w-full px-10 pt-20">
                <div className="w-full uppercase text-8xl space-y-5 ">
                    <div className="flex gap-2">
                        <p>From</p>
                        <h2>Homes</h2>
                    </div>
                    <div className=" w-full flex center">
                        <p>To WorkPlaces,</p>
                    </div>
                    <div className="flex justify-end gap-2">
                        <h2>designed</h2>
                        <p>to flow</p>
                    </div>

                </div>

                <div className="w-full  grid mt-20 grid-cols-5 gap-5">
                    <div className="aspect-square w-full overflow-hidden">
                        <img className='w-full h-full object-cover' src="https://cdn.fame-estate.com/six_70549f943a.png" alt="" />
                    </div>
                    <div className="aspect-square w-full overflow-hidden">
                        <img className='w-full h-full object-cover' src="https://cdn.fame-estate.com/1_02b2655de9.jpg" alt="" />
                    </div>
                    <div className="aspect-square w-full overflow-hidden">
                        <img className='w-full h-full object-cover' src="https://cdn.fame-estate.com/medium_service2_db4b58f8b4.png" alt="" />
                    </div>
                    <div className="aspect-square w-full overflow-hidden">
                        <img className='w-full h-full object-cover' src="https://cdn.fame-estate.com/medium_service_01a01267d4.png" alt="" />
                    </div>
                    <div className="aspect-square w-full overflow-hidden">
                        <img className='w-full h-full object-cover' src="https://cdn.fame-estate.com/medium_damac_2cd1f341f0.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StickyWork