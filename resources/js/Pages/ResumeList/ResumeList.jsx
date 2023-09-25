import React from "react";
import { usePage } from "@inertiajs/react";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./ResumeList.module.css";
import AppButton from "@/8Shared/ui/AppButton/AppButton";


function ResumePage({resumes}){

    const user = usePage().props.auth.user

    return(

        <AuthContext.Provider value={{user}}>
            <MainLayout className={"app_light_theme"}>
                <AppPage>
                    <main className={s.mainResumeList}>
                        <AppText 
                            title={"Мои резюме"} 
                            size="m"
                            bold
                            className={s.titleResumeList}
                        />
                        
                        {resumes.map((resume) => {
                            return (
                            <div class={s.resumeList}> 
                                <div class={s.userResume}>
                                    <div className={s.userData}>
                                        <AppText 
                                            title={
                                                <span 
                                                    className={s.titleResume}>
                                                        {resume.profession}
                                                </span>
                                                } 
                                            bold 
                                            size="xs"
                                        />

                                        <AppText 
                                            title={"90 000 ₽"} 
                                            size="s"
                                            bold
                                            className={s.salaryResume}
                                        />
                                        <AppText 
                                            text={"54 года"} 
                                            size="xs"
                                        />
                                        <AppText 
                                            text={
                                                <span 
                                                    className={s.skillUser}>
                                                        Последнее место работы
                                                </span>
                                            } 
                                            size="xs"
                                            
                                        />
                                        
                                        <div className={s.lastSkill}>
                                            <AppText 
                                                text={"ИП Глизин"} 
                                                size="xs"
                                                />
                                            <AppText 
                                                text={", январь 2021"} 
                                                size="xs"
                                                />
                                            <AppText 
                                                text={"- по настоящее время"} 
                                                size="xs"
                                            />
                                        </div>
                                        <AppText 
                                            text={"11 лет 6 месяцев"} 
                                            size="xs"
                                        />
                                    </div>
                                    <div class={s.userPhoto}>
                                        НЕТ ФОТО
                                        {/* <img src="#" className={s.imgUserPhoto}/> */}
                                    </div>

                                </div>
                            <div className={s.linkViewResume}>

                                <form method="LINK">
                                
                                    <AppButton 
                                        path={'resume.show'}
                                        param={resume.id}
                                        key={resume.id}
                                        sizeText="s"
                                        height="60px"
                                    >Просмотреть резюме</AppButton>

                                </form>

                                    <AppButton
                                        path={'resume.edit'}
                                        param={resume.id}
                                        key={resume.id}
                                        sizeText = "s"
                                        className={s.linkResumeList}
                                    >Редактировать резюме</AppButton>

                                 {/* <AppText
                                title={"Сделать активной кнопку редаткировать только для пользователя чье резюме открыто"}
                                variant={"error"}
                                />  */}
                                    
                            </div>                            
                        </div>     
                            )
                        })}
                    </main>
                </AppPage>
            </MainLayout>
        </AuthContext.Provider>
    )
}

export default ResumePage