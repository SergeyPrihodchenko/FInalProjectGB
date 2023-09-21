import React  from "react";
import MainLayout from "@/5Layouts/MainLayout/MainLayout.jsx";
import { Head } from "@inertiajs/react";
import { CompanyPageMockData } from "./CompanyPageMockData";
import CompanyPageBody from "./CompanyPageBody";

function CompanyPage({ auth }) {
    const user = auth?.user;
    const data = CompanyPageMockData();

    return (
        <MainLayout className={"app_light_theme"} user={user}>
            <Head>
                <title>Компания</title>
            </Head>
            <CompanyPageBody {...data} />


        </MainLayout>
    );
}

export default CompanyPage;
