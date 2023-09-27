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
import AppLink from "@/8Shared/ui/AppLink/AppLink";
import { useState } from "react";

export const Navbar = (props) => {
    const { user } = props;
    const [navbarVariantForEmployers, setNavbarVariantForEmployers] =
        useState(false);
    // console.log("Navbar.jsx user", user);

    return (
        <nav className={s.navBg}>
            <AppPage className={s.appPage}>
                <div className={s.navBar}>
                    <Logo src={mainlogo} alt={"Логотип"} href={route("main")} />
                    <ul className={s.navList}>
                        {/* <li>
                            <AppLink colorType="accent" className={s.navLink}>Соискателям</AppLink>
                        </li>
                        <li>
                            <AppLink colorType="accent" className={s.navLink}>Работодателям</AppLink>
                        </li> */}
                        <li>
                            <AppLink
                                colorType="accent"
                                className={cn(s.navLink, ["hover:text-white "])}
                                href={route("resume.create")}
                            >
                                Создать резюме
                            </AppLink>
                        </li>
                        <li>
                            <AppLink
                                colorType="accent"
                                className={cn(s.navLink, ["hover:text-white "])}
                                href={route("vacancy.index")}
                            >
                                Вакансии
                            </AppLink>
                        </li>{" "}
                        <li>
                            <AppLink
                                colorType="accent"
                                className={cn(s.navLink, ["hover:text-white "])}
                                href={route("vacancy.create")}
                            >
                                Создать вакансию
                            </AppLink>
                        </li>
                        {/* <li>
                            <AppLink colorType="accent"
                                className={cn(s.navLink, ["hover:text-white "])}
                                href={route("vacancy.create")}
                            >
                                Создать вакансию front
                            </AppLink>
                        </li> */}
                        <AppLink
                            colorType="accent"
                            href={route("company")}
                            className={cn(s.navLink)}
                        >
                            Компания
                        </AppLink>
                        <AppLink
                            colorType="accent"
                            href={route("company.create")}
                            className={cn(s.navLink)}
                        >
                            back(Создать компанию)
                        </AppLink>
                        <AppLink
                            colorType="accent"
                            href={route("company.index")}
                            className={cn(s.navLink)}
                        >
                            back(Список компаний)
                        </AppLink>
                        {!user ? (
                            <>
                                <li>
                                    <AppLink
                                        colorType="accent"
                                        href={route("register")}
                                        className={cn(s.navLink)}
                                    >
                                        Регистрация
                                    </AppLink>
                                </li>
                                <li>
                                    <AppLink
                                        colorType="accent"
                                        href={route("login")}
                                        className={cn(s.navLink)}
                                    >
                                        Войти
                                    </AppLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <AppLink
                                    colorType="accent"
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
                                </AppLink>

                                <AppLink
                                    colorType="accent"
                                    href={route("logout")}
                                    method="post"
                                    className={cn(s.navLink)}
                                >
                                    Выйти
                                </AppLink>
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
