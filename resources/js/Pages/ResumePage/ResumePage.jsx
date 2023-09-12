import React from "react";
//import PropTypes from 'prop-types'
import s from "./ResumePage.module.css";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { ProfilePageNav } from "@/8Shared/ProfilePageNav/ProfilePageNav";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppText from "@/8Shared/ui/AppText/AppText";


function ResumePage() {
     return (
            <MainLayout className={"app_light_theme"}>
                <ProfilePageNav/>
                <AppPage>
                    <container>
                        <div className={s.basiceData}>
                            <AppText title={"Профессия"} bold size={"s"} />
                            <select>
                                <option>вывод из массива профессий</option>
                            </select>
                        
                            <AppText title={"Фамилия"} bold size={"s"} />
                            <input type="text" placeholder="Фамилия"/>
                            
                            <AppText title={"Имя"} bold size={"s"} />
                            <input type="text" placeholder="Имя"/>

                            <AppText title={"Пол"} bold size={"s"} />
                            <input type="radio" value="man" checked name="gender"/>мужской
                            <input type="radio" value="woman" name="gender"/>женский
           
                            <AppText title={"Город или регион проживания"} bold size={"s"} />
                            <input type="text" placeholder="Москва"/>

                            <AppText title={"Дата рождения"} bold size={"s"} />
                            <input type="date" value="2023-09-01" />


                            <AppText title={"Номер телефона"} bold size={"s"} />
                            <input type="phone" placeholder="+7 (999) 999-99-99"/>

                            <AppText title={"Гражданство"} bold size={"s"} />
                            <input type="text" placeholder="Россия"/>

                            <AppText title={"Разрешение на работу"} bold size={"s"} />
                            <input type="text" placeholder="Россия"/>
                        </div>

                        <div className={s.levelOfEucation}>
                            <AppText title={"Уровень образования"} bold size={"s"} />
                            
                            
                            <input type="radio" checked/>
                            <AppText title={"Вывод из массива"} size={"s"}/>
                            
                        </div>

                        <div className={s.education}>

                        </div>

                        <div className={s.experience}>

                        </div>


                    </container>
                </AppPage>
            </MainLayout>
    );
}

//ProfilePage.propTypes = {}

export default ResumePage;
