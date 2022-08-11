import React from 'react'
import HowCard from '../cards/HowCard';
import '../../assets/styles/HowStyles.css';



const AboutUsSub = () => {

    return (
        <>
            <section className='aboutSubContainer'>
                <div className='cardGrid'>
                    <HowCard content={'Percentage of revenue spent by African SMEs on energy.'} title={'21%'} />
                    <HowCard content={'Percentage of annual income spent by low income American households on energy bills.'} title={'17%'} />
                    <HowCard content={'Percentage of Americans with credit scores less than 600. African SMEs also still have limited access to credit facilities.'} title={'15.5%'} />

                </div>
            </section>
        </>
    )
}

export default AboutUsSub