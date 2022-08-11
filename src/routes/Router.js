import React from 'react';
import NavProvider from '../components/context/NavContext';
import Footer from '../components/footer/Footer';
import Nav from '../components/nav/Nav';
import Main from '../pages/Main';

const Router = () => {
    return (
        <NavProvider>
            <Nav />
            <Main />
            <Footer />
        </NavProvider>
    )
}

export default Router