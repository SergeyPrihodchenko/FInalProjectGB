import React from 'react';
import cn from "classnames";
import s from "@/Pages/CompanyPage/CompanyPage.module.css";
import AppCard from "@/8Shared/ui/AppCard/AppCard.jsx";
import CompanyPageAppCard from "@/Pages/CompanyPage/CompanyPageAppCard.jsx";
import CompanyPageHeader from "@/Pages/CompanyPage/CompanyPageHeader.jsx";
import CompanyPageInfo from "@/Pages/CompanyPage/CompanyPageInfo.jsx";
import CompanyPageReview from "@/Pages/CompanyPage/CompanyPageReview.jsx";
import CompanyPageVacancy from "@/Pages/CompanyPage/CompanyPageVacancy.jsx";
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
                             companyLocation,
                             company,
                             isSubscribed,
                             user,
                             companyImageURL,
                             reviewsOfCompanies,
                            reviews,
                             grade

                         }) => {
    return (
        <div className={cn(s.companyPageContainer)}>
            <AppCard>
                <CompanyPageAppCard img={companyImg} city={companyLocation} isSubscribed={isSubscribed} user={user} company={company} companyImageURL={companyImageURL}/>
            </AppCard>
            <div className={s.companyPageRight}>
                <CompanyPageHeader
                    title={company?.name || companyName}
                    initialRating={companyRating}//колличество звездочек
                    countReview={countReview}//колличество отзывов
                    grade={grade}

                />
                <CompanyPageInfo
                    title={company?.description || companyInfo}
                    //tagline={companyTagline}
                    address={company?.region_of_location || companyAddress}
                    contactPhone={company?.phone_number || companyPhone}
                    contactEmail={company?.email ||companyEmail}
                    //infoList={companyInfoList} employeeReview?.

                />
                <CompanyPageReview
                    employeeReview={reviewsOfCompanies?.content} отзывы
                    otherReview={reviewList}
                    company={company}
                    reviews={ reviews}
                    />
                <CompanyPageVacancy
                    companyName={company?.name || companyName}
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
