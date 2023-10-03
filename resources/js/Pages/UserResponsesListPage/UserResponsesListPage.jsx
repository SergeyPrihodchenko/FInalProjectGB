import React from "react";
import { Head } from "@inertiajs/react";
import cn from "classnames";
import s from "@/Pages/UserResponsesListPage/UserResponsesListPage.module.css";
import UserResponsesListPageCard from "@/Pages/UserResponsesListPage/UserResponsesListPageCard.jsx";

const UserResponsesListPage = ({ auth, vacancies }) => {
    const user = auth?.user;
    console.log(vacancies);
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
    return (
        <>
            <Head>
                <title>Отклики</title>
            </Head>
            <div className={cn(s.userResponsesPageContainer)}>
                {mockData?.map((item) => (
                    <UserResponsesListPageCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        conditions={item.conditions}
                        employment={item.employment}
                        payment={item.payment}
                        experience={item.experience}
                        schedule={item.schedule}
                        logo={item.logo}
                    />
                ))}
            </div>
        </>
    );
};

export default UserResponsesListPage;
