import React from "react";
import cn from "classnames";
import s from "./CompanyPage.module.css";
import AppButton from "@/8Shared/ui/AppButton/AppButton.jsx";
import PropTypes from "prop-types";
import { router } from "@inertiajs/react";
import AppCard from "@/8Shared/ui/AppCard/AppCard";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppLink from "@/8Shared/ui/AppLink/AppLink";

const CompanyPageAppCard = ({
    img,
    city,
    isSubscribed,
    company,
    user,
    companyImageURL,
}) => {
    // console.log("companyImageURL", companyImageURL);
    // console.log(user.id);  http://public/storage/
    const sub = () => {
        router.get(route("subscribe", [user.id, company.id]));
    };
    const unsub = () => {
        router.get(route("unsubscribe", [user.id, company.id]));
    };
    console.log("CompanyPageAppCard city", city);
    console.log("CompanyPageAppCard company", company);
    console.log("CompanyPageAppCard user", user);
    return (
        <div className={cn(s.companyPageLeftCard)}>
            {/* {companyImageURL && (
                <div className={cn(s.companyPageLeftCardLogo)}>
                    <img
                        src={companyImageURL.replace(
                            "http://public/storage/",
                            ""
                        )}
                        alt="Лого"
                        style={{ width: "150px", height: "150px" }}
                    />
                </div>
            )} */}
            <div className={cn(s.companyPageLeftCardInfo)}>
                <div className={cn(s.companyPageLeftCardInfoCard)}>
                    <AppText
                        className={cn(s.companyPageLeftCardInfoText)}
                        title={company?.city || city}
                    />
                    {company?.date_create && (
                        <AppText text={company?.date_create} />
                    )}
                    {company?.website && (
                        <AppLink
                            className={cn(s.companyPageLeftCardInfoLink)}
                            href="#"
                        >
                            {company?.website || test.ru}
                        </AppLink>
                    )}
                </div>
                <div className={cn(s.companyPageLeftCardInfoCard)}>
                    <AppText
                        className={cn(s.companyPageLeftCardInfoText)}
                        text={"Вакансии"}
                    />

                    {company?.vacancyList ? (
                        <AppLink
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

                <div className={cn(s.companyPageLeftCardInfoCard)}>
                    {company?.business_profile ? (
                        <>
                            <AppText
                                className={cn(s.companyPageLeftCardInfoText)}
                                text={"Сферы деятельности"}
                            />
                            <AppText
                                size={"s"}
                                variant="notaccented"
                                className={cn(s.companyPageLeftCardInfoText)}
                                text={company?.business_profile}
                            />
                        </>
                    ) : null}
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
                </AppButton> */}
                {/* {isSubscribed ? (
                    <AppButton
                        onClick={unsub}
                        className={cn(s.companyPageLeftToolbarButton)}
                        width="100%"
                        sizeText="s"
                    >
                        Отписаться
                    </AppButton>
                ) : (
                    <AppButton
                        onClick={sub}
                        path={"subscribe"}
                        //param={company.id}
                        className={cn(s.companyPageLeftToolbarButton)}
                        width="100%"
                        sizeText="s"
                    >
                        Подписаться
                    </AppButton>
                )} */}

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
        </div>
    );
};

export default CompanyPageAppCard;

CompanyPageAppCard.propTypes = {
    img: PropTypes.string,
    city: PropTypes.string,
};
