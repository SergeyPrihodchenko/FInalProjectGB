import React from "react";
import PropTypes from "prop-types";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import s from "./VacancyPage.module.css";
import AppText from "@/8Shared/ui/AppText/AppText";
import VacanyNav from "../VacanyPageNav/VacanyPageNav";
import VacancyPageCards from "../VacancyPageCards/VacancyPageCards";
import VacancyPageList from "../VacancyPageList/VacancyPageList";
import VacancyPageAdress from "../VacancyPageAdress/VacancyPageAdress";
import AppButton from "@/8Shared/ui/AppButton/AppButton";

import data from "../../data.json";
import { Head } from "@inertiajs/react";
import VacancyPageReviews from "../VacancyPageReviews/VacancyPageReviews";
import { useSelector } from "react-redux";

const navList = ["Мои резюме", "Отклики", "Помощь"];
function VacancyPage(props) {
    const { auth, vacancy, cities } = props;
    const user = auth?.user;
    const city = cities?.[vacancy.city_id]?.title || "Город не указан";

    console.log("vacancy", vacancy);
    console.log("city", city);
    return (
        <>
            <Head title="VacancyPage" />
            <div className={s.vacancyPage}>
                {/* {Object.entries(AppRoutesByPathPattern).forEach(
                        ([patter, route]) => {
                            if (matchPath(patter, location.pathname)) {
                                setAppRoute(route);
                            }
                        }
                    )} */}
                {/* <AppInput label="123" placeholder="placeholder"  /> */}
                <AppPage>
                    <div className={s.vacancyPage}>
                        <VacancyPageCards
                            className={s.cards}
                            vacancy={vacancy}
                            city={city}
                        />
                        <VacancyPageList
                            vacancy={vacancy}
                            vacancyPageList={data}
                            className={s.list}
                        />
                        {vacancy?.adress ? (
                            <VacancyPageAdress
                                className={s.adress}
                                vacancy={vacancy}
                            />
                        ) : (
                            <div className={s.adress}>
                                <AppText title="Адрес" bold variant="error" />
                                <AppText
                                    title={"TODO адрес не передан в пропсах"}
                                    variant="error"
                                />
                            </div>
                        )}

                        <AppText
                            text="Вакансия опубликована 28 августа 2023 в Москве"
                            variant="notaccented"
                            size="s"
                            className={s.date}
                        />
                        <AppButton
                            width="360px"
                            height="60px"
                            className={s.btn}
                        >
                            Откликнуться
                        </AppButton>
                        <VacancyPageReviews className={s.reviews} />
                    </div>
                </AppPage>
            </div>
        </>
    );
}

VacancyPage.propTypes = {};

export default VacancyPage;
