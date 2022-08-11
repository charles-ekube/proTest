import React from 'react'
import AboutSection from '../components/aboutComponent/About'
import ContactSection from '../components/contactComponent/Contact'
import Download from '../components/downloadComponent/Download'
import HeroSection from '../components/heroComponent/Hero'
import HowSection from '../components/howComponent/How'
import TractionSection from '../components/tractionComponent/Traction'

const Main = () => {
    return (
        <>
            <main>
                <HeroSection />
                <AboutSection />
                <HowSection />
                <Download />
                <TractionSection />
                <ContactSection />
            </main>
        </>
    )
}

export default Main