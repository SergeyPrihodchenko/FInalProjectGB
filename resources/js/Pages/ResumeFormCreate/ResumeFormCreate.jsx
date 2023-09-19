import React from "react";
//import PropTypes from 'prop-types'
import s from "./ResumeFormCreate.module.css";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";


import EducationResumePage from "./EducationResumePage/EducationResumePage";
import ExperienceResumePage from "./ExperienceResumePage/ExperienceResumePage";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import BasiceDataResumePage from "./BasiceDataResumePage/BasiceDataResumePage";
import CreateResume from "./CreateResume";


function ResumeForm() {
    return (
        // <MainLayout className={"app_light_theme"}>
        //     <AppPage>
                <container className={s.createResumePage}>
                    <main className={s.mainCreateResume}>
                        <CreateResume/>
                    {/* <form>
                        <BasiceDataResumePage/>
                        <EducationResumePage/>
                        <ExperienceResumePage/>
                        
                        <form method="LINK" action={route("resumePage")}>
                            <AppButton 
                            bold 
                            sizeText = "m"
                            className={s.buttonSaveResumePage}>
                                <span>Сохранить</span>
                            </AppButton>
                        </form>
                        
                    </form> */}
                    
                    </main>
                </container>
        //     </AppPage>
        // </MainLayout>
    );
}

//ResumeForm.propTypes = {}

export default ResumeForm;
