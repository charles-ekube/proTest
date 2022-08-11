import React, { useState } from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';

const SearchInput = ({ label, States, prompt, value, onChange, customStyle }) => {

    const [dropDown, setDropDown] = useState(false)

    const showFilter = () => {
        setDropDown((prev) => !prev)
    }

    return (
        <>
            <section style={{ position: 'relative', }}>
                <div className='inputContainer'>
                    {label && <label className='labelText'>{label}</label>}
                    <div className='inputBox' onClick={() => showFilter()} style={customStyle}>
                        <div className={'f14 regularText black '} >{value ? value?.name : prompt}</div>
                        < KeyboardArrowDown sx={{ color: '#000' }} />
                    </div>
                </div>
                {dropDown &&
                    <div className='statesModal'>
                        {States && States.map(item =>
                            <p className={`f12 regularText pb10 ${value === item ? 'selected' : null}`} onClick={() => { onChange(item); setDropDown(false) }}>{item.name}</p>
                        )}
                    </div>
                    // <p>hello</p>
                }
            </section>

        </>
    )
}

export default SearchInput