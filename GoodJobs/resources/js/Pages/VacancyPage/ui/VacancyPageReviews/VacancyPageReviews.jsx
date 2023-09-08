import React from "react";
import PropTypes from "prop-types";
import AppText from "@/Shared/ui/AppText/AppText";
import s from "./VacancyPageReviews.module.css";
import cn from "classnames";
function VacancyPageReviews(props) {
    const { className } = props;
    return (
        <div className={cn(s.vacancyPageReviews, className)}>
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

VacancyPageReviews.propTypes = {};

export default VacancyPageReviews;
