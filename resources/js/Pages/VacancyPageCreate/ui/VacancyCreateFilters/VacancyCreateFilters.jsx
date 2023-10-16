import React from "react";
import PropTypes from "prop-types";
import RadioButton from "@/8Shared/RadioButton/RadioButton";
import AppText from "@/8Shared/ui/AppText/AppText";
import Checkbox from "@/8Shared/Checkbox/Checkbox";
import s from "../VacancyPageCreate/VacancyPageCreate.module.css";
import { useDispatch } from "react-redux";
import { setVacancyEmployment, setVacancyExperience, setVacancySchedule } from "../../model/slice/vacancyPageCreateSlice";
import { useForm } from "@inertiajs/react";

function VacancyCreateFilters({ experience, schedule, employment }) {
    const dispatch = useDispatch();

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
                                onChange={(e) => {
                                    dispatch(setVacancyExperience(e.target.value))
                                }
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
                        <RadioButton
                            key={index}
                            name={"schedule"}
                            label={item}
                            value={item}
                            onChange={(e) => {
                                console.log("RadioButton", item);
                                dispatch(setVacancySchedule(e.target.value))
                            }}
                        />
                    ))}
                </>
            )}
            {employment && (
                <>
                    <AppText title="Тип занятости" className={s.item} />
                    {employment?.map((item, index) => (
                        <RadioButton
                            key={index}
                            name={"employment"}
                            label={item}
                            value={item}
                            onChange={(e) => dispatch(setVacancyEmployment(e.target.value))}
                        />
                    ))}
                </>
            )}
        </>
    );
}

VacancyCreateFilters.propTypes = {};

export default VacancyCreateFilters;
