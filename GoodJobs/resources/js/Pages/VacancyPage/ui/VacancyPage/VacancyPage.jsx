import React from "react";
import PropTypes from "prop-types";
import { AppPage } from "@/Shared/AppPage/AppPage";
import s from "./VacancyPage.module.css";
import { AppButton } from "@/Shared/ui/AppButton/AppButton";
import AppText from "@/Shared/AppText/AppText";
const VacanyPageList = {
    descriprion:
        "ООО Stanok & Babina - Ведущий фрезеровочный завод на планете. По Вытачиваем любую деталь, любой формы и из любого материала. Ни одного отказа от производимого товара, ни одного отрицательного отзыва. Производим всегда все в срок и любого объема. Обращаясь к нам вы платите не только за идеальные заказанные детали, но и за сохранность своих нервов, уверенность в готовности вашего заказа в установленные сроки без брака.",
    mainObj: {
        requirements: {
            title: "Требования",
            list: [
                "   Опыт работы на металлообрабатывающих фрезерных станках",
                "Возможность по пальцам рук досчитать до десяти",
                "Умение по чертежу выполнить изготовление детали в соответствии с требованиями чертежа",
                "Знание режущего инструмента и станочной оснастки, наличие опыта её применения исходя из требований чертежа",
            ],
        },
        responsibilities: {
            title: "Обязаности",
            list: [
                "Работа на металлообрабатывающем фрезерном станке",
                "По чертежу детали изготовить деталь из заготовки",
                "Поддержание порядка на рабочем месте",
            ],
        },
        conditions: {
            title: "Условия",
            list: [
                "оформление по ТК РФ",
                "оклад + премия",
                "страховка пальцев рук (при потере выдаются протезы для пальцев по страховке)",
            ],
        },
        skills: {
            title: "Ключевые навыки",
            list: [
                "Целеустремлённость и пунктуальность",
                "Внимательность, ответственность",
                "Желание работать и зарабатывать",
            ],
        },
        contactInfo: {
            title: "Контактная информация",
            list: ["Аксенов Андрей Андреевич", "+7 (985) 567-35-98"],
        },
        adres: {
            title: "Адрес",
            list: ["Москва, Южнопортовая улица, 21с7"],
        },
    },
};
const navList = ["Мои резюме", "Отклики", "Помощь"];
export function VacancyPage({ vacancy }) {
    return (
        <div className={s.vacancyPage}>
            <nav className={s.nav}>
                <AppPage className={s.conatiner}>
                    <div className={s.navLinkList}>
                        {navList.map((navItem, index) => {
                            return (
                                <a key={index} href="#">
                                    <AppText
                                        title={navItem}
                                        className={s.navItem}
                                        bold={true}
                                    />
                                </a>
                            );
                        })}
                    </div>
                    <AppButton variant="outline">Создать резюме</AppButton>
                </AppPage>
            </nav>
            <AppPage>
                <div className={s.vacancyPage}>
                    <div className={s.vacancyCards}>
                        <div className={s.mainCard}>
                            <AppText
                                title="Токарь фрезеровщик"
                                bold
                                className={s.bold}
                            />
                        </div>
                    </div>
                </div>
            </AppPage>
        </div>
    );
}

VacancyPage.propTypes = {};
