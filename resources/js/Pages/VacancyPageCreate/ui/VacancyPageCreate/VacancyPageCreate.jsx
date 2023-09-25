import React from "react";
import PropTypes from "prop-types";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { Head } from "@inertiajs/react";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./VacancyPageCreate.module.css";
import cn from "classnames";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import Checkbox from "@/8Shared/Checkbox/Checkbox";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import RadioButton from "@/8Shared/RadioButton/RadioButton";
import { useState } from "react";
function VacancyPageCreate(props) {
    const { auth, vacancy, btn } = props;
    const user = auth?.user;
    // console.log("VacancyPageCreate props", props);

    // Требования
    const [requirementsInput, setRequirementsInput] = useState("");
    const [requirementsList, setRequirementsList] = useState([]);

    //Обязаности
    const [responsibilitiesInput, setResponsibilitiesInput] = useState("");
    const [responsibilitiesList, setResponsibilitiesList] = useState([]);

    // Условия
    const [conditionsInput, setСonditionsInput] = useState("");
    const [conditionsList, setConditionsList] = useState([]);

    // Ключевые навыки
    const [skillsInput, setSkillsInput] = useState("");
    const [skillsList, setSkillsList] = useState([]);

    // Контакты
    const [contactsName, setContactsName] = useState("");
    const [contactsPosition, setContactsPosition] = useState("");
    const [contactsPhone, setContactsPhone] = useState("");
    const [contactsList, setContactsList] = useState([]);

    const experience = [
        "Нет опыта",
        "Не имеет значения",
        "1-3 года",
        "3-6 лет",
        "более 6 лет",
    ];
    const schedule = [
        "Полная занятость",
        "Частичная занятость",
        "Проектная работа или разовое задание",
        "Волонтерство",
        "Стажировка",
    ];
    const employment = [
        "Полный день",
        "Сменный график",
        "Гибкий график",
        "Удаленая работа",
        "Вахтовый метод",
    ];

    const saveVacancy = (e) => {
        e.preventDefault();

        // post(route('vacancy.store'))
    };
    return (
        <MainLayout className="app_light_theme" user={user}>
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
                    <div className={cn(s.mainInfo, s.itme)}>
                        <AppInput
                            label="Название вакакнсии"
                            placeholder="Должность"
                        />
                        <AppInput
                            label="Где искать сотрудника"
                            placeholder="Город"
                            className={s.input}
                        />
                        <div>
                            <AppText
                                text="Предполагаемый уровень дохода в месяц или за объем работ"
                                bold
                            />
                            <div className={s.paymentContainer}>
                                <div className={s.payment}>
                                    <AppInput width="520px" type="number" />
                                </div>

                                <div className={s.checkbox}>
                                    <Checkbox
                                        defaultChecked={true}
                                        label={"До вычета налогов"}
                                    />
                                    <Checkbox label={"На руки"} />
                                </div>
                            </div>
                        </div>
                        <AppInput
                            textBold
                            label="Где будет рабоать сотрудник"
                            placeholder="Адрес"
                        />
                        {experience && (
                            <>
                                <AppText
                                    title="Опыт работы"
                                    className={s.item}
                                />
                                <div className={s.item}>
                                    {experience?.map((item, index) => (
                                        <RadioButton
                                            key={index}
                                            name={"experience"}
                                            label={item}
                                            value={item}
                                            onChange={() =>
                                                console.log("RadioButton", item)
                                            }
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                        {schedule && (
                            <>
                                <AppText
                                    title="График работы"
                                    className={s.item}
                                />
                                {schedule?.map((item, index) => (
                                    <Checkbox
                                        className={s.item}
                                        key={index}
                                        name={"schedule"}
                                        label={item}
                                        value={item}
                                        onChange={() =>
                                            console.log("RadioButton", item)
                                        }
                                    />
                                ))}
                            </>
                        )}
                        {schedule && (
                            <>
                                <AppText
                                    title="Тип занятости"
                                    className={s.item}
                                />
                                {schedule?.map((item, index) => (
                                    <Checkbox
                                        className={s.item}
                                        key={index}
                                        name={"employment"}
                                        label={item}
                                        value={item}
                                        onChange={() =>
                                            console.log("RadioButton", item)
                                        }
                                    />
                                ))}
                            </>
                        )}
                        {/* Требования */}
                        <div className={cn(s.requirements, s.item)}>
                            {requirementsList ? (
                                <div className={s.requirementsList}>
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
                                    }

                                    setRequirementsInput("");
                                }}
                            >
                                Добавить требование
                            </AppButton>
                        </div>

                        {/* Обязаности */}
                        <div className={cn(s.empolyments, s.item)}>
                            {responsibilitiesList ? (
                                <div className={s.responsibilitiesList}>
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
                                        ]);
                                    }

                                    setResponsibilitiesInput("");
                                }}
                            >
                                Добавить обязаность
                            </AppButton>
                        </div>
                        {/* Условия */}
                        <div className={cn(s.conditions, s.item)}>
                            {conditionsList ? (
                                <div className={s.conditionsList}>
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
                                label="Условия работы"
                                value={conditionsInput}
                                onChange={(e) => {
                                    setСonditionsInput(e.target.value);
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
                                    }

                                    setСonditionsInput("");
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
                                    }

                                    setSkillsInput("");
                                }}
                            >
                                Добавить навык
                            </AppButton>
                        </div>
                        <AppText
                            title="Контактные данные"
                            size="m"
                            className={s.item}
                        />
                        <div className={cn(s.contacts, s.item)}>
                            {contactsList ? (
                                <div className={s.contactsList}>
                                    {contactsList?.map(
                                        (contactsItem, index) => {
                                            return (
                                                <div
                                                    className={s.listItem}
                                                    key={index}
                                                >
                                                    <div>
                                                        {contactsItem?.phone}
                                                    </div>
                                                    -
                                                    <div>
                                                        {contactsItem?.name}
                                                    </div>
                                                    /
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
                                    }

                                    setContactsName("");
                                    setContactsPhone("");
                                    setContactsPosition("");
                                }}
                            >
                                Добавить контакт
                            </AppButton>
                        </div>

                        <AppButton className={cn(s.btn, s.item)}>
                            Опубликовать
                        </AppButton>
                    </div>
                </form>
            </AppPage>
        </MainLayout>
    );
}

VacancyPageCreate.propTypes = {};

export default VacancyPageCreate;
