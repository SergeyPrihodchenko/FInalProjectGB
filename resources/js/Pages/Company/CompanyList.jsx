import React from "react";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./CompanyList.module.css";
import AppButton from "@/8Shared/ui/AppButton/AppButton";


function CompanyList(){

    return(

        <AuthContext.Provider>
            <MainLayout className={"app_light_theme"}>
                <AppPage>
                    <main className={s.mainCompanyList}>
                        <AppText 
                            title={"Ваши компании"} 
                            size="s"
                            bold
                            className={s.titleCompanyList}
                        />
                        
                        <div class={s.companyList}> 
                        
                            {/* <AppLink
                                path={'company.show'}
                                param={company.id}
                                key={company.id}
                                sizeText = "xs"
                                className={s.titleCompany}
                            >ООО Газпром</AppLink> */}
                            
                            <AppText 
                                title={
                                    <span 
                                        className={s.titleCompany}>
                                        {"ООО Газпром"}
                                    </span>
                                } 
                                bold 
                                size="xs"
                            />
                            <AppText 
                                title={"358 вакансий"} 
                                size="xs"
                                bold
                                className={s.quantityCompany}
                            />        
                         
                            <div className={s.linkViewCompany}>
                                    <AppButton 
                                        // path={}
                                        // param={}
                                        // key={}
                                        sizeText="s"
                                        height="60px"
                                        className={s.linkListCompany}
                                    >Просмотреть</AppButton>
                                    
                                    <AppButton
                                        // path={}
                                        // param={}
                                        // key={}
                                        sizeText = "s"
                                        className={s.linkListCompany}
                                    >Редактировать</AppButton>

                                    {
                                        /* Сделать активной кнопку редаткировать 
                                        только для пользователя чье резюме открыто
                                        */
                                    }                                    
                                </div>
                            </div>         
                    </main>
                </AppPage>
            </MainLayout>
        </AuthContext.Provider>
    )
}

export default CompanyList