import React from "react";
import PropTypes from "prop-types";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { Head } from "@inertiajs/react";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./CreateVacancyPage.module.css";
import cn from "classnames";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import Checkbox from "@/8Shared/Checkbox/Checkbox";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import RadioButton from "@/8Shared/RadioButton/RadioButton";
function CreateVacancyPage(props) {
    const { auth, vacancy } = props;
    const user = auth?.user;
    console.log("CreateVacancyPage props", props);
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
            <Head title="CreateVacancyPage" />
            <AppPage>
                <AppText title="Создание вакансии" size="l" />
                <AppText title="Основная информация" size="m" />
                <div className={s.mainInfo}>
                    <form action="#">
                        <AppInput
                            label="Название вакакнсии"
                            placeholder="Должность"
                        />
                        <AppInput
                            label="Где искать сотрудника"
                            placeholder="Город"
                        />
                        <div>
                            <AppText
                                text="Предполагаемый уровень дохода в месяц или за объем работ"
                                bold
                            />
                            <div className={s.paymentContainer}>
                                <div className={s.payment}>
                                    <AppInput width="260px" placeholder="От" />
                                    <AppInput width="260px" placeholder="До" />
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
                            width="760px"
                        />
                        {experience && (
                            <>
                                <AppText text="Опыт работы" />
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
                            </>
                        )}
                        {schedule && (
                            <>
                                <AppText text="График работы" />
                                {schedule?.map((item, index) => (
                                    <Checkbox
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
                                <AppText text="Тип занятости" />
                                {schedule?.map((item, index) => (
                                    <Checkbox
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
                        <div className={s.responsibilities}>
                            <AppInput label="Требования к соискателю" />
                            <AppButton
                                variant="clear"
                                colorType="hint"
                                sizeText="s"
                            >
                                Добавить требование
                            </AppButton>
                        </div>
                        {/* Обязаность */}
                        <div className={s.empolyments}>
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
                        <div className={s.conditions}>
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
                        <div className={s.skills}>
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
                    <AppText title="Контактные данные" size="m" />
                    <form action="#">
                        <div className={s.tel}>
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

                    <AppButton>Опубликовать</AppButton>
                </div>
            </AppPage>
        </MainLayout>
    );
}

CreateVacancyPage.propTypes = {};

export default CreateVacancyPage;
