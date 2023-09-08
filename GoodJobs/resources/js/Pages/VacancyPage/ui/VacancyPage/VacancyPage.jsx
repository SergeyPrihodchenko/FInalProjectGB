import React from "react";
import PropTypes from "prop-types";
import { AppPage } from "@/Shared/AppPage/AppPage";
import s from "./VacancyPage.module.css";
import AppText from "@/Shared/ui/AppText/AppText";
import VacanyNav from "../VacanyPageNav/VacanyPageNav";
import VacancyPageCards from "../VacancyPageCards/VacancyPageCards";
import VacancyPageList from "../VacancyPageList/VacancyPageList";
import VacancyPageAdress from "../VacancyPageAdress/VacancyPageAdress";
import AppButton from "@/Shared/ui/AppButton/AppButton";

import data from "../../data.json";
import MainLayout from "@/Layouts/MainLayout/MainLayout.jsx";
import Vacancy from "@/Pages/Vacancy/Index.jsx";
import { Head } from "@inertiajs/react";
import VacancyPageReviews from "../VacancyPageReviews/VacancyPageReviews";

const navList = ["Мои резюме", "Отклики", "Помощь"];
function VacancyPage({ auth }) {
    const user = auth?.user;
    <Head>
        <title>Вакансия</title>
    </Head>;
    return (
        <MainLayout user={user} className={"app_light_theme"}>
            <div className={s.vacancyPage}>
                {/* {Object.entries(AppRoutesByPathPattern).forEach(
                        ([patter, route]) => {
                            if (matchPath(patter, location.pathname)) {
                                setAppRoute(route);
                            }
                        }
                    )} */}
                <VacanyNav />
                <AppPage>
                    <div className={s.vacancyPage}>
                        <VacancyPageCards className={s.cards} />
                        <VacancyPageList
                            vacancyPageList={data}
                            className={s.list}
                        />

                        <VacancyPageAdress className={s.adress} />
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
                            <AppText text="Откликнуться" />
                        </AppButton>
                        <VacancyPageReviews
                         className={s.reviews}
                       />
                    </div>
                </AppPage>
            </div>
        </MainLayout>
    );
}

VacancyPage.propTypes = {};

export default VacancyPage;
