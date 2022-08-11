import React from 'react';
import { useNav } from '../customHooks/useNav';
import '../../assets/styles/HomeStyles.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SlideOne from '../../assets/images/save3.jpeg';
import SlideTwo from '../../assets/images/credit2.jpeg';
import SlideThree from '../../assets/images/slideThree.svg';
import SlideIndicator from './SlideIndicator';


const fadeImages = [
    {
        url: SlideOne,
        caption: 'Optimize and reduce your electricity consumption ',
        indicator: <SlideIndicator backgroundLeft={'#fff'} />
    },
    {
        url: SlideTwo,
        caption: 'Improve your credit access as a low-income household in developed countries and  SMEs in developing countries',
        indicator: <SlideIndicator backgroundCenter={'#fff'} />
    },
    {
        url: SlideThree,
        caption: 'Trade excess clean energy',
        indicator: <SlideIndicator backgroundRight={'#fff'} />
    },
];
const properties = {
    transitionDuration: 1000,
    infinite: true,
    arrows: true
}

const HeroSection = () => {

    const homeRef = useNav('Home');
    return (
        <>
            <section className='homeContainer' ref={homeRef} id='homeContainer'>
                <div className="slide-container">
                    <Fade {...properties}>
                        {fadeImages.map((fadeImage, index) => (
                            <div className="each-fade animate__animated animate__fadeIn" key={index}>
                                <div className="image-container" style={{ backgroundImage: `${fadeImage.url}` }}>
                                    <img src={fadeImage.url} className="carouselImage" alt='poster' />
                                </div>
                                <div className='homeContainerOverlay'>
                                    <div className='animate__animated animate__fadeInUp  animate__delay-2s'>
                                        <p>{fadeImage.caption}</p>
                                    </div>
                                    <div className='animate__animated animate__fadeInUp indicatorCard  animate__delay-4s'>
                                        {fadeImage.indicator}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>
            </section>
        </>
    )
}

export default HeroSection