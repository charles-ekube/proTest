import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PasswordHide from '../../assets/images/svg/PasswordHide';
import PasswordShow from '../../assets/images/svg/PasswordShow';
import '../../assets/styles/AuthStyles.css';
import AuthCard from '../../components/dashboard/AuthCard';
import AuthHeader from '../../components/dashboard/AuthHeader';
import DashContainer from '../../components/dashboard/DashContainer';
import CustomButton from '../../utils/CustomButton';
import CustomInput from '../../utils/CustomInput';


const ResetPassword = (props) => {

    const [state, setState] = useState({
        showPassword: false, checked: false,
    })

    const togglePassword = () => {
        if (state.showPassword) {
            setState((prevState) => ({ ...prevState, showPassword: false }))
        } else {
            setState((prevState) => ({ ...prevState, showPassword: true }))
        }
    }
    return (
        <main className='container'>
            <DashContainer>
                <AuthCard>
                    <AuthHeader title={'Reset Password 🔒'} subTitle={'Your new password must be different from previously used passwords'} />
                    <CustomInput label={'Password'} onClickIcon={togglePassword} type={state.showPassword ? 'text' : 'password'}
                        icon={state.showPassword ? <PasswordHide /> : <PasswordShow />}
                    />
                    <CustomButton title={'Send email link'} customStyle={{ backgroundColor: 'rgba(52, 115, 239, 1)', marginTop: '25px' }} color={'#fff'} />
                    <div style={{ margin: '15px', textAlign: 'center' }}>
                        <Link to={'/login'}>
                            <p className='linkText'>Back to login</p>
                        </Link>
                    </div>
                </AuthCard>
            </DashContainer>
        </main>
    )
}

export default ResetPassword