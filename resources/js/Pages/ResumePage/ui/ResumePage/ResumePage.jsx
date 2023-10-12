import React from "react";
import { usePage } from "@inertiajs/react";
//import PropTypes from 'prop-types'
import s from "./ResumePage.module.css";

import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { useDispatch } from "react-redux";
import UserBaceData from "../UserBaceData/UserBaceData";
import { setDataAuthor, setDataResume } from "../../model/slice/ResumePageSlice";
import UserSpeciality from "../UserSpeciality/UserSpeciality";
import UserWorkExperience from "../UserWorkExperience/UserWorkExperience";
import KeyUserSkills from "../KeyUserSkills/KeyUserSkills";
import AboutUser from "../AboutUser/AboutUser";
import UserEducation from "../UserEducation/UserEducation";
import UserWorkConditions from "../UserWorkConditions/UserWorkConditions";
import { useEffect } from "react";


function ResumePage({ resume, author }) {
    //console.log(resume);
    const user = usePage().props.auth.user;
    const dispatch = useDispatch();
    
    dispatch(setDataResume(resume));
    dispatch(setDataAuthor(author));
              
    return (
        <AppPage>
            <main className={s.mainResumePage}>
                <UserBaceData />
                <UserSpeciality />
                <UserWorkExperience />
                <KeyUserSkills />
                <AboutUser />
                <UserEducation />
                <UserWorkConditions />
            </main> 
        </AppPage>
       
    );
}

//ResumePage.propTypes = {}

export default ResumePage;
