import { AppPage } from "../../5Layouts/AppPage/AppPage";
import { Link } from "@inertiajs/react";
import s from "./Navbar.module.css";
import PropTypes from "prop-types";
import cn from "classnames";
import { BootstrapIcon } from "../../8Shared/Icon/BootstrapIcon";
import { Logo } from "../../8Shared/Logo/Logo";
import mainlogo from "@/8Shared/assets/icons/mainlogo.svg";
import AppText from "@/8Shared/ui/AppText/AppText";
import SecondNav from "../SecondNav/SecondNav";

export const Navbar = (props) => {
    const { user } = props;
    // console.log("Navbar.jsx user", user);

    return (
        <nav className={s.navBg}>
            <AppPage>
                <div className={s.navBar}>
                    <Logo src={mainlogo} alt={"Логотип"} href={route("main")} />
                    <ul className={s.navList}>
                        {/* <li>
                            <Link className={s.navLink}>Соискателям</Link>
                        </li>
                        <li>
                            <Link className={s.navLink}>Работодателям</Link>
                        </li> */}
                        <li>
                            <Link
                                className={cn(s.navLink, ["hover:text-white "])}
                                href={route("resume.create")}
                            >
                                Создать резюме
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={cn(s.navLink, ["hover:text-white "])}
                                href={route("vacancy.index")}
                            >
                                Вакансии
                            </Link>
                        </li>{" "}
                        <li>
                            <Link
                                className={cn(s.navLink, ["hover:text-white "])}
                                href={route("vacancy.create")}
                            >
                                Создать вакансию
                            </Link>
                        </li>
                        <Link
                            href={route("company")}
                            className={cn(s.navLink, [
                                "font-semibold text-gray-600 hover:text-white dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                            ])}
                        >
                            Компания
                        </Link>
                        <Link
                            href={route("company.create")}
                            className={cn(s.navLink, [
                                "font-semibold text-gray-600 hover:text-white dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                            ])}
                        >
                            back Создать компанию
                        </Link>
                        <Link
                            href={route("company.index")}
                            className={cn(s.navLink, [
                                "font-semibold text-gray-600 hover:text-white dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                            ])}
                        >
                            back Список компаний
                        </Link>

                        {!user ? (
                            <>
                                <li>
                                    <Link
                                        href={route("register")}
                                        className={cn(s.navLink, [
                                            "font-semibold text-gray-600 hover:text-white dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                                        ])}
                                    >
                                        Регистрация
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("login")}
                                        className={cn(s.navLink, [
                                            "font-semibold text-gray-600 hover:text-white dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                                        ])}
                                    >
                                        Войти
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={route("profilePage")}
                                    className={cn(s.navLink, [
                                        "hover:text-white ",
                                    ])}
                                >
                                    {user?.name && (
                                        <AppText
                                            text={user?.name}
                                            variant="accent"
                                            size="xl"
                                            className={cn(s.name)}
                                        />
                                    )}
                                    <BootstrapIcon
                                        name={"BsPersonCircle"}
                                        size={30}
                                    />
                                </Link>

                                <Link
                                    href={route("logout")}
                                    method="post"
                                    className={cn(s.navLink, [
                                        "font-semibold text-gray-600 hover:text-white dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",
                                    ])}
                                >
                                    Выйти
                                </Link>
                            </>
                        )}
                        {/* <Link href={route('login')} className={s.navLink}>Войти</Link> */}
                    </ul>
                </div>
            </AppPage>
        </nav>
    );
};

Navbar.propTypes = {};
