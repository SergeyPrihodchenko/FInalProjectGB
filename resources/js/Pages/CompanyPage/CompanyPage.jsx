import React, { useState } from "react";
import MainLayout from "@/5Layouts/MainLayout/MainLayout.jsx";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import s from "./CompanyPage.module.css";
import cn from "classnames";
import { Head } from "@inertiajs/react";
import { Rating, Tooltip } from "@mui/material";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import { Typography } from "@/8Shared/Typography/Typography.jsx";
import CompanyPageReviewItem from "@/Pages/CompanyPage/CompanyPageReviewItem.jsx";
import CompanyPageEmployeeReviewItem from "@/Pages/CompanyPage/CompanyPageEmployeeReviewItem.jsx";
import CompanyPageVacanciesItem from "@/Pages/CompanyPage/CompanyPageVacanciesItem.jsx";
import { CompanyPageMockData } from "./CompanyPageMockData";
import CompanyPageBody from "./CompanyPageBody";

function CompanyPage({ auth }) {
    const user = auth?.user;
    const data = CompanyPageMockData();


    const [rating, setRating] = useState(2);
    const [vacancyOpen, setVacancyOpen] = useState(true)
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
    const mockCompanyVacancies = [
        {
            id: "1",
            title: "Агент по недвижимости",
            cards: [
                {
                    id: "1",
                    jobTitle: "Специалист по недвижимости",
                    date: "2022-07-01",
                    salaryMin: 80000,
                    salaryMax: 100000,
                    location: "Москва"
                },
                {
                    id: "2",
                    jobTitle: "Риэлтор",
                    date: "2022-06-01",
                    salaryMin: 50000,
                    salaryMax: null,
                    location: "Москва"
                }
            ]
        },
        {
            id: "2",
            title: "Программист-разработчик",
            cards: [
                {
                    id: "1",
                    jobTitle: "Frontend",
                    date: "2022-04-01",
                    salaryMin: null,
                    salaryMax: 200000,
                    location: "Москва"
                },
                {
                    id: "2",
                    jobTitle: "Backend",
                    date: "2022-02-01",
                    salaryMin: null,
                    salaryMax: 220000,
                    location: "Москва"
                }
            ]
        },
    ]
    const allVacanciesCount = mockCompanyVacancies.flatMap(item => item.cards).length
    return (
        <MainLayout className={"app_light_theme"} user={user}>
            <Head>
                <title>Компания</title>
            </Head>
            <CompanyPageBody {...data} />

          
        </MainLayout>
    );
}

export default CompanyPage;
