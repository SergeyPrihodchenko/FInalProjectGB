import React from "react";
//import PropTypes from 'prop-types'
import s from "./ResumePage.module.css";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppText from "@/8Shared/ui/AppText/AppText";


// arrayUserBaceData = [
//     {
//         name: "Иванов Иван Иванович",
//         gender: "Мужчина",
//         age: "33",
//         birthDay: "31 февраля 1990 года",
//         phone: "+7 (999) 999-99-99",
//         email: "IvanovIvan@mail.ru",
//         address: "Адлер",
//         preferences: 
//             [
//                 "не готов к переезду",
//                 "не готов к командировкам"
//             ],
//     },
// ]

function ResumePage() {
    return (
        <MainLayout className={"app_light_theme"}>
            <AppPage>
                <container className={s.containerResumePage}>
                    <main className={s.mainResumePage}>
                        <a href="#">
                            <AppText 
                            text={
                                <span className={s.linkResumePage}>
                                    К списку моих резюме
                                </span>}
                            size="s"
                            />
                        </a>
                        <div class={s.baceData}>
                            <div class={s.userBaceData}>
                                <AppText text={"Сейчас на сайте"} size="s"/>
                                
                                <div className={s.userData}>
                                    <AppText bold title={"Иванов Иван Иванович"} size="s"/>
                                   <div className={s.userDataForm}>
                                        <AppText text={" Мужчина "} size="s"/>
                                        <AppText text={", 33 года "} size="s"/>
                                        <AppText text={", родился 31 февраля 1990 года "} size="s"/>
                                    </div> 
                                    <a href="#" className={s.linkResumePage}>Редактировать</a> 
                                </div>

                                <div className={s.userContacts}>
                                    <AppText title={"Контакты"} size="m"/>
                                    <AppText text={"+7 (999) 999-99-99"} className={s.userContactsPhone} size="s"/>
                                    <div className={s.userEmail}>
                                        <AppText text={<span className={s.userEmailText}>IvanovIvan@mail.ru</span>} size="s"/>
                                        <AppText text={" — предпочитаемый способ связи"} size="s"/>
                                    </div>
                                    <a href="#" className={s.linkResumePage}>Редактировать</a>
                                </div>

                                <div className={s.userBaceAddress}>
                                    <div className={s.userAddress}>
                                        <AppText text={"Адлер"} size="s"/>
                                        <AppText text={", не готов к переезду"} size="s"/>
                                        <AppText text={", не готов к командировкам"} size="s"/>
                                    </div>
                                    <a href="#" className={s.linkResumePage}>Редактировать</a>
                                </div>

                                <div className={s.userSearchArea}>
                                    <AppText text={"Указан примерный район поиска работы"} size="s"/>
                                    <a href="#" 
                                        className={s.linkResumePage}>
                                            Показать карту
                                    </a>
                                </div>
                            </div>
                            <div class={s.userPhoto}>
                                <img src="#" className={s.imgUserPhoto}/>
                                <a href="#" className={s.linkResumePage}>Изменить фото</a>
                            </div>
                        </div>

                        <div className={s.userSpeciality}>
                            <div className={s.speciality}>
                                <AppText bold title={"Инженер"} size="s"/>
                                <a href="#" className={s.specialityName}>Редактировать</a>
                            </div>
                            <div className={s.specialization}>
                                <AppText text={"Специализации:"} size="s"/>
                                <AppText text={"Инженерная"} className={s.specializationText} size="s"/>
                            </div>
                            

                            <div className={s.employment}>
                                <AppText text={"Занятость"} size="s"/>
                                <AppText text={": полная занятость"} size="s"/>
                                <AppText text={", стажировка"} size="s"/>
                            </div> 
                            
                            <div className={s.schedule}>
                                <AppText text={"График работы"} size="s"/>
                                <AppText text={": полный день"} size="s"/>
                                <AppText text={", сменный график"} size="s"/>
                                <AppText text={", гибкий график"} size="s"/>
                                <AppText text={", удаленная работа"} size="s"/>
                            </div>    
                        </div>
                        <div className={s.userExperience}>
                            <div className={s.userExperienceTitle}>
                                <AppText bold title={"Опыт работы 4 года 9 месяцев"} size="s"/>
                                <a href="#" className={s.specialityName}>Редактировать</a>
                            </div>
                                <AppText text={"Январь 2019 — по настоящее время 4 года 9 месяцев"} size="s"/>
                            <div>

                            </div>
                            <div>

                            </div>
                                
                        </div>
                        
                    </main>
                </container>
            </AppPage>
        </MainLayout>
    );
}

//ResumePage.propTypes = {}

export default ResumePage;
