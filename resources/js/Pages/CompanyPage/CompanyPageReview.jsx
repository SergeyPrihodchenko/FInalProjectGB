import React from 'react';
import s from "@/Pages/CompanyPage/CompanyPage.module.css";
import {Typography} from "@/8Shared/Typography/Typography.jsx";
import CompanyPageReviewItem from "@/Pages/CompanyPage/CompanyPageReviewItem.jsx";
import AppButton from "@/8Shared/ui/AppButton/AppButton.jsx";
import cn from "classnames";
import CompanyPageEmployeeReviewItem from "@/Pages/CompanyPage/CompanyPageEmployeeReviewItem.jsx";
import PropTypes from "prop-types";
import CompanyPageInfo from "@/Pages/CompanyPage/CompanyPageInfo.jsx";

const CompanyPageReview = ({otherReview, employeeReview }) => {
    return (
        <>
            <div className={s.companyPageReview}>
                <Typography variant="h6">Отзывы о компании</Typography>
                <div className={s.companyPageReviewCard}>
                    {otherReview?.map((item) => (
                        <CompanyPageReviewItem
                            key={item.id}
                            {...item}
                        />
                    ))}
                    <div className={s.companyPageReviewButtonCard}>
                                <span>
                                    Ваши отзывы помогают людям принимать
                                    взвешенные карьерные решения
                                </span>
                        <AppButton
                            className={cn(
                                s.companyPageReviewButtonCardButton,
                                s.companyPageLeftToolbarButton
                            )}
                            variant="filled"
                            width="170px"
                        >
                            Оставить отзыв
                        </AppButton>
                    </div>
                </div>
            </div>
            <div className={s.companyPageReview}>
                <Typography variant="h6">
                    Что говорят сотрудники
                </Typography>
                <div className={s.companyPageEmployeeReviewCards}>
                    {employeeReview?.map((item) => (
                        <CompanyPageEmployeeReviewItem
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

CompanyPageInfo.propTypes = {
    otherReview: PropTypes.array,
    employeeReview: PropTypes.array,
};

export default CompanyPageReview;
