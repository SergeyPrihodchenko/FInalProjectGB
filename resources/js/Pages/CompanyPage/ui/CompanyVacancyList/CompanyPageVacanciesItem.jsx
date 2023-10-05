import React, { useState } from 'react';
import cn from "classnames";
import s from "./CompanyPage.module.css";
import PropTypes from "prop-types";
import moment from "moment";

const CompanyPageVacanciesItem = ({ id, title, cards }) => {
    const [open, setOpen] = useState(false)
    return (
        <div onClick={() => setOpen(!open)} key={id} className={cn(s.companyPageVacanciesInfo, s.companyPageVacanciesInfoItem)} >
            <span className={s.companyPageVacanciesTitleDecorate}>{title}</span> <span className={s.companyPageVacanciesTitleCount}>{cards.length}</span>
            {cards.length !== 0 && cards.map(item => (
                <>
                    {open &&
                        <div key={item.id} className={s.companyPageVacanciesItemDropdown}>
                            <div className={s.companyPageVacanciesItemDropdownInfo}>
                                <span className={s.companyPageVacanciesItemDropdownTitle}>{item.jobTitle}</span>
                                <span
                                    className={s.companyPageVacanciesItemDropdownSubtitle}>ООО Maxima,{moment(item.date).format("DD.M")}</span>
                            </div>
                            <div>
                                <span>{item.salaryMin ? `от ${item.salaryMin}` : ''} {item.salaryMax ? `до ${item.salaryMax}` : ''}</span>
                            </div>
                            <div>
                                <span>{item.location}</span>
                            </div>
                        </div>
                    }
                </>
            ))}
        </div>
    );
};
CompanyPageVacanciesItem.propTypes = {
    id: PropTypes.string,
    cards: PropTypes.array,
    title: PropTypes.string,
}
export default CompanyPageVacanciesItem;
