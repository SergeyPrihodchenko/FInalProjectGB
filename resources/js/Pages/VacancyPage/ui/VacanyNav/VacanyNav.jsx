import React from "react";
import PropTypes from "prop-types";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppText from "@/8Shared/ui/AppText/AppText";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import s from "./VacanyNav.module.css";
const navList = ["Мои резюме", "Отклики", "Помощь"];
function VacanyNav(props) {
    return (
        <nav className={s.vacancyNav}>
            <AppPage className={s.conatiner}>
                <div className={s.navLinkList}>
                    {navList.map((navItem, index) => {
                        return (
                            <a key={index} href="#">
                                <AppText
                                    title={navItem}
                                    className={s.navItem}
                                    bold={true}
                                />
                            </a>
                        );
                    })}
                </div>
                <AppButton variant="outline">Создать резюме</AppButton>
            </AppPage>
        </nav>
    );
}

VacanyNav.propTypes = {};

export default VacanyNav;
