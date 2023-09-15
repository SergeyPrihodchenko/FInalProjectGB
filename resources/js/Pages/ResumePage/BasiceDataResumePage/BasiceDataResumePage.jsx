import React from "react";
//import PropTypes from 'prop-types'
import s from "./BasiceDataResumePage.module.css";
import AppText from "@/8Shared/ui/AppText/AppText";


function BasiceDataResumePage() {
    return (
        
        <div className={s.basiceData}>
            <AppText
                title={"Профессия"}
                bold
                size={"s"}
                className={s.textTitle}
            />
                <input
                    type="text"
                    placeholder="Дизайнер"
                    className={s.inputBasiceData}
                />

                <AppText
                    title={"Фамилия"}
                    bold
                    size={"s"}
                    className={s.textTitle}
                />
                <input
                    type="text"
                    placeholder="Фамилия"
                    className={s.inputBasiceData}
                />

                <AppText
                    title={"Имя"}
                    bold
                    size={"s"}
                    className={s.textTitle}
                />
                <input
                    type="text"
                    placeholder="Имя"
                    className={s.inputBasiceData}
                />

                <AppText
                    title={"Пол"}
                    bold
                    size={"s"}
                    className={s.textTitle}
                />

                <div className={s.inputRadioBasiceData}>
                    <input
                        type="radio"
                        value="man"
                        checked
                        name="gender"
                        id="genderMen"
                        className={s.genderBasiceData}
                    />
                    <label for="genderMen">
                        <AppText
                            text={"Мужской"}
                            size={"m"}
                            className={s.textInputRadio}
                        />
                    </label>
                    
                    <input
                        type="radio"
                        value="woman"
                        name="gender"
                        id="genderWoman"
                        className={s.genderBasiceData}
                    />
                    <label for="genderWoman">
                        <AppText
                                text={"Женский"}
                            size={"m"}
                            className={s.textInputRadio}
                        />
                    </label>    
                </div>

                <AppText
                    title={"Город или регион проживания"}
                    bold
                    size={"s"}
                    className={s.textTitle}
                />
                <input
                    type="text"
                    placeholder="Москва"
                    className={s.inputBasiceData}
                />

                <AppText
                    title={"Дата рождения"}
                    bold
                    size={"s"}
                    className={s.textTitle}
                />
                 <input 
                    type="date" 
                    value="2023-09-01"
                    className={s.inputDataBasiceData}
                />

                <AppText
                    title={"Номер телефона"}
                    bold
                    size={"s"}
                    className={s.textTitle}
                />
                <input
                    type="phone"
                    placeholder="+7 (999) 999-99-99"
                    className={s.inputBasiceData}
                />

                <AppText
                    title={"Гражданство"}
                    bold
                    size={"s"}
                    className={s.textTitle}
                />
                <input
                    type="text"
                     placeholder="Россия"
                    className={s.inputBasiceData}
                />

                <AppText
                    title={"Разрешение на работу"}
                    bold
                    size={"s"}
                     className={s.textTitle}
                />
                <input
                    type="text"
                    placeholder="Россия"
                    className={s.inputBasiceData}
                 />
            </div>
    );
}

//BasiceDataResumePage.propTypes = {}

export default BasiceDataResumePage;
