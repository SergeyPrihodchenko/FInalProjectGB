import React, { useState } from "react";
import MainLayout from "@/4Layouts/MainLayout/MainLayout.jsx";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import s from "./CompanyPage.module.css";
import cn from "classnames";
import { Head } from "@inertiajs/react";
import { Rating, Tooltip } from "@mui/material";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import { Typography } from "@/8Shared/Typography/Typography.jsx";
import CompanyPageReviewItem from "@/Pages/CompanyPage/CompanyPageReviewItem.jsx";
import CompanyPageEmployeeReviewItem from "@/Pages/CompanyPage/CompanyPageEmployeeReviewItem.jsx";

function CompanyPage({ auth }) {
    const user = auth?.user;
    const [rating, setRating] = useState(2);
    const mockCountReview = 2;
    const mockReview = [
        {
            id: "1",
            number: "4,0",
            isPercent: false,
            subtitle: "очень хорошо",
            title: "Оценка Dream Job",
        },
        {
            id: "2",
            number: "72",
            isPercent: true,
            subtitle: "",
            title: "Рекомендуют работодателя",
        },
    ];
    const mockEmployeeReview = [
        {
            id: "1",
            rating: 4,
            date: "2022-07-01",
            title: "Отзыв сотрудника",
            subtitle: "График, отношение с коллективом",
        },
        {
            id: "2",
            rating: 5,
            date: "2022-05-01",
            title: "Отзыв сотрудника",
            subtitle: "Все супер",
        },
    ];
    return (
        <MainLayout className={"app_light_theme"} user={user}>
            <Head>
                <title>Компания</title>
            </Head>
            <div className={cn(s.companyPageContainer)}>
                <div></div>
                <div className={cn(s.companyPageLeft)}>
                    <section className={cn(s.companyPageLeftCard)}>
                        <div className={cn(s.companyPageLeftCardLogo)}>
                            <img
                                src="https://img.hhcdn.ru/employer-logo/6009790.jpeg"
                                alt="Лого"
                            />
                        </div>
                        <div className={cn(s.companyPageLeftCardInfo)}>
                            <div className={cn(s.companyPageLeftCardInfoCard)}>
                                <div
                                    className={cn(
                                        s.companyPageLeftCardInfoText
                                    )}
                                >
                                    Москва
                                </div>
                                <a
                                    className={cn(
                                        s.companyPageLeftCardInfoLink
                                    )}
                                    href="#"
                                >
                                    test.ru
                                </a>
                            </div>
                            <div className={cn(s.companyPageLeftCardInfoCard)}>
                                <div
                                    className={cn(
                                        s.companyPageLeftCardInfoText,
                                        s.companyPageStrong
                                    )}
                                >
                                    Вакансии
                                </div>
                                <a
                                    className={cn(
                                        s.companyPageLeftCardInfoLink
                                    )}
                                    href="#"
                                >
                                    1 активная вакансия
                                </a>
                            </div>
                            <div className={cn(s.companyPageLeftCardInfoCard)}>
                                <div
                                    className={cn(
                                        s.companyPageLeftCardInfoText,
                                        s.companyPageStrong
                                    )}
                                >
                                    Сферы деятельности
                                </div>
                                <div
                                    className={cn(
                                        s.companyPageLeftCardInfoText
                                    )}
                                >
                                    Информационные технологии, системная
                                    интеграция, интернет
                                </div>
                            </div>
                        </div>
                        <div className={cn(s.companyPageLeftToolbar)}>
                            <AppButton
                                className={cn(s.companyPageLeftToolbarButton)}
                                variant="clear"
                                width="100%"
                            >
                                Я хочу тут работать
                            </AppButton>
                            <AppButton
                                className={cn(s.companyPageLeftToolbarButton)}
                                variant="clear"
                                width="100%"
                            >
                                Подписаться
                            </AppButton>
                        </div>
                    </section>
                </div>
                <div className={s.companyPageRight}>
                    <div className={s.companyPageHeader}>
                        <div className={s.CompanyPageRightHeaderPosition}>
                            Организация
                        </div>
                        <div className={s.CompanyPageRightHeaderTitle}>
                            <span className={s.CompanyPageRightHeaderTitleText}>
                                ООО Maxima
                            </span>
                            <Tooltip
                                title="Компания прошла проверку на сайте"
                                arrow
                            >
                                <CheckCircleOutlineSharpIcon />
                            </Tooltip>
                        </div>
                        <div className={s.CompanyPageRightHeaderRating}>
                            <span
                                className={s.CompanyPageRightHeaderRatingText}
                            >
                                {rating}
                            </span>
                            <Rating
                                name="simple-controlled"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                }}
                            />
                            <a
                                className={cn(
                                    s.companyPageLeftCardInfoLink,
                                    s.companyPageRatingLink
                                )}
                                href="#"
                            >
                                {mockCountReview} отзыва
                            </a>
                        </div>
                    </div>
                    <div className={s.companyPageRightInfo}>
                        <strong>
                            Maxima — IT-компания со штатом более 200
                            сотрудников. Мы занимаемся разработкой программных
                            продуктов для комплексного решения бизнес-задач,
                            осуществляя полный цикл разработки и поддержки
                            IT-продуктов.
                        </strong>
                        <article>
                            <strong>Видение: </strong>«Мы понимаем потребности
                            конечных пользователей сервисов нашего заказчика и
                            создаём качественные продукты, которые просты и
                            удобны в использовании».
                        </article>
                        <strong>Ценности:</strong>
                        <strong>1. Сотрудники</strong>
                        <p>
                            Мы создаём условия, в которых сотрудники могут
                            максимально прокачать свои и soft и hard skills и
                            стать специалистами уровня senior или руководителями
                            команды.
                        </p>
                        <div className={s.companyPageRightInfoContacts}>
                            <p>
                                Адрес: 420054, РТ г. Казань ул. Габдуллы Тукая,
                                125, корпус 3
                            </p>
                            <p>Телефон: 8 (843) 2072740</p>
                            <p>Электронная почта: hr@maxima.life</p>
                        </div>
                    </div>
                    <div className={s.companyPageReview}>
                        <Typography variant="h6">Отзывы о компании</Typography>
                        <div className={s.companyPageReviewCard}>
                            {mockReview.map((item) => (
                                <CompanyPageReviewItem
                                    key={item.id}
                                    {...item}
                                />
                            ))}
                            <div className={s.companyPageReviewButtonCard}>
                                <span>
                                    Ваши отзывы помогают людям принимать
                                    взвешенные карьерные решения
                                </span>
                                <AppButton
                                    className={cn(
                                        s.companyPageReviewButtonCardButton,
                                        s.companyPageLeftToolbarButton
                                    )}
                                    variant="filled"
                                    width="170px"
                                >
                                    Оставить отзыв
                                </AppButton>
                            </div>
                        </div>
                    </div>
                    <div className={s.companyPageReview}>
                        <Typography variant="h6">
                            Что говорят сотрудники
                        </Typography>
                        <div className={s.companyPageEmployeeReviewCards}>
                            {mockEmployeeReview.map((item) => (
                                <CompanyPageEmployeeReviewItem
                                    key={item.id}
                                    {...item}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default CompanyPage;
