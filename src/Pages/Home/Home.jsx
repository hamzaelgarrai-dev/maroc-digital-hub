import React from 'react'
import Hero from './Hero'
import CarouselStartup from './CarouselStartup'
import StartupList from './StartupList'
import StartupCta from './StartupCta'
import UpcomingEvent from './UpcomingEvent'
import StartupOfMonth from './StartupOfMonth'

function Home() {
  return (
    <>
    <Hero/>
    <CarouselStartup/>
    <StartupList/>
    <StartupCta/>
    <UpcomingEvent/>
    <StartupOfMonth/>
    </>
  )
}

export default Home