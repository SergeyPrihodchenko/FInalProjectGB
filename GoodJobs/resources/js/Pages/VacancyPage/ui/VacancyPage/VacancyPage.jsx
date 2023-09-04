import React from "react";
import PropTypes from "prop-types";
import { AppPage } from "@/Shared/AppPage/AppPage";
import s from "./VacancyPage.module.css";
import { AppButton } from "@/Shared/ui/AppButton/AppButton";
import AppText from "@/Shared/ui/AppText/AppText";
import VacanyNav from "../VacanyNav/VacanyNav";
import VacancyCards from "../VacancyCards/VacancyCards";

const VacanyPageList = [
    {
        list: [
            "ООО Stanok & Babina - Ведущий фрезеровочный завод на планете. По Вытачиваем любую деталь, любой формы и из любого материала. Ни одного отказа от производимого товара, ни одного отрицательного отзыва. Производим всегда все в срок и любого объема. Обращаясь к нам вы платите не только за идеальные заказанные детали, но и за сохранность своих нервов, уверенность в готовности вашего заказа в установленные сроки без брака.",
        ],
    },
    {
        title: "Обязаности",
        list: [
            "Работа на металлообрабатывающем фрезерном станке",
            "По чертежу детали изготовить деталь из заготовки",
            "Поддержание порядка на рабочем месте",
        ],
    },
    {
        title: "Условия",
        list: [
            "оформление по ТК РФ",
            "оклад + премия",
            "страховка пальцев рук (при потере выдаются протезы для пальцев по страховке)",
        ],
    },
    {
        title: "Ключевые навыки",
        list: [
            "Целеустремлённость и пунктуальность",
            "Внимательность, ответственность",
            "Желание работать и зарабатывать",
        ],
    },
    {
        title: "Контактная информация",
        list: ["Аксенов Андрей Андреевич", "+7 (985) 567-35-98"],
    },
    {
        title: "Адрес",
        list: ["Москва, Южнопортовая улица, 21с7"],
    },
];

export function VacancyPage(props) {
};
const navList = ["Мои резюме", "Отклики", "Помощь"];
export function VacancyPage({ vacancy }) {
    return (
        <div className={s.vacancyPage}>
            <VacanyNav />
            <AppPage>
                <div className={s.vacancyPage}>
                    <div className={s.vacancyCards}>
                        <VacancyCards />
                    </div>
                    {/* {Object.entries(AppRoutesByPathPattern).forEach(
                        ([patter, route]) => {
                            if (matchPath(patter, location.pathname)) {
                                setAppRoute(route);
                            }
                        }
                    )} */}
                    <div className={s.vacancyList}>
                        {VacanyPageList.map((VacanyPageItem, index) => {
                            console.log(VacanyPageItem.list);
                            return (
                                <div key={index + index + index}>
                                    <AppPage
                                        title={VacanyPageItem.title}
                                        bold
                                    />
                                    {/* {VacanyPageItem?.list.map((item, index) => {
                                        log
                                        return (
                                            <AppPage
                                                keu={
                                                    index +
                                                    index +
                                                    index +
                                                    index
                                                }
                                                text={item}
                                            />
                                        );
                                    })} */}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </AppPage>
        </div>
    );
}

VacancyPage.propTypes = {};
