import React, { useEffect, useState } from 'react'
// import CustomInputDrop from '../../utils/CustomInputDropDown'
import PageTitle from '../../utils/PageTitle'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LoanTable from '../tables/LoanTable';
import SearchInput from '../../components/searchComponent/SearchInput';
import { filterOptions } from '../../utils/Helpers';
import http from '../../utils/Utils';
// import Loading from '../../utils/Loading';




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


const Dashboard = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [state, setState] = useState({
        filterDrop: false, loading: false, data: []
    })


    const [selectedValue, setSelectedValue] = useState(null)
    console.log(selectedValue)

    useEffect(() => {
        getLoans();
    }, [])

    const getLoans = async () => {
        setState({ ...state, loading: true })
        try {
            const res = await http.get(`/api/provider?filter=${selectedValue?.name || filterOptions[0].name}`);
            setState({ ...state, loading: false, data: res.result })
            console.log(res)
            // setSelectedValue(null)
        } catch (error) {
            console.log('Error', error);
            setState({ ...state, loading: false })
            // setSelectedValue(null)

        }
    }

    return (
        <>
            <main style={{ paddingTop: '100px' }}>
                <section className={'flex justifyBetween alignCenter pb46'}>
                    <PageTitle title={'Loan Dashboard'} />
                    <SearchInput label={' '} States={filterOptions} value={selectedValue} onChange={(val) => {
                        setSelectedValue(val)
                        getLoans()
                    }} prompt={'Filter...'} customStyle={{ width: '200px' }} />
                </section>
                <section>
                    <Box>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Customer information and Loan Status" {...a11yProps(0)} className={'f14 mediumText'} />
                                {/* <Tab label="Energy audit history" {...a11yProps(1)} className='tabFonts' /> */}
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <div>
                                <LoanTable data={state.data} loading={state.loading} />
                                {/* {renderLoanDetails()} */}
                            </div>
                        </TabPanel>
                    </Box>
                </section>
                <p></p>
            </main>

        </>
    )
}

export default Dashboard;
