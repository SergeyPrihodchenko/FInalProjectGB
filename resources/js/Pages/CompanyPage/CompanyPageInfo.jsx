import React from 'react';
import s from "@/3Pages/CompanyPage/CompanyPage.module.css";
import PropTypes from "prop-types";
import CompanyPageInfoItem from "@/3Pages/CompanyPage/CompanyPageInfoItem.jsx";

const CompanyPageInfo = ({address, contactPhone, contactEmail, title, tagline, infoList }) => {
    return (
        <div className={s.companyPageRightInfo}>
            <strong>
                {title}
            </strong>
            <article>
                <strong>Видение:</strong>
                {tagline}
            </article>
            <strong>Ценности:</strong>
            {infoList?.map((item, index)=><CompanyPageInfoItem key={item.id} title={item.title} text={item.text} index={index+1}/>)}
            <div className={s.companyPageRightInfoContacts}>
                <p>
                    {address}
                </p>
                <p>Телефон: {contactPhone}</p>
                <p>Электронная почта: {contactEmail}</p>
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
