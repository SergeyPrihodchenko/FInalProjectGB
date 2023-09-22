import React from "react";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./CompanyList.module.css";


function CompanyList(){

    return(

        <AuthContext.Provider>
            <MainLayout className={"app_light_theme"}>
                <AppPage>
                    <main className={s.mainCompanyList}>
                        <AppText 
                            title={"Ваши компании"} 
                            size="m"
                            bold
                            className={s.titleCompanyList}
                        />
                        
                        <div class={s.companyList}> 
                            <AppText 
                                title={
                                    <span 
                                        className={s.titleCompany}>
                                        {"ООО Газпром"}
                                    </span>
                                } 
                                bold 
                                size="s"
                            />

                            <AppText 
                                title={"358 вакансий"} 
                                size="m"
                                bold
                                className={s.quantityCompany}
                            />        
                        </div> 
                               
                            
                    </main>
                </AppPage>
            </MainLayout>
        </AuthContext.Provider>
    )
}

export default CompanyList