import { AppPage } from '../AppPage/AppPage';
import { Link } from '@inertiajs/react';
import s from './Navbar.module.css';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
import cn from 'classnames';
import { BootstrapIcon } from '../Icon/BootstrapIcon';
import { Logo } from '../Logo/Logo';


export const Navbar = () => {
    const { user } = useContext(AuthContext);

    return (
        <nav className={s.navBg}>
            <AppPage>
                <div className={s.navBar}>
                    <Logo src={``} alt={'Логотип'} href={route('main')} />
                    <ul className={s.navList}>
                        <Link className={s.navLink}>Создать резюме</Link>
                        <Link href={route('vacancy.index')} >Вакансии</Link>
                        {!user ? <>
                            <Link
                                href={route('register')}
                                className={cn(s.navLink, ["font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"])}
                            >
                                Регистрация
                            </Link>
                            <Link
                                href={route('login')}
                                className={cn(s.navLink, ["font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"])}
                            >
                                Войти
                            </Link>

                        </> : <>
                            <Link href={route('profilePage')} className={cn(s.navLink, [''])}>
                                <BootstrapIcon name={'BsPersonCircle'} size={30} />
                            </Link>

                            <Link href={route('logout')} method="post" className={cn(s.navLink, ["font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"])}>Выйти</Link>
                        </>

                        }


                        {/* <Link href={route('login')} className={s.navLink}>Войти</Link> */}
                    </ul>

                </div>

            </AppPage>


        </nav>
    )
}

Navbar.propTypes = {}