import MainLayout from "@/5Layouts/MainLayout/MainLayout";
//import { AppCard } from "@/8Shared/ui/AppCard/AppCard";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { Typography } from "@/8Shared/Typography/Typography";
import React, { useState } from "react";






const Company = ({ company }) => {
    console.log("company", company);
    return (
        <MainLayout>
            <AppPage>
                <Typography variant={"h2"}>Здесь отображается конкретная компания</Typography>
            </AppPage>
        </MainLayout>
    );
};

export default Company;
