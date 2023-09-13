import React from "react";
import PropTypes from "prop-types";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { Head } from "@inertiajs/react";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppText from "@/8Shared/ui/AppText/AppText";

function CreateVacancyPage(props) {
    const { auth, vacancy } = props;
    const user = auth?.user;
    console.log("vacancy", vacancy);

    return (
        <MainLayout className="app_light_theme" user={user}>
            <Head title="CreateVacancyPage" />
            <AppPage>
                <AppText title="CreateVacancyPage" size="xl" />
            </AppPage>
        </MainLayout>
    );
}

CreateVacancyPage.propTypes = {};

export default CreateVacancyPage;
