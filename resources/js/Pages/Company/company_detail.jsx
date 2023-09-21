import MainLayout from "@/5Layouts/MainLayout/MainLayout";
//import { AppCard } from "@/8Shared/ui/AppCard/AppCard";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { Typography } from "@/8Shared/Typography/Typography";
import React, { useState } from "react";

const Company = ({ company, auth }) => {
    const user = auth?.user;
    console.log("company", company);
    return (
        <MainLayout className={"app_light_theme"} user={user}>
            <AppPage>
                {company ? (
                    <div>
                        имя <div>{company.name}</div>
                        почта <div>{company.email}</div>
                    </div>
                ) : null}
            </AppPage>
        </MainLayout>
    );
};

export default Company;
