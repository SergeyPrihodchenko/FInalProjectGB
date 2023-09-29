import React from "react";
import PropTypes from "prop-types";

import { Head, useForm } from "@inertiajs/react";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./VacancyPageUpdate.module.css";
import cn from "classnames";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import Checkbox from "@/8Shared/Checkbox/Checkbox";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import RadioButton from "@/8Shared/RadioButton/RadioButton";
import { useDispatch, useSelector } from "react-redux";

import VacancyCreateContacts from "../VacancyCreateContacts/VacancyCreateContacts";
import VacancyCreateSkills from "../VacancyCreateSkills/VacancyCreateSkills";
import VacancyCreateEmpolyments from "../VacancyCreateEmpolyments/VacancyCreateEmpolyments";
import VacancyCreateConditions from "../VacancyCreateConditions/VacancyCreateConditions";
import VacancyCreateRequirements from "../VacancyCreateRequirements/VacancyCreateRequirements";
import VacancyCreateFilters from "../VacancyCreateFilters/VacancyCreateFilters";
import VacancyCreateMainInfo from "../VacancyCreateMainInfo/VacancyCreateMainInfo";
function VacancyPageCreate(props) {
    const {
        auth,
        vacancy,
        btn,
        companies,
        cities,
        citiesForWork,
        experience,
        schedule,
        employment,
    } = props;

    const dispatch = useDispatch();
    const {
        vacancyNameInput,
        vacancyCityInput,
        vacancyPaymentInput,
        requirementsInput,
        requirementsList,
        responsibilitiesInput,
        responsibilitiesList,
        conditionsInput,
        conditionsList,
        skillsInput,
        skillsList,
        contactsNameInput,
        contactsPositionInput,
        contactsPhoneInput,
        contactsList,
    } = useSelector((state) => state.vacancyPageCreate);

    // const experience = [
    //     "Нет опыта",
    //     "Не имеет значения",
    //     "1-3 года",
    //     "3-6 лет",
    //     "более 6 лет",
    // ];
    // const schedule = [
    //     "Полная занятость",
    //     "Частичная занятость",
    //     "Проектная работа или разовое задание",
    //     "Волонтерство",
    //     "Стажировка",
    // ];
    // const employment = [
    //     "Полный день",
    //     "Сменный график",
    //     "Гибкий график",
    //     "Удаленая работа",
    //     "Вахтовый метод",
    // ];

    const saveVacancy = (e) => {
        e.preventDefault();
        post(route("vacancy.store"));
    };

    const { data, setData, post, errors } = useForm({
        title: "Вакансия тест", //форма заполнена по умолчанию, что бы не заполнять каждый раз, временно
        city_id: "1",
        payment: "1000",
        city_work_id: "1",
        experience: "нет опыта",
        company_id: companies[0].id,
        schedule: "Полная занятость",
        employment: employment[0],
        requirements: requirementsList,
        responsibilities: responsibilitiesList,
        conditions: conditionsList,
        skills: skillsList,
        contacts: contactsList,
    });

    return (
        <>
            <Head title="VacancyPageCreate" />

            <AppPage>
                {btn}

                <form onSubmit={saveVacancy}>
                    <AppText
                        title="Создание вакансии"
                        size="l"
                        className={s.item}
                    />
                    <AppText
                        title="Основная информация"
                        size="m"
                        className={s.item}
                    />
                    <div className={cn(s.mainInfo, s.item)}>
                        <VacancyCreateMainInfo />
                        <VacancyCreateFilters
                            experience={experience}
                            schedule={schedule}
                            employment={employment}
                        />
                        {/*Requirements Требования */}
                        <VacancyCreateRequirements />
                        {/*Empolyments Обязаности */}
                        <VacancyCreateEmpolyments />
                        {/* Conditions Условия */}
                        <VacancyCreateConditions />
                        {/* Skills Навыки */}
                        <VacancyCreateSkills />
                        {/* Contacts контакты */}
                        <VacancyCreateContacts />
                        <AppButton className={cn(s.btn, s.item)}>
                            Опубликовать
                        </AppButton>
                    </div>
                </form>
            </AppPage>
        </>
    );
}

VacancyPageCreate.propTypes = {};

export default VacancyPageCreate;
