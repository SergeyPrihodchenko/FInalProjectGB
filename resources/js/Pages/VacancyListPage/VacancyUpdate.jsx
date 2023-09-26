import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { VacancyPageCreate } from "../VacancyPageCreate";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import cn from "classnames";
import s from "@/Pages/VacancyPageCreate/ui/VacancyPageCreate/VacancyPageCreate.module.css";
import AppInput from "@/8Shared/ui/AppInput/AppInput.jsx";
import AppText from "@/8Shared/ui/AppText/AppText.jsx";

const Vacancy = ({ vacancy, auth, companies, cities, citiesForWork, experience, schedule, employment}) => {
    console.log(vacancy, 'vacancy');

    const [isShowContent, setIsShowContent] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    // Требования
    const [requirementsInput, setRequirementsInput] = useState("");
    const [requirementsList, setRequirementsList] = useState([]);

    //Обязаности
    const [responsibilitiesInput, setResponsibilitiesInput] = useState("");
    const [responsibilitiesList, setResponsibilitiesList] = useState([]);

    // Условия
    const [conditionsInput, setConditionsInput] = useState("");
    const [conditionsList, setConditionsList] = useState([]);

    // Ключевые навыки
    const [skillsInput, setSkillsInput] = useState("");
    const [skillsList, setSkillsList] = useState([]);

    // Контакты
    const [contactsName, setContactsName] = useState("");
    const [contactsPosition, setContactsPosition] = useState("");
    const [contactsPhone, setContactsPhone] = useState("");
    const [contactsList, setContactsList] = useState([]);

    const user = auth?.user;

    const { data, setData, patch, errors } = useForm({
        title: "Вакансия тест", //форма заполнена по умолчанию, что бы не заполнять каждый раз, временно
        city_id : "1",
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
    const handleSubmit = (e) => {
        e.preventDefault();

        patch(route('vacancy.update', vacancy.id));
    };



    if (isShowContent) {
        return (
            <VacancyPageCreate
                auth={auth}
                btn={
                    <AppButton
                        onClick={() => setIsShowContent(!isShowContent)}
                        width="100%"
                    >
                        Скрыть вёрстку
                    </AppButton>
                }
            />
        );
    }
    return (
        <>
            <MainLayout className={"app_light_theme"} user={user}>
                <AppPage>
                    <AppButton
                        onClick={() => setIsShowContent(!isShowContent)}
                        width="100%"
                    >
                        Показать вёрстку
                    </AppButton>
                    <h1>Создание вакансии</h1>
                    <form onSubmit={handleSubmit}>
                        {/*Название вакансии*/}
                        <label htmlFor="title">Имя:</label>
                        <input
                            id="title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                        />

                        {/*Город*/}
                        <label htmlFor="city_id">Город</label>
                        <select id='city_id' name='city_id' value={data.city_id} onChange={(e) => setData("city_id", e.target.value)}>
                            {cities.map((city, index) => (
                                <option key={index} value={city.id}>{city.title}</option>))}
                        </select>

                        {/*Зарплата*/}
                        <label htmlFor="payment">Зарплата</label>
                        <input
                            id="payment"
                            value={data.payment}
                            onChange={(e) => setData("payment", e.target.value)}
                        />

                        {/*Город где работать*/}
                        <label htmlFor="city_work_id">Город где будет работать сотрудник</label>
                        <select id='city_work_id' name='city_work_id' value={data.city_work_id} onChange={(e) => setData("city_work_id", e.target.value)}>
                            {citiesForWork.map((cityForWork, index) => (
                                <option key={cityForWork.title} value={cityForWork.id}>{cityForWork.title}</option>))}
                        </select>

                        {/*Опыт*/}
                        <label htmlFor="experience">Expa:</label>
                        <select id='experience' name='experience' value={data.experience} onChange={(e) => setData("experience", e.target.value)}>
                            {experience.map((expItem, index) => (
                                <option key={index} value={expItem}>{expItem}</option>))}
                        </select>

                        {/*График работы*/}
                        <label htmlFor="schedule">рАПИСАНИЕ РАБОТЫ</label>
                        <select id='schedule' name='schedule' value={data.schedule} onChange={(e) => setData("schedule", e.target.value)}>
                            {schedule.map((item, index) => (
                                <option key={index} value={item}>{item}</option>))}
                        </select>

                        {/*Тип занянтости*/}
                        <label htmlFor="employment">Тип занятости</label>
                        <select id='employment' name='employment' value={data.employment} onChange={(e) => setData("employment", e.target.value)}>
                            {employment.map((item, index) => (
                                <option key={index} value={item}>{item}</option>))}
                        </select>

                        {/*Зарплата*/}
                        <label htmlFor="payment">Зарплата</label>
                        <input
                            id="payment"
                            value={data.payment}
                            onChange={(e) => setData("payment", e.target.value)}
                        />

                        {/* Требования */}
                        <div>
                            {requirementsList ? (
                                <div>
                                    {requirementsList?.map(
                                        (requireItem, index) => {
                                            return (
                                                <div
                                                    className={s.listItem}
                                                    key={index}
                                                >
                                                    <div> {requireItem}</div>
                                                    <AppButton
                                                        sizeText={"xs"}
                                                        variant={"clear"}
                                                        colorType={"cancel"}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            requirementsList.splice(
                                                                index,
                                                                1
                                                            );
                                                            const newRequirementsList =
                                                                [
                                                                    ...requirementsList,
                                                                ];
                                                            console.log(
                                                                "newRequirementsList",
                                                                newRequirementsList
                                                            );
                                                            setRequirementsList(
                                                                [
                                                                    ...newRequirementsList,
                                                                ]
                                                            );
                                                            setData("requirements", [
                                                                ...requirementsList,
                                                            ])
                                                        }}
                                                    >
                                                        Удалить
                                                    </AppButton>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            ) : null}
                            <AppInput
                                label="Требования к соискателю"
                                value={requirementsInput}
                                onChange={(e) => {
                                    setRequirementsInput(e.target.value);
                                }}
                            />

                            <AppButton
                                variant="clear"
                                colorType="hint"
                                sizeText="s"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (requirementsInput) {
                                        setRequirementsList([
                                            ...requirementsList,
                                            requirementsInput,
                                        ]);
                                        setData("requirements", [
                                            ...requirementsList,
                                            requirementsInput,
                                        ])
                                    }

                                    setRequirementsInput("");
                                }}
                            >
                                Добавить требование
                            </AppButton>
                        </div>

                        {/* Обязаности */}
                        <div>
                            {responsibilitiesList ? (
                                <div>
                                    {responsibilitiesList?.map(
                                        (responsibilitiesItem, index) => {
                                            return (
                                                <div
                                                    className={s.listItem}
                                                    key={index}
                                                >
                                                    <div>
                                                        {responsibilitiesItem}
                                                    </div>
                                                    <AppButton
                                                        sizeText={"xs"}
                                                        variant={"clear"}
                                                        colorType={"cancel"}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            responsibilitiesList.splice(
                                                                index,
                                                                1
                                                            );
                                                            const newResponsibilitiesList =
                                                                [
                                                                    ...responsibilitiesList,
                                                                ];

                                                            setResponsibilitiesList(
                                                                [
                                                                    ...newResponsibilitiesList,
                                                                ]
                                                            );
                                                            setData('responsibilities',
                                                                [
                                                                    ...newResponsibilitiesList,
                                                                ]
                                                            );
                                                        }}
                                                    >
                                                        Удалить
                                                    </AppButton>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            ) : null}
                            <AppInput
                                label="Обязаность сотрудника"
                                value={responsibilitiesInput}
                                onChange={(e) => {
                                    setResponsibilitiesInput(e.target.value);
                                }}
                            />
                            <AppButton
                                variant="clear"
                                colorType="hint"
                                sizeText="s"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (responsibilitiesInput) {
                                        setResponsibilitiesList([
                                            ...responsibilitiesList,
                                            responsibilitiesInput,
                                        ])
                                        setData("responsibilities", [
                                            ...responsibilitiesList,
                                            responsibilitiesInput,
                                        ])
                                    }

                                    setResponsibilitiesInput("");
                                }}
                            >
                                Добавить обязаность
                            </AppButton>
                        </div>

                        {/* Условия */}
                        <div>
                            {conditionsList ? (
                                <div>
                                    {conditionsList?.map(
                                        (conditionsItem, index) => {
                                            return (
                                                <div
                                                    className={s.listItem}
                                                    key={index}
                                                >
                                                    <div>{conditionsItem}</div>
                                                    <AppButton
                                                        sizeText={"xs"}
                                                        variant={"clear"}
                                                        colorType={"cancel"}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            conditionsList.splice(
                                                                index,
                                                                1
                                                            );
                                                            const newConditionsList =
                                                                [
                                                                    ...conditionsList,
                                                                ];

                                                            setConditionsList([
                                                                ...newConditionsList,
                                                            ])
                                                            setData("conditions", [
                                                                ...newConditionsList,
                                                            ])
                                                        }}
                                                    >
                                                        Удалить
                                                    </AppButton>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            ) : null}
                            <AppInput
                                label="Условия работы"
                                value={conditionsInput}
                                onChange={(e) => {
                                    setConditionsInput(e.target.value);
                                }}
                            />
                            <AppButton
                                variant="clear"
                                colorType="hint"
                                sizeText="s"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (conditionsInput) {
                                        setConditionsList([
                                            ...conditionsList,
                                            conditionsInput,
                                        ]);
                                        setData("conditions", [
                                            ...conditionsList,
                                            conditionsInput,
                                        ])
                                    }

                                    setConditionsInput("");
                                }}
                            >
                                Добавить условие
                            </AppButton>
                        </div>

                        {/* Навыки */}

                        {skillsList ? (
                            <div className={s.skillsList}>
                                {skillsList?.map((skillsItem, index) => {
                                    return (
                                        <div className={s.listItem} key={index}>
                                            <div>{skillsItem}</div>
                                            <AppButton
                                                sizeText={"xs"}
                                                variant={"clear"}
                                                colorType={"cancel"}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    skillsList.splice(index, 1);
                                                    const newSkillsList = [
                                                        ...skillsList,
                                                    ];

                                                    setSkillsList([
                                                        ...newSkillsList,
                                                    ]);
                                                    setData("skills",[
                                                        ...newSkillsList,
                                                    ])
                                                }}
                                            >
                                                Удалить
                                            </AppButton>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : null}
                        <div className={cn(s.skills, s.item)}>
                            <AppInput
                                label="Ключевые навыки"
                                value={skillsInput}
                                onChange={(e) => {
                                    setSkillsInput(e.target.value);
                                }}
                            />
                            <AppButton
                                variant="clear"
                                colorType="hint"
                                sizeText="s"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (skillsInput) {
                                        setSkillsList([
                                            ...skillsList,
                                            skillsInput,
                                        ]);
                                        setData("skills", [
                                            ...skillsList,
                                            skillsInput,
                                        ]);
                                    }

                                    setSkillsInput("");
                                }}
                            >
                                Добавить навык
                            </AppButton>
                        </div>

                        {/*Контакты*/}
                        <AppText
                            title="Контактные данные"
                            size="m"
                            className={s.item}
                        />
                        <div>
                            {contactsList ? (
                                <div>
                                    {contactsList?.map(
                                        (contactsItem, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                >
                                                    <div>
                                                        {contactsItem?.phone}
                                                    </div>
                                                    -
                                                    <div>
                                                        {contactsItem?.name}
                                                    </div>/
                                                    <div>
                                                        {contactsItem?.position}
                                                    </div>
                                                    <AppButton
                                                        sizeText={"xs"}
                                                        variant={"clear"}
                                                        colorType={"cancel"}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            contactsList.splice(
                                                                index,
                                                                1
                                                            );
                                                            const newContactsList =
                                                                [
                                                                    ...contactsList,
                                                                ];

                                                            setContactsList([
                                                                ...newContactsList,
                                                            ]);
                                                        }}
                                                    >
                                                        Удалить
                                                    </AppButton>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            ) : null}
                            <AppInput
                                label="Контакты"
                                placeholder="Должность"
                                value={contactsPosition}
                                onChange={(e) => {
                                    setContactsPosition(e.target.value);
                                }}
                            />
                            <AppInput
                                placeholder="Имя"
                                value={contactsName}
                                onChange={(e) => {
                                    setContactsName(e.target.value);
                                }}
                            />
                            <AppInput
                                type="tel"
                                placeholder="Номер телефона"
                                value={contactsPhone}
                                onChange={(e) => {
                                    setContactsPhone(e.target.value);
                                }}
                            />
                            <AppButton
                                variant="clear"
                                colorType="hint"
                                sizeText="s"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (
                                        contactsPosition &&
                                        contactsPhone &&
                                        contactsName
                                    ) {
                                        setContactsList([
                                            ...contactsList,
                                            {
                                                name: contactsName,
                                                phone: contactsPhone,
                                                position: contactsPosition,
                                            },
                                        ]);
                                        setData("contacts", [
                                            ...contactsList,
                                            {
                                                name: contactsName,
                                                phone: contactsPhone,
                                                position: contactsPosition,
                                            },
                                        ]);
                                    }

                                    setContactsName("");
                                    setContactsPhone("");
                                    setContactsPosition("");
                                }}
                            >
                                Добавить контакт
                            </AppButton>
                        </div>



                        <label htmlFor="company_id">Company</label>
                        <select id='company_id' name='company_id' value={data.company_id} onChange={(e) => setData("employment", e.target.value)}>
                            {companies.map((item, index) => (
                                <option key={index} value={item.id}>{item.name}</option>))}
                        </select>


                        <button type="submit">Отправить</button>
                    </form>
                </AppPage>
            </MainLayout>
        </>
    );
};
export default Vacancy;
