import React from 'react';
import '../../assets/styles/AboutStyles.css';
import { useNav } from '../customHooks/useNav';
import Header from '../header/Header';
import AboutUs from '../../assets/images/aboutUs.svg'
import AboutUsSub from './AboutUsSub';

const AboutSection = () => {


    const aboutRef = useNav('About Us')
    return (
        <>
            <section className='aboutContainer' ref={aboutRef} id='aboutContainer'>
                <article>
                    <Header title={'About Us'} padding='25px 0 25px 0' />
                    <p className='text'>
                        Proaktif’s platform facilitates endless energy possibilities for households and businesses in the
                        developed and developing world. Through our platform, households in the developed world and Small
                        and Medium Scale Enterprises (SMEs) in the developing world can reduce their energy expenses, get
                        better access to credit facilities and trade excess clean electricity.
                    </p>
                </article>
                <section>
                    <img src={AboutUs} alt='poster' />
                </section>
            </section>
            <section>
                <AboutUsSub />
            </section>
        </>
    )
}

export default AboutSection