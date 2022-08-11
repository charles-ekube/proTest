import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../../assets/styles/MobileStyles.css';
import MobileOne from '../../assets/images/download.jpeg';
import MobileTwo from '../../assets/images/equipment.jpeg';
import MobileThree from '../../assets/images/paybills.jpeg';
import MobileFour from '../../assets/images/welcome.jpeg';
import MobileFive from '../../assets/images/services.jpeg';
import PlayStore from '../../assets/images/appSt.svg';
import AppStore from '../../assets/images/appSt2.svg';






const fadeImages = [
    {
        url: MobileOne,
        caption: 'Download the mobile app / Create your account in less than a minute. ',
    },
    {
        url: MobileTwo,
        caption: 'Register your resource / facility.',
    },
    {
        url: MobileThree,
        caption: 'Tell us when you pay your bills',
    },
    {
        url: MobileFour,
        caption: 'Get feedback from our team within 24hrs.',

    },
    {
        url: MobileFive,
        caption: 'Select the service you are interested in and qualified for.',

    },
];
const properties = {
    transitionDuration: 1000,
    infinite: true,
    arrows: true
}


const Download = () => {
    return (
        <>
            <div className="slide-container">
                <Fade {...properties}>
                    {fadeImages.map((fadeImage, index) => (
                        <div className="each-fade animate__animated animate__fadeIn" key={index}>
                            <section className='mobileSlideContainer'>
                                <div className='mobileTextContainer'>
                                    <p>
                                        {fadeImage.caption}
                                    </p>
                                    <div className='stores'>
                                        <img src={PlayStore} alt='link' />
                                        <img src={AppStore} alt='link' />
                                    </div>
                                </div>
                                <div className='mobileImageContainer'>
                                    <img src={fadeImage.url} alt='phone' />
                                </div>
                            </section>
                        </div>
                    ))}
                </Fade>
            </div>
        </>
    )
}

export default Download