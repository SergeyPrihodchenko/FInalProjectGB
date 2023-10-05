import React from "react";
import PropTypes from "prop-types";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import s from "./VacancyPage.module.css";
import AppText from "@/8Shared/ui/AppText/AppText";
import VacancyPageCards from "../VacancyPageCards/VacancyPageCards";
import VacancyPageList from "../VacancyPageList/VacancyPageList";
import VacancyPageAdress from "../VacancyPageAdress/VacancyPageAdress";
import AppButton from "@/8Shared/ui/AppButton/AppButton";

import data from "../../data.json";
import { Head } from "@inertiajs/react";
import VacancyPageReviews from "../VacancyPageReviews/VacancyPageReviews";
import { useSelector } from "react-redux";
import { useState } from "react";
import cn from "classnames";
const navList = ["Мои резюме", "Отклики", "Помощь"];
function VacancyPage(props) {
    const { auth, vacancy, cities } = props;
    const user = auth?.user;
    const city = cities?.[vacancy.city_id]?.title || "Город не указан";
    const adress = {
        strAdress: "",
        coordinates: "",
    };
    adress.strAdress = vacancy?.adress || "Адрес не указан";
    adress.coordinates = vacancy?.coordinates || "Адрес не указан";

    console.log("vacancy", vacancy);
    // console.log("city", city);
    const [isResponse, setIsResponse] = useState(false);
    return (
        <>
            <Head title="VacancyPage" />
            <div className={s.vacancyPage}>
                <AppPage>
                    <div className={s.vacancyPage}>
                        <VacancyPageCards
                            className={s.cards}
                            vacancy={vacancy}
                            city={city}
                            isResponse={isResponse}
                            setIsResponse={setIsResponse}
                        />
                        <VacancyPageList
                            vacancy={vacancy}
                            vacancyPageList={data}
                            className={s.list}
                        />
                        <VacancyPageAdress
                            className={s.adress}
                            adress={adress}
                        />
                        <AppText
                            text="Вакансия опубликована 28 августа 2023 в Москве"
                            variant="notaccented"
                            size="s"
                            className={s.date}
                        />

                        {isResponse ? (
                            <>
                                <AppButton
                                    width="360px"
                                    height="60px"
                                    className={s.btn}
                                    variant={"outline"}
                                    colorType={"accent"}
                                    disabled={isResponse}
                                >
                                    Откликнуться
                                </AppButton>
                                <AppButton
                                    width="360px"
                                    height="60px"
                                    className={cn(s.btn, s.cancelBtn)}
                                    onClick={() => setIsResponse(!isResponse)}
                                >
                                    Отозвать отклик
                                </AppButton>

                                <AppText
                                    className={s.responseText}
                                    text={
                                        "Вы отлкинулись, ожидайте приглашения"
                                    }
                                    variant={"notaccented"}
                                />
                            </>
                        ) : (
                            <AppButton
                                width="360px"
                                height="60px"
                                className={s.btn}
                                onClick={() => setIsResponse(!isResponse)}
                            >
                                Откликнуться
                            </AppButton>
                        )}
                        <VacancyPageReviews className={s.reviews} />
                    </div>
                </AppPage>
            </div>
        </>
    );
}

VacancyPage.propTypes = {};

export default VacancyPage;
