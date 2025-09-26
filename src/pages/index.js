import IntroLoader from '@/components/common/IntroLoader'
import Hero from '@/components/Home/Hero'
import ReviewSection from '@/components/Home/ReviewSection'
import ServiceSlider from '@/components/Home/ServiceSlider'
import StaticImage from '@/components/Home/StaticImage'
import StickyWork from '@/components/Home/StickyWork'
import React from 'react'

const index = () => {
  return (
    <>
      <IntroLoader />
      <Hero />
      <StaticImage />
      <StickyWork />
      <ServiceSlider />
      <ReviewSection />
    </>
  )
}

export default index