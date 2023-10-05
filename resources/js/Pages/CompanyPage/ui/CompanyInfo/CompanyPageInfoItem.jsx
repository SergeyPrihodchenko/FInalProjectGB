import React from 'react';
import PropTypes from "prop-types";

const CompanyPageInfoItem = ({index,title, text}) => {
    return (
        <>
            <strong>{index}. {title}</strong>
            <p>{text}</p>
        </>
    );
};

CompanyPageInfoItem.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
};

export default CompanyPageInfoItem;
