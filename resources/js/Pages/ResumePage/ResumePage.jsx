import React from "react";
//import PropTypes from 'prop-types'
import s from "./ResumePage.module.css";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppText from "@/8Shared/ui/AppText/AppText";

const arrayEucation = [
    "Среднее",
    "Среднее специальное",
    "Неоконченное высшее",
    "Высшее",
    "Бакалавр",
    "Магистр",
    "Кандидат наук",
    "Доктор наук",
];

function ResumePage() {
    return (
        <MainLayout className={"app_light_theme"}>
            <AppPage>
                <container className={s.createResumePage}>
                    <main className={s.mainCreateResume}>
                        <div className={s.basiceData}>
                            <AppText
                                title={"Профессия"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input
                                type="text"
                                placeholder="Дизайнер"
                                className={s.inputBasiceData}
                            />

                            <AppText
                                title={"Фамилия"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input
                                type="text"
                                placeholder="Фамилия"
                                className={s.inputBasiceData}
                            />

                            <AppText
                                title={"Имя"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input
                                type="text"
                                placeholder="Имя"
                                className={s.inputBasiceData}
                            />

                            <AppText
                                title={"Пол"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />

                            <div className={s.inputRadioBasiceData}>
                                <input
                                    type="radio"
                                    value="man"
                                    checked
                                    name="gender"
                                />
                                <AppText
                                    text={"Мужской"}
                                    size={"m"}
                                    className={s.textInputRadio}
                                />
                                <input
                                    type="radio"
                                    value="woman"
                                    name="gender"
                                />
                                <AppText
                                    text={"Женский"}
                                    size={"m"}
                                    className={s.textInputRadio}
                                />
                            </div>

                            <AppText
                                title={"Город или регион проживания"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input
                                type="text"
                                placeholder="Москва"
                                className={s.inputBasiceData}
                            />

                            <AppText
                                title={"Дата рождения"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input type="date" value="2023-09-01" />

                            <AppText
                                title={"Номер телефона"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input
                                type="phone"
                                placeholder="+7 (999) 999-99-99"
                                className={s.inputBasiceData}
                            />

                            <AppText
                                title={"Гражданство"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input
                                type="text"
                                placeholder="Россия"
                                className={s.inputBasiceData}
                            />

                            <AppText
                                title={"Разрешение на работу"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input
                                type="text"
                                placeholder="Россия"
                                className={s.inputBasiceData}
                            />
                        </div>

                        <div className={s.levelOfEucation}>
                            <AppText
                                title={"Уровень образования"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />

                            <div className={s.typeEucation}>
                                {arrayEucation.map((el) => {
                                    // console.log(el);
                                    return (
                                        <div className={s.inputRadioBasiceData}>
                                            <input type="radio" />
                                            <AppText
                                                text={el}
                                                size={"m"}
                                                className={s.textInputRadio}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className={s.education}></div>

                        <div className={s.experience}></div>
                    </main>
                </container>
            </AppPage>
        </MainLayout>
    );
}

//ProfilePage.propTypes = {}

export default ResumePage;
