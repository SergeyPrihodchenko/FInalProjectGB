import React from 'react';
import s from "@/Pages/CompanyPage/CompanyPage.module.css";
import { Rating } from "@mui/material";
import moment from "moment";
import PropTypes from "prop-types";

const CompanyPageEmployeeReviewItem = ({ id, title, rating, date, subtitle }) => {
    return (
        <div key={id} className={s.companyPageEmployeeReviewCardItem}>
            <strong className={s.companyPageEmployeeReviewCardItemTitle}>{title}</strong>
            <div className={s.companyPageEmployeeReviewCardItemRating}>
                <Rating
                    value={rating}
                    readOnly
                />
                <span className={s.companyPageEmployeeReviewCardItemRatingDate}>{moment(date).format("M.YYYY")}</span>
            </div>
            <div>{subtitle}</div>
        </div>
    );
};
CompanyPageEmployeeReviewItem.propTypes = {
    id: PropTypes.string,
    rating: PropTypes.number,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
}

export default CompanyPageEmployeeReviewItem;
