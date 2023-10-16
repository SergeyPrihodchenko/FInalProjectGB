import React, { useState } from "react";
import s from "@/Pages/CompanyPage/CompanyPage.module.css";
import { Rating, Tooltip } from "@mui/material";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp.js";
import cn from "classnames";
import PropTypes from "prop-types";
import AppText from "@/8Shared/ui/AppText/AppText";

const CompanyPageHeader = ({ title, initialRating, countReview }) => {
    const [rating, setRating] = useState(Number(initialRating));
    return (
        <div className={s.companyPageHeader}>
            <AppText text={"Организация"} />
            <div className={s.CompanyPageRightHeaderTitle}>
                <AppText title={title} size={"l"} />
                {/* <Tooltip title="Компания прошла проверку на сайте" arrow>
                    <CheckCircleOutlineSharpIcon />
                </Tooltip> */}
            </div>
            <div className={s.CompanyPageRightHeaderRating}>
                <AppText
                    className={s.CompanyPageRightHeaderRatingText}
                    text={rating}
                />

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
