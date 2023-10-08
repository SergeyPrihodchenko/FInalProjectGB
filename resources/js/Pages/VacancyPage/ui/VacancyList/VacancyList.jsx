import React from "react";
import PropTypes from "prop-types";
import s from "./VacancyList.module.css";
import cn from "classnames";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppCard from "@/8Shared/ui/AppCard/AppCard";
import AppLink from "@/8Shared/ui/AppLink/AppLink";

export default function VacancyList(props) {
    // console.log(props);
    const { className, vacancy } = props;
    const {
        description,
        skills,
        contacts,
        requirements,
        responsibilities,
        conditions,
    } = vacancy;
    console.log("skills", typeof skills);
    return (
        <div className={cn(s.vacancyList, className)}>
            {description ? (
                <div className={s.description}>
                    <AppText className={s.bold} text={description} />
                </div>
            ) : null}

            {/* Requirements */}
            {requirements ? (
                typeof requirements === "string" ? (
                    <div className={s.vacancyItem}>
                        <AppText title={"Требования"} bold />
                        <AppText text={`- ${requirements}`} />
                    </div>
                ) : (
                    <div className={s.vacancyList}>
                        {requirements?.map((requirementsItem, index) => {
                            return (
                                <div className={s.vacancyItem} key={index}>
                                    <AppText
                                        title={requirementsItem.title}
                                        bold
                                    />
                                    {requirementsItem.list &&
                                        requirementsItem.list.map(
                                            (item, index) => {
                                                return (
                                                    <li
                                                        key={
                                                            index +
                                                            index +
                                                            index
                                                        }
                                                        className={s.list}
                                                    >
                                                        {item}
                                                    </li>
                                                );
                                            }
                                        )}
                                </div>
                            );
                        })}
                    </div>
                )
            ) : null}

            {/* Responsibilities */}
            {responsibilities ? (
                typeof responsibilities === "string" ? (
                    <div className={s.vacancyItem}>
                        <AppText title={"Обязаности"} bold />
                        <AppText text={`- ${responsibilities}`} />
                    </div>
                ) : (
                    <div className={s.vacancyList}>
                        {responsibilities?.map(
                            (responsibilitiesItem, index) => {
                                return (
                                    <div className={s.vacancyItem} key={index}>
                                        <AppText
                                            title={responsibilitiesItem.title}
                                            bold
                                        />
                                        {responsibilitiesItem.list &&
                                            responsibilitiesItem.list.map(
                                                (item, index) => {
                                                    return (
                                                        <li
                                                            key={
                                                                index +
                                                                index +
                                                                index
                                                            }
                                                            className={s.list}
                                                        >
                                                            {item}
                                                        </li>
                                                    );
                                                }
                                            )}
                                    </div>
                                );
                            }
                        )}
                    </div>
                )
            ) : null}

            {/*Сonditions */}
            {conditions ? (
                typeof conditions === "string" ? (
                    <div className={s.vacancyItem}>
                        <AppText title={"Условия"} bold />
                        <AppText text={`- ${conditions}`} />
                    </div>
                ) : (
                    <div className={s.vacancyList}>
                        {conditions?.map((conditionsItem, index) => {
                            return (
                                <div className={s.vacancyItem} key={index}>
                                    <AppText
                                        title={conditionsItem.title}
                                        bold
                                    />
                                    {conditionsItem.list &&
                                        conditionsItem.list.map(
                                            (item, index) => {
                                                return (
                                                    <li
                                                        key={
                                                            index +
                                                            index +
                                                            index
                                                        }
                                                        className={s.list}
                                                    >
                                                        {item}
                                                    </li>
                                                );
                                            }
                                        )}
                                </div>
                            );
                        })}
                    </div>
                )
            ) : null}

            {/* Skills */}
            {skills ? (
                typeof skills === "string" ? (
                    <div className={s.vacancyItem}>
                        <AppText title={"Ключевые навыки"} bold />

                        <AppCard
                            variant="secondary"
                            width={"fit-content"}
                            borderRadiusSmall
                            className={s.skill}
                        >
                            {skills}
                        </AppCard>
                    </div>
                ) : (
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
                )
            ) : null}

            {/* Contacts */}
            {contacts ? (
                typeof contacts === "string" ? (
                    <div className={s.vacancyItem}>
                        <AppText title={"Контактная информация"} bold />
                        <AppText text={`Менеджер: ${contacts}`} />
                    </div>
                ) : (
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
                )
            ) : null}
        </div>
    );
}

VacancyList.propTypes = {};
