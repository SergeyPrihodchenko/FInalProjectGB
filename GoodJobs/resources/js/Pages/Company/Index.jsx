import MainLayout from "@/Layouts/MainLayout/MainLayout";
import { AppPage } from "@/Shared/AppPage/AppPage";
import { Typography } from "@/Shared/Typography/Typography";
import React, { useState } from "react";

const Company = ({ companies }) => {

    console.log(companies)
    return (
        <MainLayout>
            <AppPage>
                <Typography variant={'h2'}>Компании</Typography>
            </AppPage>
        </MainLayout>
    )
}

export default Company;
