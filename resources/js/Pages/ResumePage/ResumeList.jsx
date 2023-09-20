import React from "react";
import { usePage } from "@inertiajs/react";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./ResumeList.module.css";


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
                                            size="s"
                                        />

                                        <AppText 
                                            title={"90 000 ₽"} 
                                            size="m"
                                            bold
                                            className={s.salaryResume}
                                        />
                                        <AppText 
                                            text={"54 года"} 
                                            size="s"
                                        />
                                        <AppText 
                                            text={
                                                <span 
                                                    className={s.skillUser}>
                                                        Последнее место работы
                                                </span>
                                            } 
                                            size="s"
                                            
                                        />
                                        
                                        <div className={s.lastSkill}>
                                            <AppText 
                                                text={"ИП Глизин"} 
                                                size="s"
                                                />
                                            <AppText 
                                                text={", январь 2021"} 
                                                size="s"
                                                />
                                            <AppText 
                                                text={"- по настоящее время"} 
                                                size="s"
                                            />
                                        </div>
                                        <AppText 
                                            text={"11 лет 6 месяцев"} 
                                            size="s"
                                        />
                                    </div>
                                    <div class={s.userPhoto}>
                                        <img src="#" className={s.imgUserPhoto}/>
                                    </div>

                                </div>
                                <div className={s.linkViewResume}>
                                    <AppLink
                                                path={'resume.show'}
                                                param={resume.id}
                                                key={resume.id}
                                                sizeText = "s"
                                                className={s.linkResumeList}
                                            > Просмотреть резюме</AppLink>
                                </div>
                                    
                                    
                                        
                        
                
                                    {/* <li  className="px-4 py-2 text-black bg-gray-300 rounded">
                                        <lable><b>{resume.profession}</b></lable> 
                                        <AppLink
                                            path={'resume.show'}
                                            param={resume.id}
                                            key={resume.id}
                                        > Просмотреть резюме</AppLink>
                                    </li> */}
                            
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