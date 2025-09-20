import React from 'react'

const Footer = () => {
  return (
<div className="w-full p-10 flex bg-[#BBB86D] items-stretch">
  <div className="aspect-[3/4]">
    <img className="w-full h-full object-cover" src="/HomePage/Static image.png" alt="" />
  </div>
  <div className="w-full  flex flex-col justify-between pl-10">
    <div className="w-full flex justify-between">
      <div className="text-4xl space-y-4 uppercase">
        <h2 className="italic">Home</h2>
        <p>the studio</p>
        <p>our work</p>
        <p>contact</p>
      </div>
      <div className="uppercase">
        <p>instagram</p>
        <p>linkedin</p>
      </div>
    </div>
    <div className="w-full uppercase leading-none">
      <p className="w-full text-[6.6vw]">hello@arujak.com</p>
    </div>
  </div>
</div>

  )
}

export default Footer