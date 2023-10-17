import React, {useState} from 'react';
import s from "@/Pages/CompanyPage/CompanyPage.module.css";
import {Rating, Tooltip} from "@mui/material";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp.js";
import cn from "classnames";
import PropTypes from "prop-types";

const CompanyPageHeader = ({title, initialRating, countReview, grade}) => {
    const [rating,setRating] = useState(Number(grade))
    return (
        <div className={s.companyPageHeader}>
            <div className={s.CompanyPageRightHeaderPosition}>
                Организация
            </div>
            <div className={s.CompanyPageRightHeaderTitle}>
                            <span className={s.CompanyPageRightHeaderTitleText}>
                               {title}
                            </span>
                <Tooltip
                    title="Компания прошла проверку на сайте"
                    arrow
                >
                    <CheckCircleOutlineSharpIcon />
                </Tooltip>
            </div>
            <div className={s.CompanyPageRightHeaderRating}>
                            <span
                                className={s.CompanyPageRightHeaderRatingText}
                            >
                                {rating}
                            </span>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);

                    }}
                />
                <a
                    className={cn(
                        s.companyPageLeftCardInfoLink,
                        s.companyPageRatingLink
                    )}
                    href="#"
                >
                    {countReview} отзыва
                </a>
            </div>
        </div>
    );
};

CompanyPageHeader.propTypes = {
    title: PropTypes.string,
    initialRating: PropTypes.number,
    countReview: PropTypes.number,
};

export default CompanyPageHeader;
