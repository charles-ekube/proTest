import React from 'react'
import { useNav } from '../customHooks/useNav'
import Header from '../header/Header'
import ContactS from '../../assets/images/dashboard.png'


import '../../assets/styles/ContactStyles.css';
import CustomInput from '../../utils/CustomInput';
import Button from '../buttons/Buttons';

const ContactSection = () => {

    const contactRef = useNav('Contact')
    return (
        <>
            <section className='contactContainer' ref={contactRef} id='contactContainer'>
                <section className='leftContainer'>
                    <div className='leftText'>
                        <p>We would love to hear from you.</p>
                    </div>
                    <div className='leftImage'>
                        <img src={ContactS} alt='poster' style={{ width: '100%', height: '100%', borderRadius: '12px' }} />
                    </div>
                </section>
                <section className='rightsContainer'>
                    <Header title={'Contact Us'} />
                    <form className='formContainer'>

                        <div className='inputsGrid'>
                            <CustomInput label={'First Name'} placeholder={'Enter your first name'} />
                            <CustomInput label={'Last Name'} placeholder={'Enter your last name'} />
                        </div>
                        <div className='inputsGrid'>
                            <CustomInput label={'Email Address'} placeholder={'Enter your email address'} />
                            <CustomInput label={'Phone Number'} placeholder={'Enter your phone number'} />
                        </div>
                        <div>
                            <CustomInput label={'Message'} placeholder={'Enter your message'} />
                        </div>
                        <div>
                            <Button title={'Send message'} background={'rgba(52, 115, 239, 1)'} color={'#fff'} border={'none'} />
                        </div>
                    </form>
                    <p className='ft'>
                        PORTAL, 9319 Robert D. Snyder Rd, Charlotte, NC 28223 || info@theproaktif.com
                    </p>
                </section>

            </section>
        </>
    )
}

export default ContactSection