import React, { useState } from "react";
import cn from "classnames";
import s from "./CompanyPage.module.css";
import { Typography } from "@/8Shared/Typography/Typography.jsx";
import CompanyPageVacanciesItem from "@/Pages/CompanyPage/CompanyPageVacanciesItem.jsx";
import PropTypes from "prop-types";

const CompanyPageVacancy = ({ companyName, companyVacancyList }) => {
    const [vacancyOpen, setVacancyOpen] = useState(true);

    const allVacanciesCount = companyVacancyList?.flatMap(
        (item) => item.cards
    ).length;
    return (
        <div className={cn(s.companyPageReview, s.companyPageVacancies)}>
            <Typography variant="h6">
                Вакансии компании «{companyName}»
            </Typography>
            <div
                onClick={() => setVacancyOpen(!vacancyOpen)}
                className={s.companyPageVacanciesInfo}
            >
                <span className={s.companyPageVacanciesTitleDecorate}>
                    Вакансии в текущем регионе: Россия
                </span>
                <span className={s.companyPageVacanciesTitleCount}>
                    {allVacanciesCount}
                </span>
            </div>
            {vacancyOpen && (
                <div>
                    {companyVacancyList?.map((item, index) => (
                        <CompanyPageVacanciesItem key={index} {...item} />
                    ))}
                </div>
            )}
        </div>
    );
};

CompanyPageVacancy.propTypes = {
    companyName: PropTypes.string,
    companyVacancyList: PropTypes.array,
};

export default CompanyPageVacancy;
