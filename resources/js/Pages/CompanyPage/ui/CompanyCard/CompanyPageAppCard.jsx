import React from "react";
import cn from "classnames";
import s from "./CompanyPage.module.css";
import AppButton from "@/8Shared/ui/AppButton/AppButton.jsx";
import PropTypes from "prop-types";
import AppCard from "@/8Shared/ui/AppCard/AppCard";

const CompanyPageAppCard = ({ img, city, website }) => {
    return (
        <div className={cn(s.companyPageLeft)}>
            <AppCard>
                <div className={cn(s.companyPageLeftCardLogo)}>
                    <img src={img} alt="Лого" />
                </div>
                <div className={cn(s.companyPageLeftCardInfo)}>
                    <div className={cn(s.companyPageLeftCardInfoCard)}>
                        <div className={cn(s.companyPageLeftCardInfoText)}>
                            {city}
                        </div>
                        <a
                            className={cn(s.companyPageLeftCardInfoLink)}
                            href="#"
                        >
                            {website}
                        </a>
                    </div>
                    <div className={cn(s.companyPageLeftCardInfoCard)}>
                        <div
                            className={cn(
                                s.companyPageLeftCardInfoText,
                                s.companyPageStrong
                            )}
                        >
                            Вакансии
                        </div>
                        <a
                            className={cn(s.companyPageLeftCardInfoLink)}
                            href="#"
                        >
                            1 активная вакансия
                        </a>
                    </div>
                    <div className={cn(s.companyPageLeftCardInfoCard)}>
                        <div
                            className={cn(
                                s.companyPageLeftCardInfoText,
                                s.companyPageStrong
                            )}
                        >
                            Сферы деятельности
                        </div>
                        <div className={cn(s.companyPageLeftCardInfoText)}>
                            Информационные технологии, системная интеграция,
                            интернет
                        </div>
                    </div>
                </div>
                <div className={cn(s.companyPageLeftToolbar)}>
                    {/* <AppButton
                        className={cn(s.companyPageLeftToolbarButton)}
                        width="100%"
                        variant="outline"
                        colorType="notAccent"
                        sizeText="s"
                    >
                        Я хочу тут работать
                    </AppButton>
                    <AppButton
                        className={cn(s.companyPageLeftToolbarButton)}
                        width="100%"
                        variant="outline"
                        colorType="notAccent"
                        sizeText="s"
                    >
                        Подписаться
                    </AppButton> */}
                </div>
            </AppCard>
        </div>
    );
};

export default CompanyPageAppCard;

CompanyPageAppCard.propTypes = {
    img: PropTypes.string,
    city: PropTypes.string,
};
