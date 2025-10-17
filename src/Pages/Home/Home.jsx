import React from 'react'
import Hero from './Hero'
import CarouselStartup from './CarouselStartup'
import StartupList from './StartupList'
import StartupCta from './StartupCta'
import StartupOfMonth from './StartupOfMonth'
import UpcomingEventList from './UpcomingEventList'

function Home() {
  return (
    <>
    <Hero/>
    <CarouselStartup/>
    <StartupList/>
    <StartupCta/>
    <UpcomingEventList/>
    <StartupOfMonth/>
    </>
  )
}

export default Home