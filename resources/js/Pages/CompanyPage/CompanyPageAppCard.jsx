import React from "react";
import cn from "classnames";
import s from "./CompanyPage.module.css";
import AppButton from "@/8Shared/ui/AppButton/AppButton.jsx";
import PropTypes from "prop-types";
import {router} from "@inertiajs/react";

const CompanyPageAppCard = ({ img, city, isSubscribed, company, user, companyImageURL }) => {
    console.log('companyImageURL', companyImageURL)
    console.log('isSubscribed', isSubscribed)
    console.log(user.id);
    const sub = () => {
        router.get(route("subscribe", [user.id, company.id]));
    };
    const unsub = () => {
        router.get(route("unsubscribe", [user.id, company.id]));
    };

    return (
        <div className={cn(s.companyPageLeft)}>
            <section className={cn(s.companyPageLeftCard)}>
                <div className={cn(s.companyPageLeftCardLogo)}>
                    {/*<img src={company?.logo || img} alt="Лого" />*/}
                    <img src={companyImageURL} alt="Лого" style={{width: '150px', height: '150px'}} />
                </div>
                <div className={cn(s.companyPageLeftCardInfo)}>
                    <div className={cn(s.companyPageLeftCardInfoCard)}>
                        <div className={cn(s.companyPageLeftCardInfoText)}>
                            {company?.city || city}
                        </div>
                        <div className={cn(s.companyPageLeftCardInfoText)}>
                            {company?.date_create || city}
                        </div>
                        <a
                            className={cn(s.companyPageLeftCardInfoLink)}
                            href="#"
                        >
                            {company?.website || 'test.ru'}

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
                            {/*Информационные технологии, системная интеграция,*/}
                            {/*интернет*/}
                            {company?.business_profile || 'companyName'}
                        </div>
                    </div>
                </div>
                <div className={cn(s.companyPageLeftToolbar)}>
                    <AppButton
                        className={cn(s.companyPageLeftToolbarButton)}
                        width="100%"
                        variant="outline"
                        colorType="notAccent"
                        sizeText="s"
                    >
                        Я хочу тут работать
                    </AppButton>
                    {isSubscribed ?
                        <AppButton
                            onClick={unsub}
                            className={cn(s.companyPageLeftToolbarButton)}
                            width="100%"
                            variant="outline"
                            colorType="notAccent"
                            sizeText="s"
                        >
                            Отписаться
                        </AppButton> :
                        <AppButton
                            onClick={sub}
                            path={'subscribe'}
                            //param={company.id}
                            className={cn(s.companyPageLeftToolbarButton)}
                            width="100%"
                            variant="outline"
                            colorType="notAccent"
                            sizeText="s"
                        >
                            Подписаться
                        </AppButton>
                    }

                    {/*<AppButton*/}
                    {/*    className={cn(s.companyPageLeftToolbarButton)}*/}
                    {/*    width="100%"*/}
                    {/*    variant="outline"*/}
                    {/*    colorType="notAccent"*/}
                    {/*    sizeText="s"*/}
                    {/*>*/}
                    {/*    Подписаться*/}
                    {/*</AppButton>*/}
                </div>
            </section>
        </div>
    );
};

export default CompanyPageAppCard;

CompanyPageAppCard.propTypes = {
    img: PropTypes.string,
    city: PropTypes.string,
};
