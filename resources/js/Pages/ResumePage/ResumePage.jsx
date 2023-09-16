import React from "react";
//import PropTypes from 'prop-types'
import s from "./ResumePage.module.css";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";


function ResumePage() {
    return (
        <MainLayout className={"app_light_theme"}>
            <AppPage>
                <container className={s.containerResumePage}>
                    <main className={s.mainResumePage}>
                    </main>
                </container>
            </AppPage>
        </MainLayout>
    );
}

//ResumePage.propTypes = {}

export default ResumePage;
