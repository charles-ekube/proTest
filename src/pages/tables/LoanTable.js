import { CloseOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import '../../assets/styles/DashboardStyles.css';
import CustomModal from '../../components/setup/CustomModal';
import Loading from '../../utils/Loading';

const LoanTable = (props) => {


    const { loading, data } = props
    const [state, setState] = useState({
        detailsModal: false, selectedData: {}
    })

    const getDetails = (obj) => {
        console.log(obj)
        setState((prevState) => ({ ...prevState, selectedData: obj, detailsModal: true }))

    }
    const closeModal = () => {
        setState((prevState) => ({ ...prevState, selectedData: {}, detailsModal: false }))
    }

    console.log(state.selectedData)
    const renderLoanDetails = () => {
        if (loading) {
            return <Loading />
        }
        if (data.length !== 0) {
            return data.map((item, index) => {
                return (
                    <>
                        <div className='loanTableRow' key={index} onClick={() => getDetails(item)}>
                            <li className={'mediumText f10'}>{item.name}</li>
                            <li className={'mediumText f10'} style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{item.address}dckckmdckmdcmkdcmck</li>
                            <li className={'mediumText f10'}>{item.phone_number}</li>
                            <li className={'mediumText f10'}>{item.loan_amount}</li>
                            <li className={'mediumText f10'}>{item.amount_paid}</li>
                            <li className={'mediumText f10'}>{item.credit_score}</li>
                        </div>
                    </>
                )
            })
        }
        if (data.length === 0 && !loading) {
            return (
                <>
                    <div>
                        <li className={'f30 textCenter boldText'}>No Data</li>
                    </div>
                </>
            )
        }
    }





    return (
        <>
            <section>
                <div className='loanTableHeader'>
                    <li className={'mediumText f12'}>Name</li>
                    <li className={'mediumText f12'}>Address</li>
                    <li className={'mediumText f12'}>Phone Number</li>
                    <li className={'mediumText f12'}>Loan</li>
                    <li className={'mediumText f12'}>Amount Paid</li>
                    <li className={'mediumText f12'}>Credit Score</li>
                </div>
                <div>
                    {renderLoanDetails()}
                </div>
            </section>
            {state.detailsModal &&
                <CustomModal>
                    <div className='detailsBox'>
                        <span className={'closeModalBT'} onClick={closeModal}><CloseOutlined /></span>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Name:</li>
                            <li className={'regularText f12'}>{state.selectedData.name}</li>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Address:</li>
                            <li className={'regularText f12'}>{state.selectedData.address}</li>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Phone Number:</li>
                            <li className={'regularText f12'}>{state.selectedData.phone_number}</li>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Credit Score:</li>
                            <li className={'regularText f12'}>{state.selectedData.credit_score}</li>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Bank:</li>
                            <li className={'regularText f12'}>{state.selectedData.bank}</li>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Account No.:</li>
                            <li className={'regularText f12'}>{state.selectedData.account_no}</li>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Approved/Denied:</li>
                            <li className={'regularText f12'}>{state.selectedData.app_approved_or_denied}</li>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Application Date:</li>
                            <li className={'regularText f12'}>{state.selectedData.application_date}</li>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Default Rate:</li>
                            <li className={'regularText f12'}>{state.selectedData.default_rate}</li>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Loan Amount:</li>
                            <li className={'regularText f12'}>{state.selectedData.loan_amount}</li>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Amount Paid:</li>
                            <li className={'regularText f12'}>{state.selectedData.amount_paid}</li>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Outstanding Amount:</li>
                            <li className={'regularText f12'}>{state.selectedData.outstanding_amount}</li>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Total Amount:</li>
                            <li className={'regularText f12'}>{state.selectedData.total_amount}</li>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Duration:</li>
                            <li className={'regularText f12'}>{state.selectedData.duration}</li>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Disbursed Date:</li>
                            <li className={'regularText f12'}>{state.selectedData.disbursed_date}</li>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Decision Date:</li>
                            <li className={'regularText f12'}>{state.selectedData.decision_date}</li>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Current Repayment Date:</li>
                            <ul className={'regularText f12'}>{state.selectedData.current_repayment_date.map((item) => (
                                <li className={'regularText f12 pb10'}>{item}</li>
                            ))}</ul>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Payment Due Date:</li>
                            <ul className={'regularText f12'}>{state.selectedData.payment_due_date.map((item) => (
                                <li className={'regularText f12 pb10'}>{item}</li>
                            ))}</ul>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Due Payment:</li>
                            <li className={'regularText f12'}>{state.selectedData.due_payment_count}</li>
                        </div>
                        <div className={'pb15'}>
                            <li className={'mediumText f14'}>Actual Payment Made:</li>
                            <li className={'regularText f12'}>{state.selectedData.actual_payment_made}</li>
                        </div>
                    </div>
                </CustomModal>}
        </>
    )

    // current_repayment_date: (2)['2022-08-16T11:25:02+01:00', '2022-08-16T10:26:30+00:00']


    // payment_due_date: (3)['2022-09-17T00:00:00+00:00', '2022-10-17T00:00:00+00:00', '2022-11-16T00:00:00+00:00']

    // _id: "62fb5ac7ba323e51e412f372"
}

export default LoanTable
