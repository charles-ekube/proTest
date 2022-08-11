import React from 'react';
import { useSelector } from 'react-redux';
import '../../assets/styles/SetupStyles.css';

const TopTableNav = () => {
    const { get_loan_data, } = useSelector(state => state.loans)
    console.log('loan', get_loan_data.individual)

    return (
        <section className={'topTableNav'}>
            <div>

                <li className={'mediumText f10'}>
                    Credit Score: {get_loan_data?.individual?.score_range_A_and_expense_range_A?.credit_score_from} - {get_loan_data?.individual?.score_range_A_and_expense_range_A?.credit_score_to}
                </li>
                <li className={'mediumText f10'}>
                    Verified Expenses: {get_loan_data?.individual?.score_range_A_and_expense_range_A?.energy_expense_from} - {get_loan_data?.individual?.score_range_A_and_expense_range_A?.energy_expense_to}
                </li>
            </div>
            <div>
                <li className={'mediumText f10'}>
                    Credit Score: {get_loan_data?.individual?.score_range_A_and_expense_range_B?.credit_score_from} - {get_loan_data?.individual?.score_range_A_and_expense_range_B?.credit_score_to}
                </li>
                <li className={'mediumText f10'}>
                    Verified Expenses: {get_loan_data?.individual?.score_range_A_and_expense_range_B?.energy_expense_from} - {get_loan_data?.individual?.score_range_A_and_expense_range_B?.energy_expense_to}
                </li>
            </div>
            <div>
                <li className={'mediumText f10'}>
                    Credit Score:{get_loan_data?.individual?.score_range_B_and_expense_range_A?.credit_score_from} - {get_loan_data?.individual?.score_range_B_and_expense_range_A?.credit_score_to}
                </li>
                <li className={'mediumText f10'}>
                    Verified Expenses: {get_loan_data?.individual?.score_range_B_and_expense_range_A?.energy_expense_from} - {get_loan_data?.individual?.score_range_B_and_expense_range_A?.energy_expense_to}
                </li>
            </div>
            <div>
                <li className={'mediumText f10'}>
                    Credit Score: {get_loan_data?.individual?.score_range_B_and_expense_range_B?.credit_score_from} - {get_loan_data?.individual?.score_range_B_and_expense_range_B?.credit_score_to}
                </li>
                <li className={'mediumText f10'}>
                    Verified Expenses: {get_loan_data?.individual?.score_range_B_and_expense_range_B?.energy_expense_from} - {get_loan_data?.individual?.score_range_B_and_expense_range_B?.energy_expense_to}
                </li>
            </div>
        </section>
    )
}

export default TopTableNav