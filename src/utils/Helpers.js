
export const setUser = async (userData) => {
    try {
        const token = userData.token;
        sessionStorage.setItem("userData", JSON.stringify(userData));
        sessionStorage.setItem("token", token);
    } catch (error) {
        console.log("Could not set user Data ", error.message);
    }
}


export const filterOptions = [
    { name: 'All', code: 'All' },
    { name: 'OutstandingLoans', code: 'Outstanding Loans' },
    { name: 'ApprovalPending', code: 'Approval Pending Loans' },
    { name: 'DisbursementPending', code: 'Disbursement Pending Loans' },

]


