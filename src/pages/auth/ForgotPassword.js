import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/styles/AuthStyles.css';
import AuthCard from '../../components/dashboard/AuthCard';
import AuthHeader from '../../components/dashboard/AuthHeader';
import DashContainer from '../../components/dashboard/DashContainer';
import CustomButton from '../../utils/CustomButton';
import CustomInput from '../../utils/CustomInput';
import Loading from '../../utils/Loading';
import { toast } from 'react-toastify';
import { forgotPassword } from '../../redux/actions/AuthActions';


const ForgotPassword = (props) => {


    const { userData, loadingUser } = useSelector(state => state.auth)

    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const disabled = () => {
        if (email === '') {
            return true
        }
        return false
    }

    const renderLoading = () => {
        if (loadingUser) {
            return (
                <Loading />
            )
        }
    }

    const submit = async () => {
        const obj = { email }
        try {
            const res = await props.forgotPassword(obj)
            // console.log('res', res)
            const message = res?.result
            toast.success(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        } catch (error) {
            // console.log('we', error)
            const message = error.response?.data?.result
            toast.error(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }



    return (
        <main className='container'>
            {renderLoading()}
            <DashContainer>
                <AuthCard>
                    <AuthHeader title={'Forgot password? 🔒'} subTitle={`Enter your email and we'll send you instructions to reset your password`} />
                    <CustomInput label={'Email Address'} onChange={e => setEmail(e.target.value)} type={'email'} value={email} />
                    <CustomButton title={'Send email link'} customStyle={{ backgroundColor: 'rgba(52, 115, 239, 1)', marginBottom: '20px' }} color={'#fff'} onClick={submit} />
                    <div style={{ textAlign: 'center' }}>
                        <Link to={'/login'}><span className={'linkText'}>Back to Login</span></Link>
                    </div>
                </AuthCard>
            </DashContainer>
        </main >
    )
}

export default connect(null, { forgotPassword })(ForgotPassword)