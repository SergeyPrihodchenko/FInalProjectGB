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
                            <input 
                                type="date" 
                                value="2023-09-01"
                                className={s.inputDataBasiceData}
                            />

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

                        <div className={s.education}>
                            <div>
                                <AppText
                                    title={"Название учебного заведения"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <input
                                    type="text"
                                    placeholder="Название"
                                    className={s.inputBasiceData}
                                />

                                <AppText
                                    title={"Факультет"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <input
                                    type="text"
                                    className={s.inputBasiceData}
                                />

                                <AppText
                                    title={"Специализация"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <input
                                    type="text"
                                    className={s.inputBasiceData}
                                />

                                <AppText
                                    title={"Год окончания"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <input
                                    type="text"
                                    className={s.inputYearsEducation}
                                />
                                <AppText
                                    title={
                                        <input
                                            type="button"
                                            value="Добавить учебное заведение"
                                            className={s.buttonYearsEducation}
                                        />}
                                    bold
                                    size={"s"}
                                />     
                            </div>
                        </div>

                        <div className={s.experience}>
                                <AppText
                                    title={"В какой компании вы работали?"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <input
                                    type="text"
                                    placeholder="Название компании"
                                    className={s.inputBasiceData}
                                />

                                <AppText
                                    title={"На какой должности?"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <input
                                    type="text"
                                    className={s.inputBasiceData}
                                />

                                <AppText
                                    title={"Расскажите о ваших обязанностях и достижениях"}
                                    bold
                                    size={"s"}
                                    className={s.textTitle}
                                />
                                <textarea
                                    className={s.textareaBasiceData}
                                    placeholder="Например, изучали и анализировали информацию, технические данные, показатели и результаты работы, обобщали и систематизировали их"
                                />
                            <div className={s.experienceWork}>
                                
                                <div className={s.experienceBeginningWork}>
                                    <AppText
                                        title={"Начало работы"}
                                        bold
                                        size={"s"}
                                        className={s.textTitle}
                                    />
                                    <input 
                                        type="date" 
                                        value="2023-09-01"
                                        className={s.inputDataBasiceData}
                                    />
                                </div>

                                <div className={s.experienceEndingWork}>
                                    <AppText
                                        title={"Окончание"}
                                        bold
                                        size={"s"}
                                        className={s.textTitle}
                                    />
                                    <div className={s.inputEndingWork}>
                                        <input 
                                            type="checkbox"
                                            className={s.checkboxEndingWork} 
                                        />
                                        <AppText
                                            title={"По настоящее время"}
                                            size={"s"}
                                            className={s.textTitleEnding}
                                        />
                                    </div>
                                    
                                </div>

                                <AppText
                                    title={
                                        <input
                                            type="button"
                                            value="Добавить еще опыт работы"
                                            className={s.buttonYearsExperience}
                                        />}
                                    bold
                                    size={"s"}
                                /> 
                                
                            </div>    
                            <AppText
                                title={"Ключевые навыки"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <textarea
                                className={s.textareaBasiceData}
                            />

                        </div>
                    </main>
                </container>
            </AppPage>
        </MainLayout>
    );
}

//ProfilePage.propTypes = {}

export default ResumePage;
