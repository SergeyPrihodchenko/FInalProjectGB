import React from "react";
import PropTypes from "prop-types";
import s from "./VacancyCards.module.css";
import cn from "classnames";
import AppText from "@/Shared/ui/AppText/AppText";
import { AppButton } from "@/Shared/ui/AppButton/AppButton";
function VacancyCards(props) {
    return (
        <div className={s.vacancyCards}>
            <div className={s.mainCard}>
                <AppText title="Токарь фрезеровщик" bold={true} />
                <AppText text="от 150 000 до 300 000 ₽ на руки" />
                <AppText size="s" text="Требуемый опыт работы: 1-3 года" />
                <AppText size="s" text="Полная занятость, сменный графики" />
                <div>
                    <AppText size="s" text="Сейчас эту вакансию смотрят" />
                    <AppText size="s" text=" 3 человека" />
                </div>
                <AppButton>
                    <AppText size="s" text="Откликнуться" />
                </AppButton>
            </div>
            <div className={s.aboutCompany}>
                <AppText size="xs" title="ООО Станок и Бабина" text="Москва" />
            </div>
        </div>
    );
}
VacancyCards.propTypes = {};

export default VacancyCards;
