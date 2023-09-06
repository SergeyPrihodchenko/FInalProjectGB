import React from "react";
import PropTypes from "prop-types";
import s from "./VacancyPageCard.module.css";
import cn from "classnames";
function VacancyPageCard(props) {
    const { children, size, bgcolor, border, shadow, className } = props;
    return (
        <div
            className={cn(
                s.vacancyPageCard,
                { [s.border]: border, [s.shadow]: shadow },
                className
            )}
        >
            {children}
        </div>
    );
}

VacancyPageCard.propTypes = {};

export default VacancyPageCard;
