import React from 'react';
import cn from "classnames";
import s from "@/3Pages/CompanyPage/CompanyPage.module.css";
import AppCard from "@/8Shared/ui/AppCard/AppCard.jsx";
import CompanyPageAppCard from "@/3Pages/CompanyPage/CompanyPageAppCard.jsx";
import CompanyPageHeader from "@/3Pages/CompanyPage/CompanyPageHeader.jsx";
import CompanyPageInfo from "@/3Pages/CompanyPage/CompanyPageInfo.jsx";
import CompanyPageReview from "@/3Pages/CompanyPage/CompanyPageReview.jsx";
import CompanyPageVacancy from "@/3Pages/CompanyPage/CompanyPageVacancy.jsx";
import PropTypes from "prop-types";

const CompanyPageBody = ({
                             reviewList,
                             employeeReview,
                             companyVacancies,
                             companyInfoList,
                             companyName,
                             companyRating,
                             countReview,
                             companyInfo,
                             companyTagline,
                             companyAddress,
                             companyPhone,
                             companyEmail,
                             companyImg,
                             companyLocation
}) => {
    return (
        <div className={cn(s.companyPageContainer)}>
            <AppCard>
                <CompanyPageAppCard img={companyImg} city={companyLocation} />
            </AppCard>
            <div className={s.companyPageRight}>
                <CompanyPageHeader
                    title={companyName}
                    initialRating={companyRating}
                    countReview={countReview}
                />
                <CompanyPageInfo
                    title={companyInfo}
                    tagline={companyTagline}
                    address={companyAddress}
                    contactPhone={companyPhone}
                    contactEmail={companyEmail}
                    infoList={companyInfoList}

                />
                <CompanyPageReview
                    employeeReview={employeeReview}
                    otherReview={reviewList}/>
                <CompanyPageVacancy
                    companyName={companyName}
                    companyVacancyList={companyVacancies}
                />
            </div>
        </div>
    );
};
CompanyPageBody.propTypes = {
    reviewList: PropTypes.array,
    employeeReview: PropTypes.array,
    companyVacancies: PropTypes.array,
    companyInfoList: PropTypes.array,
    companyName: PropTypes.string,
    companyRating: PropTypes.number,
    countReview: PropTypes.number,
    companyInfo: PropTypes.string,
    companyTagline: PropTypes.string,
    companyAddress: PropTypes.string,
    companyPhone: PropTypes.string,
    companyEmail: PropTypes.string,
    companyImg: PropTypes.string,
    companyLocation: PropTypes.string,
};

export default CompanyPageBody;
