import React, { useState } from "react";
import cn from "classnames";
import s from "@/Pages/CompanyPage/CompanyPage.module.css";
import { Typography } from "@/8Shared/Typography/Typography.jsx";
import CompanyPageVacanciesItem from "@/Pages/CompanyPage/CompanyPageVacanciesItem.jsx";
import PropTypes from "prop-types";
import AppText from "@/8Shared/ui/AppText/AppText";

const CompanyPageVacancy = ({ companyName, companyVacancyList }) => {
    const [vacancyOpen, setVacancyOpen] = useState(true);

    const allVacanciesCount = companyVacancyList?.flatMap(
        (item) => item.cards
    ).length;
    return (
        <div className={cn(s.companyPageReview, s.companyPageVacancies)}>
            <AppText title={` Вакансии компании «${companyName}»`} />
            <div
                onClick={() => setVacancyOpen(!vacancyOpen)}
                className={s.companyPageVacanciesInfo}
            >
                {allVacanciesCount ? (
                    <AppText
                        title={`Вакансии в текущем регионе: Россия ${allVacanciesCount}`}
                        size={"s"}
                    />
                ) : (
                    <>
                        <AppText
                            title={"Вакансии в текущем регионе: Россия"}
                            size={"s"}
                        />
                        <AppText
                            title={"Нет активных выкансий"}
                            size={"xs"}
                            variant={"notaccented"}
                        />
                    </>
                )}
            </div>
            {vacancyOpen && (
                <div>
                    {companyVacancyList?.map((item) => (
                        <CompanyPageVacanciesItem key={item.id} {...item} />
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
