import React from "react";

import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./CompanyList.module.css";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppLink from "@/8Shared/ui/AppLink/AppLink.jsx";

function CompanyList({companies}) {
    console.log('companies', companies)
    return (
        <AuthContext.Provider>
            <AppPage>
                {companies
                    ? companies.map((company, index) => {
                        return (

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
                                                <span className={s.titleCompany}>
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
                                                path={'company.show'}
                                                param={company.id}
                                                key={company.id}
                                                sizeText="s"
                                                height="60px"
                                                className={s.linkListCompany}
                                            >
                                                Просмотреть
                                            </AppButton>

                                            <AppButton
                                                path={'company.edit'}
                                                param={company.id}
                                                key={company.id}
                                                sizeText="s"
                                                className={s.linkListCompany}
                                            >
                                                Редактировать
                                            </AppButton>

                                            {/* Сделать активной кнопку редаткировать
                                        только для пользователя чье резюме открыто
                                        */}
                                        </div>
                                    </div>
                                </main>

                        );
                    })
                    : null}

            </AppPage>
        </AuthContext.Provider>
    );
}

export default CompanyList;
