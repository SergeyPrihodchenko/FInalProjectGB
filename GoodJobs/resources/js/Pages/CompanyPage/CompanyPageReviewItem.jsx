import React from 'react';
import s from "@/Pages/CompanyPage/CompanyPage.module.css";
import PropTypes from "prop-types";

const CompanyPageReviewItem = ({id,isPercent,subtitle,title,number}) => {
    return (
        <div key={id} className={s.companyPageReviewCardItem}>
            <span className={s.companyPageReviewCardItemCount}>{number}</span>
            {isPercent && <span className={s.companyPageReviewCardItemCount}>%</span>}
            {subtitle && <span className={s.companyPageReviewCardItemSubtitle}>{subtitle}</span>}
            <div>{title}</div>
        </div>
    );
};
CompanyPageReviewItem.propTypes = {
    id:PropTypes.string,
    isPercent:PropTypes.bool,
    subtitle:PropTypes.string,
    title:PropTypes.string,
    number:PropTypes.string,
}

export default CompanyPageReviewItem;
