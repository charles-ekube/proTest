import React from 'react'
import Button from '../buttons/Buttons'

const ReceiptVerification = () => {
    return (
        <>
            <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', paddingTop: '100px' }}>
                <Button title={'Accept'} />
                <Button title={'Decline'} />
            </main>
        </>
    )
}

export default ReceiptVerification