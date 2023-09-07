import React from "react";
import PropTypes from "prop-types";
import { AppPage } from "@/Shared/AppPage/AppPage";
import s from "./VacancyPage.module.css";
import AppText from "@/Shared/ui/AppText/AppText";
import VacanyNav from "../VacanyPageNav/VacanyPageNav";
import VacancyPageCards from "../VacancyPageCards/VacancyPageCards";
import VacancyPageList from "../VacancyPageList/VacancyPageList";
import VacancyPageAdress from "../VacancyPageAdress/VacancyPageAdress";
import AppButton from "@/Shared/ui/AppButton/AppButton";
import VacancyPageReviews from "../VacancyPageReviews/VacancyPageReviews";
import data from "../../data.json";
import MainLayout from "@/Layouts/MainLayout/MainLayout.jsx";
import Vacancy from "@/Pages/Vacancy/Index.jsx";

//     description:
//         "ООО Stanok & Babina - Ведущий фрезеровочный завод на планете. По Вытачиваем любую деталь, любой формы и из любого материала. Ни одного отказа от производимого товара, ни одного отрицательного отзыва. Производим всегда все в срок и любого объема. Обращаясь к нам вы платите не только за идеальные заказанные детали, но и за сохранность своих нервов, уверенность в готовности вашего заказа в установленные сроки без брака.",
//     vacancyList: [
//         {
//             title: "Требования",
//             list: [
//                 "Опыт работы на металлообрабатывающих фрезерных станках",
//                 "Возможность по пальцам рук досчитать до десяти",
//                 "Умение по чертежу выполнить изготовление детали в соответствии с требованиями чертежа",
//                 "Знание режущего инструмента и станочной оснастки, наличие опыта её применения исходя из требований чертежа",
//             ],
//         },
//         {
//             title: "Обязаности",
//             list: [
//                 "Работа на металлообрабатывающем фрезерном станке",
//                 "По чертежу детали изготовить деталь из заготовки",
//                 "Поддержание порядка на рабочем месте",
//             ],
//         },
//         {
//             title: "Условия",
//             list: [
//                 "оформление по ТК РФ",
//                 "оклад + премия",
//                 "страховка пальцев рук (при потере выдаются протезы для пальцев по страховке)",
//             ],
//         },
//     ],
//     skills: {
//         title: "Ключевые навыки",
//         skillsList: [
//             "Доюросовестность и пунктуальность",
//             "Внимательность, ответственность",
//             "Желание работать и зарабатывать",
//         ],
//     },
//     contacts: {
//         title: "Контакты",
//         contactsList: [
//             { name: "Аксенов Андрей Андреевич", phone: "+7 (985) 567-35-98" },
//         ],
//     },
//     reviews: {
//         title: "Отзывы о компании",
//         reviewsList: [
//             {
//                 name: "Аксенов Андрей Андреевич",
//                 text: "Отзывы о компании",
//                 company: "Известная компания",
//             },
//         ],
//     },
// };

const navList = ["Мои резюме", "Отклики", "Помощь"];
function VacancyPage({ auth }) {
    const user = auth?.user;
    return (
        <MainLayout user={user}>
            <div className={s.vacancyPage}>
                {/* {Object.entries(AppRoutesByPathPattern).forEach(
                        ([patter, route]) => {
                            if (matchPath(patter, location.pathname)) {
                                setAppRoute(route);
                            }
                        }
                    )} */}
                <VacanyNav />
                <AppPage>
                    <div className={s.vacancyPage}>
                        <VacancyPageCards className={s.cards} />
                        {/*<VacancyPageList*/}
                        {/*    vacancyPageList={VacanyPageList}*/}
                        {/*    className={s.list}*/}
                        {/*/>*/}

                        <VacancyPageAdress className={s.adress} />
                        <AppText
                            text="Вакансия опубликована 28 августа 2023 в Москве"
                            variant="notaccented"
                            size="s"
                            className={s.date}
                        />
                        <AppButton
                            width="360px"
                            height="60px"
                            className={s.btn}
                        >
                            <AppText text="Откликнуться" />
                        </AppButton>
                        {/*<VacancyPageReviews*/}
                        {/*    list={VacanyPageList}*/}
                        {/*    className={s.reviews}*/}
                        {/*/>*/}
                    </div>
                </AppPage>
            </div>
        </MainLayout>
    );
}

VacancyPage.propTypes = {};

export default VacancyPage;
