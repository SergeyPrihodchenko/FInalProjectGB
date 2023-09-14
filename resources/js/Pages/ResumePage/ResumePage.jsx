import React from "react";
//import PropTypes from 'prop-types'
import s from "./ResumePage.module.css";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";

import BasiceDataResumePage from "./BasiceDataResumePage/BasiceDataResumePage";
import EducationResumePage from "./EducationResumePage/EducationResumePage";
import ExperienceResumePage from "./ExperienceResumePage/ExperienceResumePage";


function ResumePage() {
    return (
        <MainLayout className={"app_light_theme"}>
            <AppPage>
                <container className={s.createResumePage}>
                    <main className={s.mainCreateResume}>

                        <BasiceDataResumePage/>
                        <EducationResumePage/>
                        <ExperienceResumePage/>

                    </main>
                </container>
            </AppPage>
        </MainLayout>
    );
}

//ResumePage.propTypes = {}

export default ResumePage;
