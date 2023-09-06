import React from "react";
import PropTypes from "prop-types";
import s from "./VacancyPageCards.module.css";
import cn from "classnames";
import AppText from "@/Shared/ui/AppText/AppText";
import AppButton from "@/Shared/ui/AppButton/AppButton";
function VacancyPageCards(props) {
    const { children, className } = props;
    return (
        <div className={cn(s.vacancyCards, className)}>
            <div className={s.mainCard}>
                <AppText title="Токарь фрезеровщик" bold={true} size="l" />
                <AppText text="от 150 000 до 300 000 ₽ на руки" size="m" />
                <AppText size="m" text="Требуемый опыт работы: 1-3 года" />
                <AppText size="m" text="Полная занятость, сменный графики" />
                <div>
                    <AppText text="Сейчас эту вакансию смотрят" />
                    <AppText text=" 3 человека" />
                </div>
                <AppButton>
                    <AppText text="Откликнуться" />
                </AppButton>
            </div>
            <div className={s.aboutCompany}>
                <AppText size="m" title="ООО Станок и Бабина" text="Москва" />
            </div>
        </div>
    );
}
VacancyPageCards.propTypes = {};

export default VacancyPageCards;
