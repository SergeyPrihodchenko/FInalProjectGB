import s from './MainLayout.module.css';
import { Header } from '@/Shared/Header/Header';
import { Navbar } from '@/Shared/Navbar/Navbar';
import { Footer } from '@/Shared/Footer/Footer'
import { PropTypes } from 'prop-types';
import cn from "classnames"



const MainLayout = ({ children, user, className }) => {
    return (
        <div className={cn(s.mainLayout, className)}>
            <Header>
                <Navbar user={user} />
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