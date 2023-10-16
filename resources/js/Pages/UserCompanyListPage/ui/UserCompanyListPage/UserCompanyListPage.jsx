import React from "react";

import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { AuthContext } from "@/8Shared/store/AuthContext";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./UserCompanyListPage.module.css";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import { useForm } from "@inertiajs/react";


function UserCompanyList({companies}) {
    // console.log('companies', companies)
    return (
        <AuthContext.Provider>
            <AppPage>
                <AppText
                    title={"Мои компании"}
                    size="s"
                    bold
                    className={s.titleCompanyList}
                />
                {companies
                    ? companies.map((company, index) => {
                        const { data } =useForm({
                            name: company.name,
                            business_profile: company.business_profile,
                            website: company.website,    
                        })
                        return (
                            <div className={s.mainCompanyList}>
                                <div class={s.companyList}>
                                    <AppText
                                        title={
                                            <span className={s.titleCompany}>
                                            {company.name}
                                            </span>
                                        }
                                        bold
                                        size="xs"
                                    />
                                    <AppText
                                        text={"Сфера деятельности: ".concat(company.business_profile)}
                                        bold
                                        size="xs"
                                    />
                                    <AppText
                                        text={"Сайт компании: ".concat(company.website)}
                                        bold
                                        size="xs"
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
                                    </div>
                                </div>
                            </div>

                        );
                    })
                    : null}

            </AppPage>
        </AuthContext.Provider>
    );
}

export default UserCompanyList;
