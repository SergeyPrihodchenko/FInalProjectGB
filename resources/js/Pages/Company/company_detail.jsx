import MainLayout from "@/4Layouts/MainLayout/MainLayout";
import { AppCard } from "@/8Shared/AppCard/AppCard";
import { AppPage } from "@/4Layouts/AppPage/AppPage";
import { Typography } from "@/8Shared/Typography/Typography";
import React, { useState } from "react";

const Company = ({ company }) => {
    console.log("company", company);
    return (
        <MainLayout>
            <AppPage>
                <Typography variant={"h2"}>Компания</Typography>
            </AppPage>
        </MainLayout>
    );
};

export default Company;
