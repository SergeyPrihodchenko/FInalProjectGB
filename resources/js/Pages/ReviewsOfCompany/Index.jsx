import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import React, { useCallback, useEffect, useRef, useState } from "react";


import {Typography} from "@/8Shared/Typography/Typography.jsx";
import Company from "@/Pages/Company/Index.jsx";
import {Head} from "@inertiajs/react";
import CompanyPageBody from "@/Pages/CompanyPage/CompanyPageBody.jsx";


const ReviewsOfCompany = ({ reviewsOfCompanies, name, auth }) => {
    console.log('reviewsOfCompanies', reviewsOfCompanies);



    return (
        <MainLayout>
            <AppPage>
                <Typography variant={"h2"}>Отзывы о компаниях</Typography>

            </AppPage>
        </MainLayout>
    );
};


export default ReviewsOfCompany;
