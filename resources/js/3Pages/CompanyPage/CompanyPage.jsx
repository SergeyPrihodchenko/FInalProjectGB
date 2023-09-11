import React from "react";
import MainLayout from "@/5Layouts/MainLayout/MainLayout.jsx";
import { Head } from "@inertiajs/react";
import PropTypes from "prop-types";
import CompanyPageBody from "@/3Pages/CompanyPage/CompanyPageBody.jsx";
import { CompanyPageMockData } from "@/3Pages/CompanyPage/CompanyPageMockData.js";

function CompanyPage({auth}) {
    const user = auth?.user;
    const data = CompanyPageMockData()

    return (
        <MainLayout className={"app_light_theme"} user={user}>
            <Head>
                <title>Компания</title>
            </Head>
            <CompanyPageBody {...data}/>
        </MainLayout>
    );
}

CompanyPage.propTypes = {
    auth: PropTypes.object,
};

export default CompanyPage;
