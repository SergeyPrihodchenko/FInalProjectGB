import React from "react";
import PropTypes from "prop-types";
import RadioButton from "@/8Shared/RadioButton/RadioButton";
import AppText from "@/8Shared/ui/AppText/AppText";
import Checkbox from "@/8Shared/Checkbox/Checkbox";
import s from "../VacancyPageCreate/VacancyPageCreate.module.css";

function VacancyCreateFilters({ experience, schedule, employment }) {
    return (
        <>
            {experience && (
                <>
                    <AppText title="Опыт работы" className={s.item} />
                    <div className={s.item}>
                        {experience?.map((item, index) => (
                            <RadioButton
                                key={index}
                                name={"experience"}
                                label={item}
                                value={item}
                                onChange={() =>
                                    console.log("RadioButton", item)
                                }
                            />
                        ))}
                    </div>
                </>
            )}
            {schedule && (
                <>
                    <AppText title="График работы" className={s.item} />
                    {schedule?.map((item, index) => (
                        <Checkbox
                            className={s.item}
                            key={index}
                            name={"schedule"}
                            label={item}
                            value={item}
                            onChange={() => console.log("RadioButton", item)}
                        />
                    ))}
                </>
            )}
            {employment && (
                <>
                    <AppText title="Тип занятости" className={s.item} />
                    {employment?.map((item, index) => (
                        <Checkbox
                            className={s.item}
                            key={index}
                            name={"employment"}
                            label={item}
                            value={item}
                            onChange={() => console.log("RadioButton", item)}
                        />
                    ))}
                </>
            )}
        </>
    );
}

VacancyCreateFilters.propTypes = {};

export default VacancyCreateFilters;
