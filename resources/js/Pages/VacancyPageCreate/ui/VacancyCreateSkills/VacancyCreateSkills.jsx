import React from "react";
import PropTypes from "prop-types";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import s from "../VacancyPageCreate/VacancyPageCreate.module.css";
import cn from "classnames";

import {
    removeSkillsItem,
    setSkillsInput,
    setSkillsList,
} from "../../model/slice/vacancyPageCreateSlice";
import { useDispatch, useSelector } from "react-redux";
import AppText from "@/8Shared/ui/AppText/AppText";

function VacancyCreateSkills({ errors }) {
    const dispatch = useDispatch();
    const { skillsInput, skillsList } = useSelector(
        (state) => state.vacancyPageCreate
    );
    return (
        <>
            {skillsList ? (
                <div className={s.skillsList}>
                    {skillsList?.map((skillsItem, index) => {
                        return (
                            <div className={s.listItem} key={index}>
                                <AppText text={skillsItem} />

                                <AppButton
                                    sizeText={"xs"}
                                    variant={"clear"}
                                    colorType={"cancel"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(removeSkillsItem(index));
                                    }}
                                >
                                    Удалить
                                </AppButton>
                            </div>
                        );
                    })}
                </div>
            ) : null}
            <div className={cn(s.skills, s.item)}>
                <AppInput
                    errorMessage={errors.title}
                    label="Ключевые навыки"
                    value={skillsInput}
                    onChange={(e) => {
                        dispatch(setSkillsInput(e.target.value));
                    }}
                />
                <AppButton
                    variant="clear"
                    colorType="hint"
                    sizeText="s"
                    onClick={(e) => {
                        e.preventDefault();
                        if (skillsInput) {
                            dispatch(
                                setSkillsList([...skillsList, skillsInput])
                            );
                        }

                        dispatch(setSkillsInput(""));
                    }}
                >
                    Добавить навык
                </AppButton>
            </div>
        </>
    );
}

VacancyCreateSkills.propTypes = {};

export default VacancyCreateSkills;
