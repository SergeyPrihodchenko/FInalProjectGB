import React from "react";
import PropTypes from "prop-types";
import s from "./CompanyListPage.module.css";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import { AuthContext } from "@/8Shared/store/AuthContext";
import { useForm } from "@inertiajs/react";

function CompanyListPage({companies}) {
    return (
        <AuthContext.Provider>
            <AppPage>
                <AppText
                    title={"Все компании"}
                    size="s"
                    bold
                    className={s.titleCompanyList}
                />
                {companies
                    ? companies.map((company) => {
                        const { data } =useForm({
                            name: company.name,
                            business_profile: company.business_profile,
                            website: company.website,    
                        })
                        // console.log(data);
                        return (
                            <div className={s.companyList}>
                                <div className={s.buttonCompany}>
                                    <AppButton
                                        path={'company.show'}
                                        param={company.id}
                                        key={company.id}
                                        sizeText="s"
                                        bold
                                        variant="clear"
                                    >
                                        <span className={s.titleCompany}>
                                            {data.name}
                                        </span>
                                    </AppButton>
                                </div>
                                        
                                <AppText
                                    text={"Сфера деятельности: ".concat(data.business_profile)}
                                    bold
                                    size="xs"
                                />
                                <AppText
                                    text={"Сайт компании: ".concat(data.website)}
                                    bold
                                    size="xs"
                                />
                            </div>
                        );
                    })
                : null}

            </AppPage>
        </AuthContext.Provider>
    );
}
CompanyListPage.propTypes = {};

export default CompanyListPage;
