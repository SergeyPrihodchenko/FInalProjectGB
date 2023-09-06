import React from 'react';
import MainLayout from "@/Layouts/MainLayout/MainLayout.jsx";
import {AppButton} from "@/Shared/ui/AppButton/AppButton";
import s from "./CompanyPage.module.css";
import cn from "classnames";
import {Head} from "@inertiajs/react";
import { IconButton, Tooltip} from "@mui/material";

function CompanyPage() {
    return (
        <MainLayout>
            <Head><title>Компания</title></Head>
            <div className={cn(s.companyPageContainer)}>
                <div className={cn(s.companyPageLeft)}>
                    <section className={cn(s.companyPageLeftCard)}>
                        <div className={cn(s.companyPageLeftCardLogo)}>
                            <img src="https://img.hhcdn.ru/employer-logo/5643321.png" alt="Лого"/>
                        </div>
                        <div className={cn(s.companyPageLeftCardInfo)}>
                            <div className={cn(s.companyPageLeftCardInfoCard)}>
                                <div className={cn(s.companyPageLeftCardInfoText)}>Москва</div>
                                <a className={cn(s.companyPageLeftCardInfoLink)} href="#">test.ru</a>
                            </div>
                            <div className={cn(s.companyPageLeftCardInfoCard)}>
                                <div className={cn(s.companyPageLeftCardInfoText,s.companyPageStrong)}>Вакансии</div>
                                <a className={cn(s.companyPageLeftCardInfoLink)} href="#">1 активная вакансия</a>
                            </div>
                            <div className={cn(s.companyPageLeftCardInfoCard)}>
                                <div className={cn(s.companyPageLeftCardInfoText,s.companyPageStrong)}>Сферы деятельности</div>
                                <div className={cn(s.companyPageLeftCardInfoText)}>Информационные технологии, системная интеграция, интернет</div>
                            </div>
                        </div>
                        <div className={cn(s.companyPageLeftToolbar)}>
                            <AppButton className={cn(s.companyPageLeftToolbarButton)} variant="clear" width="100%">
                                Я хочу тут работать
                            </AppButton>
                            <AppButton className={cn(s.companyPageLeftToolbarButton)}  variant="clear" width="100%">
                                Подписаться
                            </AppButton>
                        </div>
                    </section>

                </div>
                <div className="CompanyPageRight">
                    <div className="CompanyPageRightHeader">
                        <div className="CompanyPageRightHeaderPosition">
                            Организация
                        </div>
                        <div className="CompanyPageRightHeaderTitle">
                            <span>АО Паспорт.Цифровые продукты</span>
                            <Tooltip title="Add" arrow>
                                <IconButton aria-label="delete"/>
                            </Tooltip>
                        </div>
                        <div className="CompanyPageRightHeaderRating">

                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default CompanyPage
