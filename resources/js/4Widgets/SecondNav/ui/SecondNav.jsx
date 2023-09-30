import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import s from "./SecondNav.module.css";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
const navListJobSeeker = [
    { routeName: "Мои резюме", routePath: "" },
    { routeName: "Отклики", routePath: "" },
];
const navListEmployment = [
    { routeName: "Мои компании", routePath: "" },
    { routeName: "Мои вакансии", routePath: "" },
    { routeName: "Кондидаты ", routePath: "" },
];
function SecondNav(props) {
    const isEmployer = useSelector((state) => state.secondNav.isEmployer);
    return (
        <div className={s.secondNav}>
            {!isEmployer ? (
                <AppPage className={s.conatiner}>
                    <div className={s.navLinkList}>
                        {navListJobSeeker.map((navItem, index) => {
                            switch (navItem) {
                                case "Отклики": {
                                    return (
                                        <AppLink
                                            key={index}
                                            href={route("userResponses")}
                                            bold
                                            sizeText="l"
                                            className={s.navItem}
                                        >
                                            {navItem.routeName}
                                        </AppLink>
                                    );
                                }
                                default: {
                                    return (
                                        <AppLink
                                            key={index}
                                            href="#"
                                            bold
                                            sizeText="l"
                                            className={s.navItem}
                                        >
                                            {navItem.routeName}
                                        </AppLink>
                                    );
                                }
                            }
                        })}
                    </div>

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
                            Создать резюме
                        </AppButton>
                    </form>
                </AppPage>
            ) : (
                <AppPage className={s.conatiner}>
                    <div className={s.navLinkList}>
                        {navListEmployment.map((navItem, index) => {
                            switch (navItem) {
                                case "Отклики": {
                                    return (
                                        <AppLink
                                            key={index}
                                            href={route("userResponses")}
                                            bold
                                            sizeText="l"
                                            className={s.navItem}
                                        >
                                            {navItem.routeName}
                                        </AppLink>
                                    );
                                }
                                default: {
                                    return (
                                        <AppLink
                                            key={index}
                                            href="#"
                                            bold
                                            sizeText="l"
                                            className={s.navItem}
                                        >
                                            {navItem.routeName}
                                        </AppLink>
                                    );
                                }
                            }
                        })}
                    </div>

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
                            {/* Создать резюме */}
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
