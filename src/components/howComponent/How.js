import React, { useState, Suspense } from 'react'
import '../../assets/styles/HowStyles.css';
import { useNav } from '../customHooks/useNav';
import Header from '../header/Header'
import { MdKeyboardArrowDown } from 'react-icons/md';
import Energy from '../../assets/images/energy.svg';
import Credit from '../../assets/images/credit.svg';
import Trade from '../../assets/images/trade.svg';
import Button from '../buttons/Buttons';


const HowSection = () => {

    const howRef = useNav('How It Works');

    const [state, setState] = useState({
        showOne: true, showTwo: false, showThree: false
    })

    const toggleOne = () => {
        if (state.showOne) {
            setState((prevState) => ({ ...prevState, showOne: false, }))
        } else {
            setState((prevState) => ({ ...prevState, showOne: true, showTwo: false, showThree: false }))
        }
    }
    const toggleTwo = () => {
        if (state.showTwo) {
            setState((prevState) => ({ ...prevState, showTwo: false, }))
        } else {
            setState((prevState) => ({ ...prevState, showOne: false, showTwo: true, showThree: false }))
        }
    }
    const toggleThree = () => {
        if (state.showThree) {
            setState((prevState) => ({ ...prevState, showThree: false, }))
        } else {
            setState((prevState) => ({ ...prevState, showOne: false, showTwo: false, showThree: true }))
        }
    }

    const goToLogin = () => {

        window.location.href = 'https://proaktifenergymanagement.appgyverapp.com/';
    }


    // get the scroll height of the window 
    const scrollHeight = document.body.scrollHeight - 1000;

    const goToContact = () => {

        // scroll to the bottom of webpage
        window.scrollTo(0, scrollHeight);
    }

    return (
        <>
            <section className='howContainer' ref={howRef} id='howContainer'>
                <div style={{ display: 'flex', justifyContent: 'center', }}>
                    <Header title={'What Proaktif can do for you'} padding={'30px 0'} />
                </div>
                <section className='howGrid'>
                    <section>
                        <div className={state.showOne ? 'active' : 'inactive'}>
                            <p onClick={toggleOne} className={state.showOne ? 'activeToggler' : 'inactiveToggler'}>
                                Energy Optimization
                                {!state.showOne &&
                                    <span><MdKeyboardArrowDown /></span>}
                            </p>
                            {state.showOne &&
                                <div>
                                    <p className='inner'>
                                        Our energy management devices, powered by our proprietary energy management algorithms, reduces your energy bills without sacrificing your comfort
                                    </p>
                                    <div className='btnFlex'>
                                        <div style={{ marginRight: '10px' }}>
                                            <Button title={'Sign up'} background={'rgba(52, 115, 239, 1)'} color={'#fff'} border={'none'} onClick={goToLogin} />
                                        </div>
                                        <div>
                                            <Button title={'Contact us'} background={'#fff'} color={'rgba(52, 115, 239, 1)'} border={'0.5px solid rgba(52, 115, 239, 1)'} onClick={goToContact} />
                                        </div>
                                    </div>
                                </div>

                            }
                        </div>
                        <div className={state.showTwo ? 'active' : 'inactive'}>
                            <p onClick={toggleTwo} className={state.showTwo ? 'activeToggler' : 'inactiveToggler'}>
                                Credit Improvement
                                {!state.showTwo &&
                                    <span><MdKeyboardArrowDown /></span>}
                            </p>
                            {state.showTwo &&
                                <div>
                                    <p className='inner'>We share utility bill payments for American households with credit bureaus to improve credit scores.
                                        For African SMEs,
                                        we provide e-credit ratings, based on your energy expenses and equipment profile,
                                        which we share with our third party lenders to provide better interest rates on loans for your business.</p>
                                    <div className='btnFlex'>
                                        <div style={{ marginRight: '10px' }}>
                                            <Button title={'Sign up'} background={'rgba(52, 115, 239, 1)'} color={'#fff'} border={'none'} onClick={goToLogin} />
                                        </div>
                                        <div>
                                            <Button title={'Contact us'} background={'#fff'} color={'rgba(52, 115, 239, 1)'} border={'0.5px solid rgba(52, 115, 239, 1)'} onClick={goToContact} />
                                        </div>
                                    </div>
                                </div>}
                        </div>
                        <div className={state.showThree ? 'active' : 'inactive'}>
                            <p onClick={toggleThree} className={state.showThree ? 'activeToggler' : 'inactiveToggler'}>
                                Trade Clean Energy
                                {!state.showThree &&
                                    <span><MdKeyboardArrowDown /></span>}
                            </p>
                            {state.showThree &&
                                <div>
                                    <p className='inner'>
                                        Through our platform and partnerships with distribution utilities in Africa,
                                        you can share excess electricity from your clean energy resources with your neighbors to make additional income
                                    </p>
                                    <div className='btnFlex'>
                                        <div style={{ marginRight: '10px' }}>
                                            <Button title={'Sign up'} background={'rgba(52, 115, 239, 1)'} color={'#fff'} border={'none'} onClick={goToLogin} />
                                        </div>
                                        <div>
                                            <Button title={'Contact us'} background={'#fff'} color={'rgba(52, 115, 239, 1)'} border={'0.5px solid rgba(52, 115, 239, 1)'} onClick={goToContact} />
                                        </div>
                                    </div>
                                </div>

                            }
                        </div>
                    </section>
                    <section>
                        {state.showOne && <Suspense fallback={'Loading...'}>
                            <div className='animate__animated animate__fadeIn'>
                                <img src={Energy} alt='poster' style={{ width: '100%', height: '100%' }} />
                            </div>
                        </Suspense>}
                        {state.showTwo && <Suspense fallback={'Loading...'}>
                            <div className='animate__animated animate__fadeIn'>
                                <img src={Credit} alt='poster' style={{ width: '100%', height: '100%' }} />
                            </div>
                        </Suspense>}
                        {state.showThree && <Suspense fallback={'Loading...'}>
                            <div className='animate__animated animate__fadeIn'>
                                <img src={Trade} alt='poster' style={{ width: '100%', height: '100%' }} />
                            </div>
                        </Suspense>}

                    </section>
                </section>

            </section>
        </>
    )
}

export default HowSection