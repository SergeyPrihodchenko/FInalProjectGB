import React from "react";
import PropTypes from "prop-types";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./VacancyReviews.module.css";
import cn from "classnames";
function VacancyReviews(props) {
    const { className } = props;
    return (
        <div className={cn(s.vacancyReviews, className)}>
            <hr className={s.hr} />
            <AppText
                title="Отзывы о компании"
                size="l"
                className={s.title}
                bold
            />
            <AppText
                text={"Здесь пока нет отзывов, но ваш может стать первым"}
                size="s"
                className={s.text}
            />
        </div>
    );
}

VacancyReviews.propTypes = {};

export default VacancyReviews;
