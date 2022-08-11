import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../../assets/styles/SettingsStyles.css';
import CustomInput from '../../utils/CustomInput';
import CustomButton from '../../utils/CustomButton';
import PasswordHide from '../../assets/images/svg/PasswordHide';
import PasswordShow from '../../assets/images/svg/PasswordShow';
import Loading from '../../utils/Loading';
import { toast } from 'react-toastify';
import { resetPassword } from '../../redux/actions/AuthActions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';




function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Settings = (props) => {

    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(false);
    const [old_password, setOldPassword] = useState('')
    const [new_password, setNewPassword] = useState('')
    const [confirm_new_password, setConfirmNewPassword] = useState('')
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [state, setState] = useState({
        showOldPassword: false, showNewPassword: false, showConfirmPassword: false, showModal: false, editRole: false,
    })

    const toggleOldPassword = () => {
        if (state.showOldPassword) {
            setState((prevState) => ({ ...prevState, showOldPassword: false }))
        } else {
            setState((prevState) => ({ ...prevState, showOldPassword: true }))
        }
    }


    const toggleNewPassword = () => {
        if (state.showNewPassword) {
            setState((prevState) => ({ ...prevState, showNewPassword: false }))
        } else {
            setState((prevState) => ({ ...prevState, showNewPassword: true }))
        }
    }

    const toggleConfirmPassword = () => {
        if (state.showConfirmPassword) {
            setState((prevState) => ({ ...prevState, showConfirmPassword: false }))
        } else {
            setState((prevState) => ({ ...prevState, showConfirmPassword: true }))
        }
    }


    const renderLoading = () => {
        if (loading) {
            return <Loading />
        }
    }


    const submit = async () => {
        const obj = { old_password, new_password, confirm_new_password }
        console.log(obj)
        setLoading(true)
        try {
            const res = await props.resetPassword(obj)
            console.log('res', res)
            setLoading(false)
            toast.success(res.result, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            // navigate('/dashboard');
        } catch (error) {
            console.log('catched error ', error)
            setLoading(false)
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
        <>
            <section className='settingsContainer'>
                {renderLoading()}
                <div style={{ marginBottom: '40px' }}>
                    <p className='settingsHeader'>Settings</p>
                </div>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Change Password" {...a11yProps(0)} className='tabFonts' />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <section className='changePasswordContainer'>
                            <div className={'detailsContainer mb40'}>
                                <CustomInput label={'Old password'} onClickIcon={toggleOldPassword} type={state.showOldPassword ? 'text' : 'password'}
                                    icon={state.showOldPassword ? <PasswordHide /> : <PasswordShow />} customStyle={{ marginBottom: '5px' }}
                                    onChange={(e) => setOldPassword(e.target.value)} value={old_password}
                                />
                            </div>
                            <div className={'detailsContainer'}>
                                <CustomInput label={'New password'} onClickIcon={toggleNewPassword} type={state.showNewPassword ? 'text' : 'password'}
                                    icon={state.showNewPassword ? <PasswordHide /> : <PasswordShow />} customStyle={{ marginBottom: '5px', }}
                                    onChange={(e) => setNewPassword(e.target.value)} value={new_password}
                                />
                                <CustomInput label={'Confirm new password'} onClickIcon={toggleConfirmPassword} type={state.showConfirmPassword ? 'text' : 'password'}
                                    icon={state.showConfirmPassword ? <PasswordHide /> : <PasswordShow />} customStyle={{ marginBottom: '5px' }}
                                    onChange={(e) => setConfirmNewPassword(e.target.value)} value={confirm_new_password}
                                />
                            </div>
                            <div>
                                <CustomButton title={'Save changes'} color={'#FFF'} customStyle={{ background: '#3473EF', width: '158px', marginTop: '30px' }} onClick={submit} />
                            </div>
                        </section>
                    </TabPanel>

                </Box>

            </section>
        </>
    )
}

export default connect(null, { resetPassword })(Settings)