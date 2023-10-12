import React from "react";
//import PropTypes from 'prop-types'
import s from "./UserWorkExperience.module.css";

import AppText from "@/8Shared/ui/AppText/AppText";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import { useDispatch, useSelector } from "react-redux";
import {setDateFormatWorkBegin, 
        setDateFormatWorkEnd,
        setWorksExperience
    } from "@/Pages/ResumePage/model/slice/ResumePageSlice";


function UserWorkExperience() {
    const dispatch = useDispatch();
 
    const {
        resumes, 
        dataWorksBegin, 
        dataWorksEnd,
        yearWorksExperience 
    } = useSelector(state => state.resumePage);
     
    const companies = resumes.companies;
    console.log(companies);
    //форматы даты и периода работы
    dispatch(setDateFormatWorkBegin());
    dispatch(setDateFormatWorkEnd());
                                                                              
    //расчет стажа
    dispatch(setWorksExperience());  

              
    return (
        <div className={s.workExperience}>
            {/* <AppText
                title={"4 года 9 месяцев"}
                size="s"
                bold
                variant={"error"}
            /> */}
                        
            {
                companies !=null ? (
                companies.map((el) => {            
                    return (
                       <div className={s.workPeriods}>
                            <div className={s.userWorkPeriod}>
                                <AppText
                                    text={dataWorksBegin.concat(" - ", dataWorksEnd)}
                                    size="s"
                                />
                                <AppText
                                    text={yearWorksExperience}
                                    size="s"
                                />
                            </div>

                            <div className={s.descriptionExperience}>
                                <div className={s.company}>
                                    <AppButton
                                        variant="clear"
                                        sizeText="s"
                                        href="#"
                                        >{el.name}
                                    </AppButton>
                                </div>
                                    
                                <div className={s.responsibilities}>
                                    <AppText
                                        bold                                                            
                                        title={el.position}
                                        size="s"
                                    />

                                    <AppText
                                        size="s"
                                        text={el.achievements}
                                    /> 
                                 </div>
                            </div>
                        </div>                         
                    )
                })
                ) : null
                
            }
            
        </div>                      
    );
}

//UserWorkExperience.propTypes = {}

export default UserWorkExperience;
