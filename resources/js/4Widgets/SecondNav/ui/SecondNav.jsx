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
    { routeName: "Мои компании", routePath: "resume.myresumes" },
    { routeName: "Мои вакансии", routePath: "resume.myresumes" },
    { routeName: "Кондидаты ", routePath: "resume.myresumes" },
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

                    <form method="LINK" action={route("resume.create")}>
                        <AppButton
                            width="250px"
                            // width="200px"
                            height="50px"
                            variant="outline"
                            colorType="normal"
                            rounded
                            sizeText="m"
                        >
                            Создать резюме
                        </AppButton>
                    </form>
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

                    <form method="LINK" action={route("vacancy.create")}>
                        <AppButton
                            width="250px"
                            // width="200px"
                            height="50px"
                            variant="outline"
                            colorType="normal"
                            rounded
                            sizeText="m"
                        >
                            Создать вакансию
                        </AppButton>
                    </form>

                    <form method="LINK" action={route("companyCreate")}>
                        <AppButton
                            width="250px"
                            // width="200px"
                            height="50px"
                            variant="outline"
                            colorType="normal"
                            rounded
                            sizeText="m"
                        >
                            Создать компанию
                        </AppButton>
                    </form>
                </AppPage>
            )}
        </div>
    );
}

SecondNav.propTypes = {};

export default SecondNav;
