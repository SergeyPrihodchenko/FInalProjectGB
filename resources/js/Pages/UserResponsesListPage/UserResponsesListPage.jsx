import React from "react";
import { Head } from "@inertiajs/react";
import cn from "classnames";
import s from "@/Pages/UserResponsesListPage/UserResponsesListPage.module.css";
import UserResponsesListPageCard from "@/Pages/UserResponsesListPage/UserResponsesListPageCard.jsx";
import { useState } from "react";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppText from "@/8Shared/ui/AppText/AppText";
import { useEffect } from "react";
import axios from "axios";

const UserResponsesListPage = ({ auth, vacancies }) => {
    const user = auth?.user;
    console.log(vacancies);
    const [responsesList, setResponsesList] = useState(vacancies);
    const mockData = [
        {
            id: "1",
            title: "Продажник",
            conditions: "ООО Продажник",
            employment: "Москва",
            payment: "100000",
            experience: "от 3 до 6 лет",
            schedule: "Уверенный опыт в продажах",
            logo: "",
        },
        {
            id: "2",
            title: "Продажник2",
            conditions: "ООО Продажник2",
            employment: "Москва",
            payment: "100000",
            experience: "от 3 до 6 лет",
            schedule: "Уверенный опыт в продажах",
            logo: "",
        },
        {
            id: "3",
            title: "Продажник3",
            conditions: "ООО Продажник3",
            employment: "Москва",
            payment: "100000",
            experience: "от 3 до 6 лет",
            schedule: "Уверенный опыт в продажах",
            logo: "https://img.hhcdn.ru/employer-logo/3381258.png",
        },
    ];
    useEffect(() => {
        const getStatusEachVacancy = async () => {
            const res = await axios.get('/viewed');
            console.log(res.data);
        }
        // getStatus();
    }, [])
    return (
        <>
            <Head>
                <title>Отклики</title>
            </Head>
            <AppPage>
                <AppText
                    title={'Отклики и приглашения'}
                    size={'m'}
                    bold
                    className={s.userResponsesPageTitle}
                />
                <div className={cn(s.userResponsesPageContainer)}>
                    {responsesList?.map((item) => (
                        <UserResponsesListPageCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            conditions={item.conditions}
                            employment={item.employment}
                            payment={item.payment}
                            experience={item.experience}
                            schedule={item.schedule}
                        // logo={item.logo}
                        />
                    ))}
                    {responsesList.length === 0 && <p>У вас нет активных откликов.</p>}
                </div>
            </AppPage>
        </>
    );
};

export default UserResponsesListPage;
