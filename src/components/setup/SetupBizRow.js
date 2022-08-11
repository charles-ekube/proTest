import React from 'react';
import { useSelector } from 'react-redux';
import '../../assets/styles/SetupStyles.css';

const SetupBizRow = () => {

    const { get_loan_data, } = useSelector(state => state.loans)

    return (
        <>
            <section className={'topTableSubNav'} style={{ backgroundColor: '#fff' }}>
                <div className={'subNavContent'}>
                    <p className={'mediumText f10'}>{get_loan_data?.business?.score_range_A_and_expense_range_A?.amount}</p>
                    <p className={'mediumText f10'}>{get_loan_data?.business?.score_range_A_and_expense_range_A?.interest} %</p>
                    <p className={'mediumText f10'}>{get_loan_data?.business?.score_range_A_and_expense_range_A?.duration} Months</p>
                </div>
                <div className={'subNavContent'}>
                    <p className={'mediumText f10'}>{get_loan_data?.business?.score_range_A_and_expense_range_B?.amount}</p>
                    <p className={'mediumText f10'}>{get_loan_data?.business?.score_range_A_and_expense_range_B?.interest} %</p>
                    <p className={'mediumText f10'}>{get_loan_data?.business?.score_range_A_and_expense_range_B?.duration} Months</p>

                </div>
                <div className={'subNavContent'}>
                    <p className={'mediumText f10'}>{get_loan_data?.business?.score_range_B_and_expense_range_A?.amount}</p>
                    <p className={'mediumText f10'}>{get_loan_data?.business?.score_range_B_and_expense_range_A?.interest} %</p>
                    <p className={'mediumText f10'}>{get_loan_data?.business?.score_range_B_and_expense_range_A?.duration} Months</p>
                </div>
                <div className={'subNavContent'}>
                    <p className={'mediumText f10'}>{get_loan_data?.business?.score_range_B_and_expense_range_B?.amount}</p>
                    <p className={'mediumText f10'}>{get_loan_data?.business?.score_range_B_and_expense_range_B?.interest} %</p>
                    <p className={'mediumText f10'}>{get_loan_data?.business?.score_range_B_and_expense_range_B?.duration} Months</p>
                </div>
            </section>
        </>
    )
}

export default SetupBizRow