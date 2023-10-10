import React from "react";
//import PropTypes from 'prop-types'
import s from "./UserEducation.module.css";

import AppText from "@/8Shared/ui/AppText/AppText";
import { useSelector } from "react-redux";

function UserEducation() {    
    const {resumes} = useSelector(state => state.resumePage);
             
    return (                          
        <div className={s.education}>
            <AppText
                bold
                title={resumes.education}
                size="s"
            />
                             
            {
                resumes.educational_institute.map((el) => {
                    let yearsEducationEnd = new Date(el.graduation_year);
                    let yearsEducationStart = new Date(el.start_year);
                                    
                    let yearsEducationExit = yearsEducationEnd.getFullYear();
                    let yearsEducationBegin = yearsEducationStart.getFullYear();
                    return (
                        <div className={s.educationPeriods}>
                            <div className={s.userEducationPeriod}>
                                <AppText
                                    text={yearsEducationBegin + " - " + yearsEducationExit}
                                     size="s"
                                />
                            </div>
                            <div className={s.descriptionEducation}>
                                <AppText
                                    size="s"
                                    text={el.title}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>                            
    );
}

//UserEducation.propTypes = {}

export default UserEducation;
