import React from "react";
//import PropTypes from 'prop-types'
import s from "./ResumePage.module.css";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";

import BasiceDataResumePage from "./BasiceDataResumePage/BasiceDataResumePage";
import EducationResumePage from "./EducationResumePage/EducationResumePage";
import ExperienceResumePage from "./ExperienceResumePage/ExperienceResumePage";
import AppButton from "@/8Shared/ui/AppButton/AppButton";


function ResumePage() {
    return (
        <MainLayout className={"app_light_theme"}>
            <AppPage>
                <container className={s.createResumePage}>
                    <main className={s.mainCreateResume}>
                    <form>
                        <BasiceDataResumePage/>
                        <EducationResumePage/>
                        <ExperienceResumePage/>
                        
                        <AppButton 
                        bold 
                        sizeText = "m"
                        className={s.buttonSaveResumePage}>
                            <span>Сохранить</span>
                        </AppButton>
                    </form>
                    </main>
                </container>
            </AppPage>
        </MainLayout>
    );
}

//ResumePage.propTypes = {}

export default ResumePage;
