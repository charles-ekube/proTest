import React, { useEffect, useState } from 'react'
import CustomInputDrop from '../../utils/CustomInputDropDown'
import PageTitle from '../../utils/PageTitle'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomTable from '../../utils/CustomTable';
import CustomTableRows from '../../utils/CustomTableRows';
import LoanTable from '../tables/LoanTable';
import CustomInput from '../../utils/CustomInput';
import SearchInput from '../../components/searchComponent/SearchInput';
import { States } from '../../utils/States';
import { connect, useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loading from '../../utils/Loading';
import CustomButton from '../../utils/CustomButton';
import TopTableNav from '../../components/setup/TopTableNav';
import TopTableSubNav from '../../components/setup/TopTableSubNav';
import { addPreference, getPreference, getInterest, addInterest } from '../../redux/actions/LoanActions';
import http from '../../utils/Utils';
import '../../assets/styles/SetupStyles.css';
import SetupTableRow from '../../components/setup/SetupTableRow';
import CustomModal from '../../components/setup/CustomModal';
import AuthCard from '../../components/dashboard/AuthCard';
import SetupBizRow from '../../components/setup/SetupBizRow';






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


const Setup = (props) => {



    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const dispatch = useDispatch()
    const { preference_data, interest_data, get_preference_data, get_loan_data, } = useSelector(state => state.loans)
    console.log('d', get_preference_data)


    const [state, setState] = useState({
        filterDrop: false, clusterOptions: false, devicesOptions: false, energyAudit: false, auditDropDown: false, loading: false,
        preference: {}, loans: {}, modal: false, businessModal: false
    })
    const [selectedValue, setSelectedValue] = useState(null)
    const [min_credit_score, setCreditState] = useState('')

    const [I_amount_A_A, setI_amount_A_A] = useState('')
    const [I_interest_A_A, setI_interest_A_A] = useState('')
    const [I_duration_A_A, setI_duration_A_A] = useState('')
    const [I_amount_A_B, setI_amount_A_B] = useState('')
    const [I_interest_A_B, setI_interest_A_B] = useState('')
    const [I_duration_A_B, setI_duration_A_B] = useState('')
    const [I_amount_B_A, setI_amount_B_A] = useState('')
    const [I_interest_B_A, setI_interest_B_A] = useState('')
    const [I_duration_B_A, setI_duration_B_A] = useState('')
    const [I_amount_B_B, setI_amount_B_B] = useState('')
    const [I_interest_B_B, setI_interest_B_B] = useState('')
    const [I_duration_B_B, setI_duration_B_B] = useState('')

    const [B_amount_A_A, setB_amount_A_A] = useState('')
    const [B_interest_A_A, setB_interest_A_A] = useState('')
    const [B_duration_A_A, setB_duration_A_A] = useState('')
    const [B_amount_A_B, setB_amount_A_B] = useState('')
    const [B_interest_A_B, setB_interest_A_B] = useState('')
    const [B_duration_A_B, setB_duration_A_B] = useState('')
    const [B_amount_B_A, setB_amount_B_A] = useState('')
    const [B_interest_B_A, setB_interest_B_A] = useState('')
    const [B_duration_B_A, setB_duration_B_A] = useState('')
    const [B_amount_B_B, setB_amount_B_B] = useState('')
    const [B_interest_B_B, setB_interest_B_B] = useState('')
    const [B_duration_B_B, setB_duration_B_B] = useState('')




    const handleSelectChange = (e) => {
        setSelectedValue({ selectedValue: e.target.value })
    }

    const openModal = () => {
        setState({ ...state, modal: true })
    }


    const closeModal = () => {
        setState({ ...state, modal: false })
    }



    const openBusinessModal = () => {
        setState({ ...state, businessModal: true })
    }


    const closeBusinessModal = () => {
        setState({ ...state, businessModal: false })
    }

    const renderLoading = () => {
        if (state.loading) {
            return (
                <Loading />
            )
        }
    }

    useEffect(() => {
        getPreferenceData()
        getInterestData();
    }, [])

    const getPreferenceData = async () => {
        setState({ ...state, loading: true })
        try {
            const res = await props.getPreference();
            console.log('preference', res)
            setState({ ...state, loading: false, preference: res })
            // setSelectedValue(null)
        } catch (error) {
            console.log('preference data Error', error);
            setState({ ...state, loading: false })
            // setSelectedValue(null)

        }
    }

    const getInterestData = async () => {
        setState({ ...state, loading: true })
        try {
            const res = await props.getInterest();
            console.log('pre approved loan', res)
            setState({ ...state, loading: false, loans: res })
            // setSelectedValue(null)
        } catch (error) {
            console.log('pre approved loan Error', error);
            setState({ ...state, loading: false })
            // setSelectedValue(null)

        }
    }


    const addLoanData = async () => {

        const obj = {
            I_amount_A_A, I_interest_A_A, I_duration_A_A, I_amount_A_B, I_interest_A_B, I_duration_A_B, I_amount_B_A, I_interest_B_A, I_duration_B_A,
            I_amount_B_B, I_interest_B_B, I_duration_B_B, B_amount_A_A, B_interest_A_A, B_duration_A_A, B_amount_A_B, B_interest_A_B, B_duration_A_B, B_amount_B_A, B_interest_B_A, B_duration_B_A,
            B_amount_B_B, B_interest_B_B, B_duration_B_B
        }
        setState({ ...state, loading: true, modal: false })
        try {
            const res = await props.addInterest(obj)
            console.log('res', res)

            if (res) {
                getInterestData()
                getPreferenceData()
            }
            setState({ ...state, loading: false, modal: false, businessModal: false })
            toast.success(res.status, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            console.log('set approved loans error', error);
            setSelectedValue(null);
            setCreditState('')
            setState({ ...state, loading: false, modal: false, businessModal: false })
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




    const addLoanDataBusiness = async () => {

        const obj = {
            B_amount_A_A, B_interest_A_A, B_duration_A_A, B_amount_A_B, B_interest_A_B, B_duration_A_B, B_amount_B_A, B_interest_B_A, B_duration_B_A,
            B_amount_B_B, B_interest_B_B, B_duration_B_B
        }
        setState({ ...state, loading: true, modal: false })
        try {
            const res = await props.addInterest(obj)
            console.log('res', res)

            if (res) {
                getInterestData()
                getPreferenceData()
            }
            setState({ ...state, loading: false, businessModal: false })
            toast.success(res.status, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            console.log('set approved loans error', error);
            setSelectedValue(null);
            setCreditState('')
            setState({ ...state, loading: false, businessModal: false })
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



    const submit = async () => {
        const state_of_interest = selectedValue?.name
        const obj = { state_of_interest, min_credit_score }
        setState({ ...state, loading: true })

        try {
            const res = await props.addPreference(obj)
            console.log('res', res)
            if (res) {
                getPreferenceData()
            }
            setSelectedValue(null);
            setCreditState('')
            setState({ ...state, loading: false })
            toast.success(res.status, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            console.log(' add preference error', error);
            setSelectedValue(null);
            setCreditState('')
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
        <>
            <main style={{ paddingTop: '100px' }}>
                {renderLoading()}
                <section className={'pb46'}>
                    <PageTitle title={'Loan Dashboard'} />
                    <div className={'flex alignCenter justifyBetween'} style={{ width: '70%', marginTop: '40px' }}>
                        <div style={{ width: '100%', marginRight: '40px' }}>
                            <CustomInput label={'Minimum Credit Score'} onChange={e => setCreditState(e.target.value)} type={'text'} value={min_credit_score} />
                        </div>
                        <div style={{ width: '100%', marginRight: '40px' }}>
                            <SearchInput label={'User Location'} States={States} value={selectedValue} onChange={(val) => setSelectedValue(val)} prompt={'Select State...'} />
                        </div>
                        <div style={{ width: '100%' }}>
                            <CustomButton title={'Add Preference'} customStyle={{ backgroundColor: 'rgba(52, 115, 239, 1)' }} color={'#fff'} onClick={submit} />
                        </div>
                    </div>
                </section>
                <section>
                    <Box>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Individuals" {...a11yProps(0)} className={'f14 mediumText'} />
                                <Tab label="Businesses" {...a11yProps(1)} className={'f14 mediumText'} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <div>
                                <div className={'flex justifyBetween alignCenter'} style={{ padding: '20px 0' }}>
                                    <p className={'f14 mediumText capitalize'}>{get_preference_data && get_preference_data?.state_of_interest}</p>
                                    <CustomButton title={'Set PreApproved Loan'} customStyle={{ backgroundColor: 'rgba(52, 115, 239, 1)', width: '200px' }} color={'#fff'} onClick={openModal} />

                                </div>

                                <TopTableNav />
                                <TopTableSubNav />
                                <div>
                                    <SetupTableRow />
                                </div>

                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div>

                                <div className={'flex justifyBetween alignCenter'} style={{ padding: '20px 0' }}>
                                    <p className={'f14 mediumText capitalize'}>{get_preference_data && get_preference_data?.state_of_interest}</p>
                                    <CustomButton title={'Set PreApproved Loan'} customStyle={{ backgroundColor: 'rgba(52, 115, 239, 1)', width: '200px' }} color={'#fff'} onClick={openBusinessModal} />

                                </div>

                                <TopTableNav />
                                <TopTableSubNav />
                                <div>
                                    <SetupBizRow />
                                </div>

                            </div>
                        </TabPanel>
                    </Box>
                </section>
                {state.modal &&
                    <CustomModal>
                        <AuthCard>
                            <p className={'f20 boldText pb20'}>Set PreApproved Loans for Individuals</p>
                            <section>
                                <p className={'f16 mediumText pb10'}>Credit Score A and Expenses A</p>
                                <div className={'flex justifyBetween alignCenter'}>
                                    <CustomInput label={'Amount'} customStyle={{ marginRight: '10px' }} onChange={e => setI_amount_A_A(e.target.value)} type={'text'} value={I_amount_A_A} />
                                    <CustomInput label={'Interest'} customStyle={{ marginRight: '10px' }} onChange={e => setI_interest_A_A(e.target.value)} type={'text'} value={I_interest_A_A} />
                                    <CustomInput label={'Duration (Months)'} onChange={e => setI_duration_A_A(e.target.value)} type={'text'} value={I_duration_A_A} />
                                </div>
                            </section>
                            <section>
                                <p className={'f16 mediumText pb10 pt20'}>Credit Score A and Expenses B</p>
                                <div className={'flex justifyBetween alignCenter'}>
                                    <CustomInput label={'Amount'} customStyle={{ marginRight: '10px' }} onChange={e => setI_amount_A_B(e.target.value)} type={'text'} value={I_amount_A_B} />
                                    <CustomInput label={'Interest'} customStyle={{ marginRight: '10px' }} onChange={e => setI_interest_A_B(e.target.value)} type={'text'} value={I_interest_A_B} />
                                    <CustomInput label={'Duration (Months)'} onChange={e => setI_duration_A_B(e.target.value)} type={'text'} value={I_duration_A_B} />
                                </div>
                            </section>
                            <section>
                                <p className={'f16 mediumText pb10 pt20'}>Credit Score B and Expenses A</p>
                                <div className={'flex justifyBetween alignCenter'}>
                                    <CustomInput label={'Amount'} customStyle={{ marginRight: '10px' }} onChange={e => setI_amount_B_A(e.target.value)} type={'text'} value={I_amount_B_A} />
                                    <CustomInput label={'Interest'} customStyle={{ marginRight: '10px' }} onChange={e => setI_interest_B_A(e.target.value)} type={'text'} value={I_interest_B_A} />
                                    <CustomInput label={'Duration (Months)'} onChange={e => setI_duration_B_A(e.target.value)} type={'text'} value={I_duration_B_A} />
                                </div>
                            </section>
                            <section>
                                <p className={'f16 mediumText pb10 pt20'}>Credit Score B and Expenses B</p>
                                <div className={'flex justifyBetween alignCenter'}>
                                    <CustomInput label={'Amount'} customStyle={{ marginRight: '10px' }} onChange={e => setI_amount_B_B(e.target.value)} type={'text'} value={I_amount_B_B} />
                                    <CustomInput label={'Interest'} customStyle={{ marginRight: '10px' }} onChange={e => setI_interest_B_B(e.target.value)} type={'text'} value={I_interest_B_B} />
                                    <CustomInput label={'Duration (Months)'} onChange={e => setI_duration_B_B(e.target.value)} type={'text'} value={I_duration_B_B} />
                                </div>
                            </section>

                            <div className={'flex alignCenter justifyBetween pt20'}>
                                <CustomButton title={'Close'} customStyle={{ backgroundColor: '#fff', border: '1px solid rgba(52, 115, 239, 1)', marginRight: '10px' }}
                                    color={'rgba(52, 115, 239, 1)'} onClick={closeModal} />
                                <CustomButton title={'Save'} customStyle={{ backgroundColor: 'rgba(52, 115, 239, 1)', }} color={'#fff'} onClick={addLoanData} />
                            </div>

                        </AuthCard>
                    </CustomModal>}
                {state.businessModal &&
                    <CustomModal>
                        <AuthCard>
                            <p className={'f20 boldText pb20'}>Set PreApproved Loans for Businesses</p>
                            <section>
                                <p className={'f16 mediumText pb10'}>Credit Score A and Expenses A</p>
                                <div className={'flex justifyBetween alignCenter'}>
                                    <CustomInput label={'Amount'} customStyle={{ marginRight: '10px' }} onChange={e => setB_amount_A_A(e.target.value)} type={'text'} value={B_amount_A_A} />
                                    <CustomInput label={'Interest'} customStyle={{ marginRight: '10px' }} onChange={e => setB_interest_A_A(e.target.value)} type={'text'} value={B_interest_A_A} />
                                    <CustomInput label={'Duration (Months)'} onChange={e => setB_duration_A_A(e.target.value)} type={'text'} value={B_duration_A_A} />
                                </div>
                            </section>
                            <section>
                                <p className={'f16 mediumText pb10 pt20'}>Credit Score A and Expenses B</p>
                                <div className={'flex justifyBetween alignCenter'}>
                                    <CustomInput label={'Amount'} customStyle={{ marginRight: '10px' }} onChange={e => setB_amount_A_B(e.target.value)} type={'text'} value={B_amount_A_B} />
                                    <CustomInput label={'Interest'} customStyle={{ marginRight: '10px' }} onChange={e => setB_interest_A_B(e.target.value)} type={'text'} value={B_interest_A_B} />
                                    <CustomInput label={'Duration (Months)'} onChange={e => setB_duration_A_B(e.target.value)} type={'text'} value={B_duration_A_B} />
                                </div>
                            </section>
                            <section>
                                <p className={'f16 mediumText pb10 pt20'}>Credit Score B and Expenses A</p>
                                <div className={'flex justifyBetween alignCenter'}>
                                    <CustomInput label={'Amount'} customStyle={{ marginRight: '10px' }} onChange={e => setB_amount_B_A(e.target.value)} type={'text'} value={B_amount_B_A} />
                                    <CustomInput label={'Interest'} customStyle={{ marginRight: '10px' }} onChange={e => setB_interest_B_A(e.target.value)} type={'text'} value={B_interest_B_A} />
                                    <CustomInput label={'Duration (Months)'} onChange={e => setB_duration_B_A(e.target.value)} type={'text'} value={B_duration_B_A} />
                                </div>
                            </section>
                            <section>
                                <p className={'f16 mediumText pb10 pt20'}>Credit Score B and Expenses B</p>
                                <div className={'flex justifyBetween alignCenter'}>
                                    <CustomInput label={'Amount'} customStyle={{ marginRight: '10px' }} onChange={e => setB_amount_B_B(e.target.value)} type={'text'} value={B_amount_B_B} />
                                    <CustomInput label={'Interest'} customStyle={{ marginRight: '10px' }} onChange={e => setB_interest_B_B(e.target.value)} type={'text'} value={B_interest_B_B} />
                                    <CustomInput label={'Duration (Months)'} onChange={e => setB_duration_B_B(e.target.value)} type={'text'} value={B_duration_B_B} />
                                </div>
                            </section>

                            <div className={'flex alignCenter justifyBetween pt20'}>
                                <CustomButton title={'Close'} customStyle={{ backgroundColor: '#fff', border: '1px solid rgba(52, 115, 239, 1)', marginRight: '10px' }}
                                    color={'rgba(52, 115, 239, 1)'} onClick={closeBusinessModal} />
                                <CustomButton title={'Save'} customStyle={{ backgroundColor: 'rgba(52, 115, 239, 1)', }} color={'#fff'} onClick={addLoanDataBusiness} />
                            </div>

                        </AuthCard>
                    </CustomModal>}
            </main>

        </>
    )
}

export default connect(null, { addPreference, getInterest, getPreference, addInterest })(Setup);