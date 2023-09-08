import { AppPage } from '../AppPage/AppPage';
import { Link } from '@inertiajs/react';
import s from './Navbar.module.css';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { BootstrapIcon } from '../Icon/BootstrapIcon';
import { Logo } from '../Logo/Logo';
import mainlogo from '@/Shared/assets/icons/mainlogo.svg';


export const Navbar = ({ user }) => {
    return (
        <nav className={s.navBg}>
            <AppPage>
                <div className={s.navBar}>
                    <Logo src={mainlogo} alt={'Логотип'} href={route('main')} />
                    <ul className={s.navList}>
                        <li>
                            <Link className={s.navLink}>
                                Создать резюме
                            </Link>
                        </li>
                        <li>
                            <Link className={s.navLink}>
                                Соискателям
                            </Link>
                        </li>
                        <li>
                            <Link className={s.navLink}>
                                Работодателям
                            </Link>
                        </li>
                        <li>
                            <Link className={s.navLink} href={route('vacancy.index')} >
                                Вакансии
                            </Link>

                        </li>
                        {!user ? <>
                            <li>
                                <Link
                                    href={route('register')}
                                    className={cn(s.navLink, ["font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"])}
                                >
                                    Регистрация
                                </Link>

                            </li>
                            <li>

                                <Link
                                    href={route('login')}
                                    className={cn(s.navLink, ["font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"])}
                                >
                                    Войти
                                </Link>
                            </li>

                        </> : <>
                            <Link href={route('profilePage')} className={cn(s.navLink, [''])}>
                                <BootstrapIcon name={'BsPersonCircle'} size={30} />
                            </Link>

                            <Link href={route('logout')} method="post" className={cn(s.navLink, ["font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"])}>Выйти</Link>
                        </>

                        }
                        <Link href={route('company')} className={cn(s.navLink, ["font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"])} >Компания</Link>
                        {/* <Link href={route('login')} className={s.navLink}>Войти</Link> */}
                    </ul>

                </div>

            </AppPage>


        </nav>
    )
}

Navbar.propTypes = {}
