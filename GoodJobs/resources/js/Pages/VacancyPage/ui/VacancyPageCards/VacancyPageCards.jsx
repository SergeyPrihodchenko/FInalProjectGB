import React from "react";
import PropTypes from "prop-types";
import s from "./VacancyPageCards.module.css";
import cn from "classnames";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppCard from "@/8Shared/ui/AppCard/AppCard";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
function VacancyPageCards(props) {
    const { children, className } = props;
    return (
        <div className={cn(s.vacancyCards, className)}>
            <AppCard shadow className={s.mainCard}>
                <AppText title="Токарь фрезеровщик" bold={true} size="l" />
                <AppText
                    text="от 150 000 до 300 000 ₽ на руки"
                    size="m"
                    className={s.price}
                />
                <AppText
                    size="m"
                    text="Требуемый опыт работы: 1-3 года"
                    className={s.experience}
                />
                <AppText size="m" text="Полная занятость, сменный графики" />
                <div>
                    <AppText
                        text="Сейчас эту вакансию смотрят"
                        className={s.view}
                    />
                    <AppText text=" 3 человека" variant="error" />
                </div>
                <AppButton className={s.btn}>
                    <AppText text="Откликнуться" />
                </AppButton>
            </AppCard>
            <AppCard className={s.aboutCompany}>
                <AppText size="m" title="ООО Станок и Бабина" />
                <AppText size="m" text="Москва" className={s.city} />
            </AppCard>
        </div>
    );
}
VacancyPageCards.propTypes = {};

export default VacancyPageCards;
