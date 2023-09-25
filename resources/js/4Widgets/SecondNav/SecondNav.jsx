import React from "react";
import PropTypes from "prop-types";

import s from "./SecondNav.module.css";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
const navList = ["Мои резюме", "Отклики", "Помощь"];
function SecondNav(props) {
    return (
        <div className={s.secondNav}>
            <AppPage className={s.conatiner}>
                <div className={s.navLinkList}>
                    {navList.map((navItem, index) => {
                        switch (navItem){
                            case "Отклики":{
                                return (
                                    <AppLink
                                        key={index}
                                        href={route('userResponses')}
                                        bold
                                        sizeText="l"
                                        className={s.navItem}
                                    >
                                        {navItem}
                                    </AppLink>
                                    )
                            }
                            default:{
                                return (
                                    <AppLink
                                        key={index}
                                        href="#"
                                        bold
                                        sizeText="l"
                                        className={s.navItem}
                                    >
                                        {navItem}
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
        </div>
    );
}

SecondNav.propTypes = {};

export default SecondNav;
