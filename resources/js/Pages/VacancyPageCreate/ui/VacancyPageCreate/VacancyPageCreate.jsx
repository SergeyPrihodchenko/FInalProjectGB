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
    const [requireInput, setRequireInput] = useState("");
    const [requirementsList, setRequirementsList] = useState([]);
    console.log("requirementsList", requirementsList);
    // console.log("VacancyPageCreate props", props);
    // useEffect(() => {}, [requirementsList]);

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
        "ЧСменный график",
        "Гибкий график",
        "Удаленая работа",
        "Вахтовый метод",
    ];
    return (
        <MainLayout className="app_light_theme" user={user}>
            <Head title="VacancyPageCreate" />

            <AppPage>
                {btn}

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
                    <form action="#">
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
                            <AppInput
                                label="Требования к соискателю"
                                value={requireInput}
                                onChange={(e) => {
                                    setRequireInput(e.target.value);
                                }}
                            />
                            {requirementsList ? (
                                <div className={s.requirementsList}>
                                    {requirementsList?.map(
                                        (requireItem, index) => {
                                            return (
                                                <div
                                                    className={s.requireItme}
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
                            <AppButton
                                variant="clear"
                                colorType="hint"
                                sizeText="s"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (requireInput) {
                                        setRequirementsList([
                                            ...requirementsList,
                                            requireInput,
                                        ]);
                                    }

                                    setRequireInput("");
                                }}
                            >
                                Добавить требование
                            </AppButton>
                        </div>
                        {/* Обязаность */}
                        <div className={cn(s.empolyments, s.item)}>
                            <AppInput label="Обязаность сотрудника" />
                            <AppButton
                                variant="clear"
                                colorType="hint"
                                sizeText="s"
                            >
                                Добавить обязаность
                            </AppButton>
                        </div>
                        {/* Условия */}
                        <div className={cn(s.conditions, s.item)}>
                            <AppInput label="Условия работы" />
                            <AppButton
                                variant="clear"
                                colorType="hint"
                                sizeText="s"
                            >
                                Добавить условие
                            </AppButton>
                        </div>
                        {/* Навыки */}
                        <div className={cn(s.skills, s.item)}>
                            <AppInput label="Ключевые навыки" />
                            <AppButton
                                variant="clear"
                                colorType="hint"
                                sizeText="s"
                            >
                                Добавить навык
                            </AppButton>
                        </div>
                    </form>
                    <AppText
                        title="Контактные данные"
                        size="m"
                        className={s.item}
                    />
                    <form action="#">
                        <div className={cn(s.tel, s.item)}>
                            <AppInput label="Контакты" type="tel" />
                            <AppButton
                                variant="clear"
                                colorType="hint"
                                sizeText="s"
                            >
                                Добавить номер
                            </AppButton>
                        </div>
                    </form>

                    <AppButton className={cn(s.btn, s.item)}>
                        Опубликовать
                    </AppButton>
                </div>
            </AppPage>
        </MainLayout>
    );
}

VacancyPageCreate.propTypes = {};

export default VacancyPageCreate;
