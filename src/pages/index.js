import Hero from '@/components/Home/Hero'
import ServiceSlider from '@/components/Home/ServiceSlider'
import StaticImage from '@/components/Home/StaticImage'
import StickyWork from '@/components/Home/StickyWork'
import React from 'react'

const index = () => {
  return (
    <>
      <Hero/>
      <StaticImage />
      <StickyWork />
      <ServiceSlider/>
    </>
  )
}

export default index