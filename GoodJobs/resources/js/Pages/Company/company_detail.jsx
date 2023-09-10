import MainLayout from "@/Layouts/MainLayout/MainLayout";
import { AppCard } from "@/Shared/AppCard/AppCard";
import { AppPage } from "@/Shared/AppPage/AppPage";
import { Typography } from "@/Shared/Typography/Typography";
import React, { useState } from "react";

const Company = ({ company }) => {

    console.log('company', company)
    return (
        <MainLayout>
            <AppPage>
                <Typography variant={'h2'}>Компания</Typography>

            </AppPage>
        </MainLayout>
    )
}

export default Company;
