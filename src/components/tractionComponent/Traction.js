import React from 'react'
import { useNav } from '../customHooks/useNav'
import '../../assets/styles/TractionStyles.css';
import TracOne from '../../assets/images/tracOne.png'
import TracTwo from '../../assets/images/tracTwo.png'
import TracThree from '../../assets/images/tracThree.png'
import TracFour from '../../assets/images/tracFour.png'
import TracFive from '../../assets/images/tracFive.jpg'




const TractionSection = () => {



    const goToEpic = () => {

        window.location.href = 'https://epic.charlotte.edu/image-gallery/epic-innovator-winners';
    }
    const goToGrid = () => {

        window.location.href = 'https://gridforward.org/conference/gridfwd-seattle/';
    }
    const goToCorps = () => {

        window.location.href = 'https://entrepreneurship.charlotte.edu/students/ventureprise-launch-nsf-i-corps';
    }
    const goToNode = () => {

        window.location.href = 'https://entrepreneurship.charlotte.edu/node/739';
    }
    const goToMIT = () => {

        window.location.href = 'https://www.linkedin.com/feed/update/urn:li:activity:6915649837874991104/';
    }


    const tractionRef = useNav('Traction')
    return (
        <>
            <section ref={tractionRef} id={'tractionContainer'} className='tractionContainer'>
                <section className='tractionLeft'>
                    <p>
                        Our Tractions
                    </p>
                </section>
                <section className='tractionRight'>
                    <div className='imageCardHolder'>
                        <img src={TracThree} alt='traction' />
                        <span className='imageCardHolderOver'>
                            <div>
                                <p className='imageCardTitle'>EPIC Innovators </p>
                                <p className='imageCardLink' onClick={goToEpic}>Visit</p>
                            </div>
                        </span>
                    </div>
                    <div className='imageCardHolder'>
                        <img src={TracFour} alt='traction' />
                        <span className='imageCardHolderOver'>
                            <div>
                                <p className='imageCardTitle'>Grid Forward Seattle 2022</p>
                                <p className='imageCardLink' onClick={goToGrid}>Visit</p>
                            </div>
                        </span>
                    </div>
                    <div className='imageCardHolder'>
                        <img src={TracOne} alt='traction' />
                        <span className='imageCardHolderOver'>
                            <div>
                                <p className='imageCardTitle'>NSF I-Corps Ventureprise</p>
                                <p className='imageCardLink' onClick={goToCorps}>Visit</p>
                            </div>
                        </span>
                    </div>
                    <div className='imageCardHolder'>
                        <img src={TracTwo} alt='traction' />
                        <span className='imageCardHolderOver'>
                            <div>
                                <p className='imageCardTitle'>Charlotte Venture Challenge</p>
                                <p className='imageCardLink' onClick={goToNode}>Visit</p>
                            </div>
                        </span>
                    </div>
                    <div className='imageCardHolder'>
                        <img src={TracFive} alt='traction' />
                        <span className='imageCardHolderOver'>
                            <div>
                                <p className='imageCardTitle'>MIT Africa Innovates Conference</p>
                                <p className='imageCardLink' onClick={goToMIT}>Visit</p>
                            </div>
                        </span>
                    </div>
                </section>
            </section>
        </>
    )
}

export default TractionSection