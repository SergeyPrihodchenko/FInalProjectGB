import MainLayout from "@/Layouts/MainLayout/MainLayout";
import { AppCard } from "@/Shared/AppCard/AppCard";
import { AppPage } from "@/Shared/AppPage/AppPage";
import { Typography } from "@/Shared/Typography/Typography";
import React, { useState } from "react";

const Vacancy = ({ vacancies, title }) => {

    console.log(vacancies)
    return (
        <MainLayout>
            <AppPage>
                <Typography variant={'h2'}>{title}</Typography>
                {vacancies.map(vacancy => <AppCard key={vacancy.id} card={vacancy} width={'100%'} minHeight={'180px'} />)}
            </AppPage>
        </MainLayout>
    )
}

export default Vacancy;
