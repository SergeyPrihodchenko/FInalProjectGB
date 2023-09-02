import MainLayout from "@/Layouts/MainLayout/MainLayout";
import { AppCard } from "@/Shared/AppCard/AppCard";
import { AppPage } from "@/Shared/AppPage/AppPage";
import { Typography } from "@/Shared/Typography/Typography";
import React, { useState } from "react";

const Vacancy = ({ vacancies }) => {

    console.log(vacancies)
    return (
        <MainLayout>
            <AppPage>
                <Typography variant={'h2'}>Вакансии</Typography>
                {vacancies.map(vacancy => <AppCard key={vacancy.name} card={vacancy} width={'100%'} minHeight={'180px'} />)}
            </AppPage>
        </MainLayout>
    )
}

export default Vacancy
