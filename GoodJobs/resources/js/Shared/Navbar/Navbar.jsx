import { AppPage } from '../AppPage/AppPage';
import { Link } from '@inertiajs/react';
import s from './Navbar.module.css';
import PropTypes from 'prop-types';


export const Navbar = () => {
    return (
        <nav className={s.navBg}>
            <AppPage>
                <div>
                    <div className="logo"></div>
                    <ul className={s.navList}>
                        <Link className={s.navLink}>Создать резюме</Link>

                        <Link href={route('login')} className={s.navLink}>Войти</Link>
                    </ul>

                </div>

            </AppPage>


        </nav>
    )
}

Navbar.propTypes = {}