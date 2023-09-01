import s from './MainLayout.module.css';
import { Header } from '@/Shared/Header/Header';
import { Navbar } from '@/Shared/Navbar/Navbar';
import { Footer } from '@/Shared/Footer/Footer'

import { PropTypes } from 'prop-types';
import { Toolbar } from '@/Shared/Toolbar/Toolbar';
import { AppPage } from '@/Shared/AppPage/AppPage';


const MainLayout = ({ children }) => {
    return (
        <div className={s.mainLayout}>
            <Header>
                <Toolbar />
                <Navbar />
            </Header>
            <main>
                {children}
            </main>

            <Footer>
                footer
            </Footer>
        </div>
    )
}

export default MainLayout;

MainLayout.propTypes = {}