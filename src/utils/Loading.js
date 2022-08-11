import React from 'react'

const Loading = (props) => {

    const { onDecline, visible, } = props

    return (
        <>

            <section className={'modalWrapper'} >
                <span className={'loader'}></span>
            </section>
        </>

    )
}

export default Loading