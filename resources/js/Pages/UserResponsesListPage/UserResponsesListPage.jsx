import React from "react";
import { Head } from "@inertiajs/react";
import cn from "classnames";
import s from "@/Pages/UserResponsesListPage/UserResponsesListPage.module.css";
import UserResponsesListPageCard from "@/Pages/UserResponsesListPage/UserResponsesListPageCard.jsx";

const UserResponsesListPage = ({ auth }) => {
    const user = auth?.user;
    const mockData = [
        {
            id: "1",
            title: "Продажник",
            conditions: "ООО Продажник",
            employment: "Москва",
            payment: "100000",
            experience: "от 3 до 6 лет",
            schedule: "Уютный офис",
            logo: "",
        },
        {
            id: "2",
            title: "Продажник2",
            conditions: "ООО Продажник2",
            employment: "Москва",
            payment: "100000",
            experience: "от 3 до 6 лет",
            schedule: "Уютный офис",
            logo: "",
        },
        {
            id: "3",
            title: "Продажник3",
            conditions: "ООО Продажник3",
            employment: "Москва",
            payment: "100000",
            experience: "от 3 до 6 лет",
            schedule: "Уютный офис",
            logo: "",
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
