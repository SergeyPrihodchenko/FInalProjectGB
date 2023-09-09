import MainLayout from "@/4Layouts/MainLayout/MainLayout";
import { AppPage } from "@/8Shared/AppPage/AppPage";
import { Typography } from "@/8Shared/Typography/Typography";
import React, { useState } from "react";

const Company = ({ companies, auth }) => {
    const user = auth?.user;

    console.log(companies);
    return (
        <MainLayout className={"app_light_theme"} user={user}>
            <AppPage>
                <Typography variant={"h2"}>Компании</Typography>
            </AppPage>
        </MainLayout>
    );
};

export default Company;
