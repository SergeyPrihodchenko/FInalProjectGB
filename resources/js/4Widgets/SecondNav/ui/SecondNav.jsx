import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import s from "./SecondNav.module.css";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
const navListJobSeeker = [
    { routeName: "Мои резюме", routePath: "resume.myresumes" },
    { routeName: "Отклики", routePath: "resume.myresumes" },

];
const navListEmployment = [
    { routeName: "Мои компании", routePath: "myCompanies" },
    { routeName: "Мои вакансии", routePath: "resume.myresumes" },
    { routeName: "Кандидаты ", routePath: "resume.myresumes" },
];
// href={route("userResponses")}
function SecondNav(props) {
    const isEmployer = useSelector((state) => state.navabr.isEmployer);
    return (
        <div className={s.secondNav}>
            {!isEmployer ? (
                <AppPage className={s.conatiner}>
                    <div className={s.navLinkList}>
                        {navListJobSeeker.map((navItem, index) => {
                            return (
                                <AppLink
                                    key={index}
                                    href={route(navItem.routePath)}
                                    bold
                                    sizeText="l"
                                    className={s.navItem}
                                >
                                    {navItem.routeName}
                                </AppLink>
                            );
                        })}
                    </div>
                    <div className={s.secondNavButton}>
                        <AppButton
                            width="250px"
                            href={route("resume.create")}
                            height="50px"
                            variant="outline"
                            colorType="normal"
                            rounded
                            sizeText="m"
                        >
                            Создать резюме
                        </AppButton>

                        <AppButton
                            width="250px"
                            href={route("company.create")}
                            height="50px"
                            variant="outline"
                            colorType="normal"
                            rounded
                            sizeText="m"
                        >
                            Создать компанию
                        </AppButton>
                    </div>
                    <AppButton
                        width="250px"
                        href={route("resume.create")}
                        height="50px"
                        variant="outline"
                        colorType="normal"
                        rounded
                        sizeText="m"
                    >
                        Создать резюме
                    </AppButton>
                </AppPage>
            ) : (
                <AppPage className={s.conatiner}>
                    <div className={s.navLinkList}>
                        {navListEmployment.map((navItem, index) => {
                            return (
                                <AppLink
                                    key={index}
                                    href={route(navItem.routePath)}
                                    bold
                                    sizeText="l"
                                    className={s.navItem}
                                >
                                    {navItem.routeName}
                                </AppLink>
                            );
                        })}
                    </div>
                    <div className={s.secondNavButton}>
                        <AppButton
                            href={route("vacancy.create")}
                            width="fit-content"
                            // width="200px"
                            height="50px"
                            variant="outline"
                            colorType="normal"
                            rounded
                            sizeText="s"
                        >
                            Создать вакансию
                        </AppButton>

                        <AppButton
                            href={route("company.create")}
                            width="fit-content"
                            // width="200px"
                            height="50px"
                            variant="outline"
                            colorType="normal"
                            rounded
                            sizeText="s"
                        >
                            Создать компанию
                        </AppButton>

                    </div>
                </AppPage>
            )}
        </div>
    );
}

SecondNav.propTypes = {};

export default SecondNav;
