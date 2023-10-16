import React from "react";
import s from "@/Pages/CompanyPage/CompanyPage.module.css";
import PropTypes from "prop-types";
import CompanyPageInfoItem from "@/Pages/CompanyPage/CompanyPageInfoItem.jsx";
import AppText from "@/8Shared/ui/AppText/AppText";

const CompanyPageInfo = ({
    address,
    contactPhone,
    contactEmail,
    title,
    tagline,
    infoList,
    values,
}) => {
    return (
        <div className={s.companyPageRightInfo}>
            <AppText text={title} />
            {tagline && (
                <article>
                    <AppText
                        className={s.CompanyPageRightHeaderRatingText}
                        text={"Видение:"}
                    />
                    <AppText
                        className={s.CompanyPageRightHeaderRatingText}
                        text={tagline}
                    />
                </article>
            )}
            {values && (
                <>
                    <AppText text={"Ценности:"} />
                    {infoList?.map((item, index) => (
                        <CompanyPageInfoItem
                            key={item.id}
                            title={item.title}
                            text={item.text}
                            index={index + 1}
                        />
                    ))}
                </>
            )}

            <div className={s.companyPageRightInfoContacts}>
                <AppText text={address} size={"xs"} />
                <AppText text={`Телефон: ${contactPhone}`} size={"xs"} />
                <AppText
                    text={`Электронная почта: ${contactEmail}`}
                    size={"xs"}
                />
            </div>
        </div>
    );
};

CompanyPageInfo.propTypes = {
    address: PropTypes.string,
    contactPhone: PropTypes.string,
    contactEmail: PropTypes.string,
    title: PropTypes.string,
    tagline: PropTypes.string,
    infoList: PropTypes.array,
};

export default CompanyPageInfo;
