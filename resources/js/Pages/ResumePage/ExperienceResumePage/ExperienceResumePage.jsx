import React from "react";
//import PropTypes from 'prop-types'
import s from "./ExperienceResumePage.module.css";
import style from "../BasiceDataResumePage/BasiceDataResumePage.module.css";
import style2 from "../EducationResumePage/EducationResumePage.module.css";
import AppText from "@/8Shared/ui/AppText/AppText";


function ExperienceResumePage() {
    return (
        <div className={s.experience}>
            <AppText
                title={"В какой компании вы работали?"}
                bold
                size={"s"}
                className={style.textTitle}
            />
            <input
                type="text"
                placeholder="Название компании"
                className={style.inputBasiceData}
            />

            <AppText
                title={"На какой должности?"}
                bold
                size={"s"}
                className={style.textTitle}
            />
            <input
                type="text"
                className={style.inputBasiceData}
            />

            <AppText
                title={"Расскажите о ваших обязанностях и достижениях"}
                bold
                size={"s"}
                className={style.textTitle}
            />
                <textarea
                    className={style.textareaBasiceData}
                    placeholder="Например, изучали и анализировали информацию, технические данные, показатели и результаты работы, обобщали и систематизировали их"
                />
            <div className={s.experienceWork}>
                                
                <div className={s.experienceBeginningWork}>
                    <AppText
                        title={"Начало работы"}
                        bold
                        size={"s"}
                        className={style.textTitle}
                    />
                    <input 
                        type="date" 
                        value="2023-09-01"
                        className={style.inputDataBasiceData}
                    />
                </div>

                <div className={s.experienceEndingWork}>
                    <AppText
                        title={"Окончание"}
                        bold
                        size={"s"}
                            className={style.textTitle}
                    />
                    <div className={s.inputEndingWork}>
                        <input 
                            type="checkbox"
                            className={style2.checkboxEndingWork} 
                            id="checkboxEndingWork"
                        />
                        <label for="checkboxEndingWork">
                            <AppText
                                title={"По настоящее время"}
                                size={"s"}
                                className={s.textTitleEnding}
                            />
                        </label>
                        
                    </div>
                                    
                </div>

                <AppText
                    title={
                        <input
                             type="button"
                            value="Добавить еще опыт работы"
                            className={style2.buttonYearsExperience}
                        />}
                    bold
                    size={"s"}
                /> 
                                
            </div>    
            <AppText
                title={"Ключевые навыки"}
                bold
                size={"s"}
                className={style.textTitle}
            />
             <textarea
                className={style.textareaBasiceData}
            />
        </div>
    );
}

//ExperienceResumePage.propTypes = {}

export default ExperienceResumePage;
