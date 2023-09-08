import React from "react";
import PropTypes from "prop-types";
import s from "./VacancyPageList.module.css";
import cn from "classnames";
import AppText from "@/Shared/ui/AppText/AppText";
import AppCard from "@/Shared/ui/AppCard/AppCard";
import AppLink from "@/Shared/ui/AppLink/AppLink";

export default function VacancyPageList(props) {
    const { vacancyPageList, className } = props;
    const { vacancyList, description, skills, contacts } = vacancyPageList;

    return (
        <div className={cn(s.vacancyPageList, className)}>
            {vacancyPageList.description && (
                <div className={s.description}>
                    <AppText className={s.bold} text={description} />
                </div>
            )}
            {vacancyList && (
                <div className={s.vacancyList}>
                    {vacancyList?.map((vacancyItem, index) => {
                        return (
                            <div className={s.vacancyItem} key={index}>
                                <AppText title={vacancyItem.title} bold />
                                {vacancyItem.list &&
                                    vacancyItem.list.map((item, index) => {
                                        return (
                                            <li
                                                key={index + index + index}
                                                className={s.list}
                                            >
                                                {item}
                                            </li>
                                        );
                                    })}
                            </div>
                        );
                    })}
                </div>
            )}

            {skills && (
                <div className={s.vacancyItem}>
                    <AppText title={skills?.title} bold />
                    {skills?.skillsList.map((skill, index) => {
                        return (
                            <AppCard
                                variant="secondary"
                                width={"fit-content"}
                                borderRadiusSmall
                                className={s.skill}
                                key={index}
                            >
                                {skill}
                            </AppCard>
                        );
                    })}
                </div>
            )}
            {contacts && (
                <div className={s.vacancyItem}>
                    <AppText title={contacts?.title} bold />
                    {contacts?.contactsList?.map((contactItem, index) => {
                        return (
                            <div key={index}>
                                <AppText text={contactItem.name} />
                                <AppText text={contactItem.phone} />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

VacancyPageList.propTypes = {};
