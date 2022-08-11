import React from 'react';
import '../../assets/styles/GeneralStyles.css';
import { Outlet } from 'react-router-dom';
import SideNav from '../../components/nav/SideNav';
import TopNav from '../../components/nav/TopNav';

const Layout = ({ children }) => {
    return (
        <>
            <section className='layoutContainer'>
                <SideNav />
                <section className={'layoutContent'}>
                    <TopNav />
                    {children}
                    <Outlet />
                </section>
            </section>

        </>
    )
}

export default Layout