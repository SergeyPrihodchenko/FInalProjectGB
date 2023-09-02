import s from './MainLayout.module.css';
import { Header } from '@/Shared/Header/Header';
import { Navbar } from '@/Shared/Navbar/Navbar';
import { Footer } from '@/Shared/Footer/Footer'
import { PropTypes } from 'prop-types';
import { Toolbar } from '@/Shared/Toolbar/Toolbar';
import { useContext } from 'react';
import { AuthContext } from '@/Shared/store/AuthContext';
import { Banner } from '@/Shared/Banner/Banner';
import { Typography } from '@/Shared/Typography/Typography';


const MainLayout = ({ children }) => {
    const { user } = useContext(AuthContext);
    return (
        <div className={s.mainLayout}>
            <Header>
                <Toolbar />
                <Navbar />
            </Header>
            <main>
                {children}
            </main>
            <Footer />

        </div>
    )
}

export default MainLayout;

MainLayout.propTypes = {}