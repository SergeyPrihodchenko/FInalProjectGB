import React from "react";
import { Head } from "@inertiajs/react";
import { CompanyPageMockData } from "../../CompanyPageMockData";
import CompanyPageBody from "../../CompanyPageBody";
import CompanyPageVacancy from "../../CompanyPageVacancy";
import CompanyPageReview from "../../CompanyPageReview";
import CompanyPageInfo from "../../CompanyPageInfo";
import CompanyPageHeader from "../../CompanyPageHeader";
import CompanyPageAppCard from "../../CompanyPageAppCard";
import cn from "classnames";
import s from "./CompanyPage.module.css";
import AppCard from "@/8Shared/ui/AppCard/AppCard";

function CompanyPage({ auth, company }) {
    const user = auth?.user;
    const data = CompanyPageMockData();
    console.log("company", company);

    return (
        <>
            <Head>
                <title>Компания</title>
            </Head>
            <div className={cn(s.companyPageContainer)}>
                <AppCard>
                    <CompanyPageAppCard
                        img={company?.companyImg || data?.companyImg}
                        city={company?.companyLocation || data?.companyLocation}
                    />
                </AppCard>
                <div className={s.companyPageRight}>
                    <CompanyPageHeader
                        title={company?.name || data?.companyName}
                        initialRating={
                            company?.companyRating || data?.companyRating
                        }
                        countReview={company?.countReview || data?.countReview}
                    />
                    <CompanyPageInfo
                        title={company?.description || data?.companyInfo}
                        tagline={
                            company?.companyTagline || data?.companyTagline
                        }
                        address={
                            company?.companyAddress || data?.companyAddress
                        }
                        contactPhone={
                            company?.companyPhone || data?.companyPhone
                        }
                        contactEmail={
                            company?.companyEmail || data?.companyEmail
                        }
                        infoList={
                            company?.companyInfoList || data?.companyInfoList
                        }
                    />
                    <CompanyPageReview
                        employeeReview={
                            company?.employeeReview || data?.employeeReview
                        }
                        otherReview={company?.reviewList || data?.reviewList}
                    />
                    <CompanyPageVacancy
                        companyName={company?.companyName || data?.companyName}
                        companyVacancyList={
                            company?.companyVacancies || data?.companyVacancies
                        }
                    />
                </div>
            </div>
        </>
    );
}

export default CompanyPage;
