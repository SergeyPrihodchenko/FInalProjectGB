import React from "react";
import PropTypes from "prop-types";
import s from "./CompanyListPage.module.css";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import { AuthContext } from "@/8Shared/store/AuthContext";

function CompanyListPage() {
    return (
        <AuthContext.Provider>
            <>
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
                                    // path={}
                                    // param={}
                                    // key={}
                                    sizeText="s"
                                    height="60px"
                                    className={s.linkListCompany}
                                >
                                    Просмотреть
                                </AppButton>

                                <AppButton
                                    // path={}
                                    // param={}
                                    // key={}
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
                </AppPage>
            </>
        </AuthContext.Provider>
    );
}
CompanyListPage.propTypes = {};

export default CompanyListPage;
