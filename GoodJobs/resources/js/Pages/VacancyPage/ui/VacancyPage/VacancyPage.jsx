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
import VacancyPageReviews from "../VacancyPageReviews/VacancyPageReviews";
import data from "../../data.json";
import MainLayout from "@/Layouts/MainLayout/MainLayout";

const VacanyPageList = data;
const navList = ["Мои резюме", "Отклики", "Помощь"];

export default function VacancyPage({ vacancies, title, auth }) {
    const user = auth?.user;

    return (
        <MainLayout user={user} className={"app_light_theme"}>
            <div className={s.vacancyPage}>
                <VacanyNav />
                <AppPage>
                    <div className={s.vacancyPage}>
                        <VacancyPageCards className={s.cards} />
                        {/* <VacancyPageList
                            vacancyPageList={VacanyPageList}
                            className={s.list}
                        /> */}

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
                            list={VacanyPageList}
                            className={s.reviews}
                        />
                    </div>
                </AppPage>
            </div>
        </MainLayout>
    );
}

VacancyPage.propTypes = {};
