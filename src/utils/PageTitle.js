import React from 'react'

const PageTitle = ({ title, customClass }) => {
    return (
        <div className={`${customClass}`}>
            <h2 className={'black f24 mediumText'}>{title}</h2>
        </div>
    )
}

export default PageTitle