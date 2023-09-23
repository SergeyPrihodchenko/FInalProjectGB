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
                        почта <div>{company.email}</div>
                        имя <div>{company.name}</div>
                        Сфера деятельности <div>{company.business_profile}</div>
                        Сайт <div>{company.website}</div>
                        Город или регион расположения <div>{company.region_of_location}</div>
                        Дата основания <div>{company.date_create}</div>
                        Контактный номер телефона <div>{company.phone_number}</div>
                        Заскажите о своей компании <div>{company.description}</div>
                    </div>
                ) : null}
            </AppPage>
        </MainLayout>
    );
};

export default Company;
