import React from "react";
import PropTypes from "prop-types";

import { Head, useForm } from "@inertiajs/react";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./VacancyPageCreate.module.css";
import cn from "classnames";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import { useDispatch, useSelector } from "react-redux";

import VacancyCreateContacts from "../VacancyCreateContacts/VacancyCreateContacts";
import VacancyCreateSkills from "../VacancyCreateSkills/VacancyCreateSkills";
import VacancyCreateResponsibilities from "../VacancyCreateResponsibilities/VacancyCreateResponsibilities";
import VacancyCreateConditions from "../VacancyCreateConditions/VacancyCreateConditions";
import VacancyCreateRequirements from "../VacancyCreateRequirements/VacancyCreateRequirements";
import VacancyCreateFilters from "../VacancyCreateFilters/VacancyCreateFilters";
import VacancyCreateMainInfo from "../VacancyCreateMainInfo/VacancyCreateMainInfo";
import { useEffect } from "react";
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

    const saveVacancy = (e) => {
        e.preventDefault();
        post(route("vacancy.store"));
    };

    const { data, setData, post, errors } = useForm({
        title: "adfasdf", //форма заполнена по умолчанию, что бы не заполнять каждый раз, временно
        city_id: "1",
        payment: "adfasdf",
        city_work_id: "adfasdf",
        experience: "нет опыта",
        company_id: companies[0],
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
                        <VacancyCreateMainInfo errors={errors} />
                        <VacancyCreateFilters
                            experience={experience}
                            schedule={schedule}
                            employment={employment}
                        />
                        {/*Requirements Требования */}
                        <VacancyCreateRequirements />
                        {/*Responsibilities Обязаности */}
                        <VacancyCreateResponsibilities />
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
