import React, { useState } from 'react';
import MainLayout from "@/Layouts/MainLayout/MainLayout.jsx";
import AppButton from "@/Shared/ui/AppButton/AppButton";
import s from "./CompanyPage.module.css";
import cn from "classnames";
import { Head } from "@inertiajs/react";
import { Rating, Tooltip } from "@mui/material";
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';

function CompanyPage() {
    const [rating, setRating] = useState(2)
    const mockCountReview = 2
    return (
        <MainLayout>
            <Head><title>Компания</title></Head>
            <div className={cn(s.companyPageContainer)}>
                <div className={cn(s.companyPageLeft)}>
                    <section className={cn(s.companyPageLeftCard)}>
                        <div className={cn(s.companyPageLeftCardLogo)}>
                            <img src="https://img.hhcdn.ru/employer-logo/6009790.jpeg" alt="Лого" />
                        </div >
                        <div className={cn(s.companyPageLeftCardInfo)}>
                            <div className={cn(s.companyPageLeftCardInfoCard)}>
                                <div className={cn(s.companyPageLeftCardInfoText)}>Москва</div>
                                <a className={cn(s.companyPageLeftCardInfoLink)} href="#">test.ru</a>
                            </div>
                            <div className={cn(s.companyPageLeftCardInfoCard)}>
                                <div className={cn(s.companyPageLeftCardInfoText, s.companyPageStrong)}>Вакансии</div>
                                <a className={cn(s.companyPageLeftCardInfoLink)} href="#">1 активная вакансия</a>
                            </div>
                            <div className={cn(s.companyPageLeftCardInfoCard)}>
                                <div className={cn(s.companyPageLeftCardInfoText, s.companyPageStrong)}>Сферы деятельности</div>
                                <div className={cn(s.companyPageLeftCardInfoText)}>Информационные технологии, системная интеграция, интернет</div>
                            </div>
                        </div>
                        <div className={cn(s.companyPageLeftToolbar)}>
                            <AppButton className={cn(s.companyPageLeftToolbarButton)} variant="clear" width="100%">
                                Я хочу тут работать
                            </AppButton>
                            <AppButton className={cn(s.companyPageLeftToolbarButton)} variant="clear" width="100%">
                                Подписаться
                            </AppButton>
                        </div>
                    </section >

                </div >
                <div className={s.companyPageRight}>
                    <div className={s.companyPageHeader}>
                        <div className={s.CompanyPageRightHeaderPosition}>
                            Организация
                        </div>
                        <div className={s.CompanyPageRightHeaderTitle}>
                            <span className={s.CompanyPageRightHeaderTitleText}>ООО Maxima</span>
                            <Tooltip title="Компания прошла проверку на сайте" arrow>
                                <CheckCircleOutlineSharpIcon />
                            </Tooltip>
                        </div>
                        <div className={s.CompanyPageRightHeaderRating}>
                            <span className={s.CompanyPageRightHeaderRatingText}>{rating}</span>
                            <Rating
                                name="simple-controlled"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                }}
                            />
                            <a className={cn(s.companyPageLeftCardInfoLink, s.companyPageRatingLink)} href="#">{mockCountReview} отзыва</a>
                        </div>
                    </div>
                    <div className={s.companyPageRightInfo}>
                        <strong>Maxima — IT-компания со штатом более 200 сотрудников. Мы занимаемся разработкой программных продуктов для комплексного решения бизнес-задач, осуществляя полный цикл разработки и поддержки IT-продуктов.</strong>
                        <article><strong>Видение: </strong>«Мы понимаем потребности конечных пользователей сервисов нашего заказчика и создаём качественные продукты, которые просты и удобны в использовании».</article>
                        <strong>
                            Ценности:
                        </strong>
                        <strong>
                            1. Сотрудники
                        </strong>
                        <p>
                            Мы создаём условия, в которых сотрудники могут максимально прокачать свои и soft и hard skills и стать специалистами уровня senior или руководителями команды.
                        </p>
                        <div className={s.companyPageRightInfoContacts}>
                            <p>Адрес: 420054, РТ г. Казань ул. Габдуллы Тукая, 125, корпус 3</p>
                            <p>Телефон: 8 (843) 2072740</p>
                            <p>Электронная почта: hr@maxima.life</p>
                        </div>
                    </div>
                </div >
            </div >
        </MainLayout >
    );
}

export default CompanyPage
