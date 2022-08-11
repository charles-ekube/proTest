import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import PasswordShow from '../../assets/images/svg/PasswordShow';
import PasswordHide from '../../assets/images/svg/PasswordHide';
import '../../assets/styles/AuthStyles.css';
import CustomButton from '../../utils/CustomButton';
import CustomInput from '../../utils/CustomInput';
import AuthCard from '../../components/dashboard/AuthCard';
import AuthHeader from '../../components/dashboard/AuthHeader';
import DashContainer from '../../components/dashboard/DashContainer';
import Loading from '../../utils/Loading';
import { connect, } from 'react-redux';
import { toast } from 'react-toastify';
import { login } from '../../redux/actions/AuthActions';


const Login = (props) => {

    const [state, setState] = useState({
        showPassword: false, checked: false, loading: false,
    })
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const togglePassword = () => {
        if (state.showPassword) {
            setState((prevState) => ({ ...prevState, showPassword: false }))
        } else {
            setState((prevState) => ({ ...prevState, showPassword: true }))
        }
    }



    const renderLoading = () => {
        if (state.loading) {
            return (
                <Loading />
            )
        }
    }

    const submit = async () => {
        const obj = { email, password }
        console.log(obj)
        setState({ ...state, loading: true })
        try {
            const res = await props.login(obj)
            console.log('res', res)
            setState({ ...state, loading: false })
            toast.success(res.result, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate('/dashboard');
        } catch (error) {
            console.log('catched error ', error)
            setState({ ...state, loading: false })
            const errorMessage = error[1].result
            toast.error(errorMessage, {
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
                    <AuthHeader title={'Login'} subTitle={'Please log into your account and start the adventure'} />
                    <CustomInput label={'Email Address'} onChange={e => setEmail(e.target.value)} type={'email'} />
                    <CustomInput label={'Password'} onClickIcon={togglePassword} type={state.showPassword ? 'text' : 'password'}
                        icon={state.showPassword ? <PasswordHide /> : <PasswordShow />} customStyle={{ marginBottom: '5px' }}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <CustomButton title={'Login'} customStyle={{ backgroundColor: 'rgba(52, 115, 239, 1)', marginBottom: '20px', marginTop: '40px' }} onClick={submit} color={'#fff'} />

                    <div style={{ textAlign: 'center' }}>
                        <p className={'f14 black regularText'}>Don't have an account? <Link to={'/register'}><span className={'linkText'}>Register</span></Link></p>
                    </div>
                </AuthCard>
            </DashContainer>

        </main>
    )
}

export default connect(null, { login })(Login)