import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Loading from '../../utils/Loading';

const columns = [
    { field: '_id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'address', headerName: 'Address', width: 400 },
    { field: 'phone_number', headerName: 'Phone Number', width: 200 },
    { field: 'loan_amount', headerName: 'Loan', width: 150 },
    { field: 'amount_paid', headerName: 'Amount Paid', width: 150 },
    { field: 'credit_score', headerName: 'Credit Score', width: 100 },

];

const rows = [
    // { id: 1, Name: 'Akintonde Abbas', Address: 'Block 4', PhoneNumber: '090333382829', UserType: 'Individual', Loan: '100000', AmountPaid: '100000', CreditScore: '500' },
    // { id: 2, Name: 'Akintonde Abbas', Address: 'Block 4', PhoneNumber: '090333382829', UserType: 'Individual', Loan: '100000', AmountPaid: '100000', CreditScore: '500' },
    // { id: 3, Name: 'Akintonde Abbas', Address: 'Block 4', PhoneNumber: '090333382829', UserType: 'Individual', Loan: '100000', AmountPaid: '100000', CreditScore: '500' },
    // { id: 4, Name: 'Akintonde Abbas', Address: 'Block 4', PhoneNumber: '090333382829', UserType: 'Individual', Loan: '100000', AmountPaid: '100000', CreditScore: '500' },

];

export default function LoanTable({ data, loading }) {


    const handleGetRowId = (e) => {
        // return e._id
        console.log(e._id)
    }

    return (
        <div style={{ height: '600px', width: '100%', }}>
            <DataGrid
                rows={data}
                columns={columns}
                autoHeight
                pageSize={5}
                loading={loading}
                rowsPerPageOptions={[5]}
                checkboxSelection
                getRowId={handleGetRowId}
                className={'loanTable'}
                onCellClick={() => handleGetRowId(data)}
            />
        </div>
    );
}