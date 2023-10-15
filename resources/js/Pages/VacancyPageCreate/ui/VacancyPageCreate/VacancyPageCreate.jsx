import React from "react";
import PropTypes from "prop-types";

import { Head, useForm } from "@inertiajs/react";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./VacancyPageCreate.module.css";
import cn from "classnames";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import { useSelector } from "react-redux";

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
    // console.log(cities);
    const {
        vacancyExperience,
        vacancySchedule,
        vacancyEmployment,
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

    // const { data, setData, post, errors } = useForm({
    //     title: "Вакансия тест", //форма заполнена по умолчанию, что бы не заполнять каждый раз, временно
    //     city_id: "1",
    //     payment: "1000",
    //     city_work_id: "1",
    //     experience: "нет опыта",
    //     company_id: companies[0]["id"],
    //     schedule: "Полная занятость",
    //     employment: employment[0],
    //     requirements: requirementsList,
    //     responsibilities: responsibilitiesList,
    //     conditions: conditionsList,
    //     skills: skillsList,
    //     contacts: contactsList,
    // });

    const { data, setData, post, errors, setError } = useForm({
        title: '',
        city_id: '',
        payment: "",
        // city_work_id: "1",
        experience: "",
        company_id: companies[0]["id"],
        schedule: "",
        employment: "",
        requirements: requirementsList,
        responsibilities: responsibilitiesList,
        conditions: conditionsList,
        skills: skillsList,
        contacts: contactsList,
    });
    useEffect(() => {
        setData("title", vacancyNameInput);
    }, [vacancyNameInput]);

    useEffect(() => {
        setData("experience", vacancyExperience);
    }, [vacancyExperience]);
    useEffect(() => {
        setData("payment", vacancyPaymentInput);
    }, [vacancyPaymentInput]);

    useEffect(() => {
        const city = cities.find(item => item.title.toLowerCase().startsWith(vacancyCityInput.toLowerCase()));
        if (!city) {
            setError("city_id", "Такого города нет в списке");
            return;
        }
        setData("city_id", city?.id);
        setError("city_id", "");
    }, [vacancyCityInput]);
    useEffect(() => {
        setData("schedule", vacancySchedule);
    }, [vacancySchedule]);
    useEffect(() => {
        setData("employment", vacancyEmployment);
    }, [vacancyEmployment]);

    useEffect(() => {
        setData("requirements", requirementsList);
    }, [requirementsList]);
    useEffect(() => {
        setData("responsibilities", responsibilitiesList);
    }, [responsibilitiesList]);
    useEffect(() => {
        setData("conditions", conditionsList);
    }, [conditionsList]);
    useEffect(() => {
        setData("skills", skillsList);
    }, [skillsList]);

    // useEffect(() => {
    //     // setData("title", vacancyNameInput);
    //     setData("city_id", "1");
    //     setData("payment", vacancyPaymentInput);
    //     setData("city_work_id", "1");
    //     setData("experience", vacancyExperience);
    //     setData("company_id", companies[0]["id"]);
    //     setData("schedule", "Полная занятость");
    //     setData("employment", employment[0]);
    //     setData("requirements", requirementsList);
    //     setData("responsibilities", responsibilitiesList);
    //     setData("conditions", conditionsList);
    //     setData("skills", skillsList);
    //     setData("contacts", contactsList);
    // }, [
    //     vacancyNameInput,
    //     vacancyCityInput,
    //     vacancyPaymentInput,
    //     requirementsInput,
    //     requirementsList,
    //     responsibilitiesInput,
    //     responsibilitiesList,
    //     conditionsInput,
    //     conditionsList,
    //     skillsInput,
    //     skillsList,
    //     contactsNameInput,
    //     contactsPositionInput,
    //     contactsPhoneInput,
    //     contactsList,
    // ]);
    // console.log("errors", errors);
    return (
        <>
            <Head title="Создать вакансию" />

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
                        <VacancyCreateMainInfo
                            errors={errors}
                            cities={cities}
                            cityError={errors.city_id}

                        />
                        <VacancyCreateFilters
                            experience={experience}
                            schedule={schedule}
                            employment={employment}
                        />
                        {/*Requirements Требования */}
                        <VacancyCreateRequirements errors={errors} />
                        {/*Responsibilities Обязаности */}
                        <VacancyCreateResponsibilities errors={errors} />
                        {/* Conditions Условия */}
                        <VacancyCreateConditions errors={errors} />
                        {/* Skills Навыки */}
                        <VacancyCreateSkills errors={errors} />
                        {/* Contacts контакты */}
                        <VacancyCreateContacts errors={errors} />
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
