import React from "react";
//import PropTypes from 'prop-types'
import style from "../BasiceDataResumePage/BasiceDataResumePage.module.css";
import s from "./EducationResumePage.module.css";
import AppText from "@/8Shared/ui/AppText/AppText";

const arrayEducation = [
    "Среднее",
    "Среднее специальное",
    "Неоконченное высшее",
    "Высшее",
    "Бакалавр",
    "Магистр",
    "Кандидат наук",
    "Доктор наук",
];

function EducationResumePage() {
    return (
        <div className={s.educationResumePage}>
            <div className={s.levelOfEucation}>
                <AppText
                    title={"Уровень образования"}
                    bold
                    size={"s"}
                    className={style.textTitle}
                />

                <div className={s.education}>
                    {arrayEducation.map((el) => {
                        // console.log(el);
                        return (
                            <div className={style.inputRadioBasiceData}>
                                <input type="checkbox" className={s.educationCheckbox} id={el}/>
                                <label for={el}>
                                    <AppText
                                        text={el}
                                        size={"m"}
                                        className={style.textInputRadio}
                                    />
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={s.education}>
                <div>
                    <AppText
                        title={"Название учебного заведения"}
                        bold
                        size={"s"}
                        className={style.textTitle}
                    />
                    <input
                        type="text"
                        placeholder="Название"
                        className={style.inputBasiceData}
                    />

                    <AppText
                        title={"Факультет"}
                        bold
                        size={"s"}
                        className={style.textTitle}
                    />
                    <input
                        type="text"
                        className={style.inputBasiceData}
                    />

                    <AppText
                        title={"Специализация"}
                        bold
                        size={"s"}
                        className={style.textTitle}
                    />
                    <input
                        type="text"
                        className={style.inputBasiceData}
                    />

                    <AppText
                        title={"Год окончания"}
                        bold
                        size={"s"}
                        className={style.textTitle}
                    />
                    <input
                        type="text"
                        className={style.inputYearsEducation}
                    />
                    <AppText
                        title={
                            <input
                                type="button"
                                value="Добавить учебное заведение"
                                className={s.buttonYearsEducation}
                            />}
                        bold
                        size={"s"}
                    />     
                </div>
            </div>
</div>
                        
    );
}

//EducationResumePage.propTypes = {}

export default EducationResumePage;
