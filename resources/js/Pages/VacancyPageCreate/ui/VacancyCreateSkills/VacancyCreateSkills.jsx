import React from "react";
import PropTypes from "prop-types";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";

import {
    setSkillsInput,
    setSkillsList,
} from "../../model/slice/vacancyPageCreateSlice";
import { useDispatch, useSelector } from "react-redux";

function VacancyCreateSkills(props) {
    const dispatch = useDispatch();
    const { skillsInput, skillsList } = useSelector(
        (state) => state.vacancyPageCreate
    );
    return;
    {
        skillsList ? (
            <div className={s.skillsList}>
                {skillsList?.map((skillsItem, index) => {
                    return (
                        <div className={s.listItem} key={index}>
                            <div>{skillsItem}</div>
                            <AppButton
                                sizeText={"xs"}
                                variant={"clear"}
                                colorType={"cancel"}
                                onClick={(e) => {
                                    e.preventDefault();
                                    skillsList.splice(index, 1);
                                    const newSkillsList = [...skillsList];

                                    dispatch(setSkillsList([...newSkillsList]));
                                }}
                            >
                                Удалить
                            </AppButton>
                        </div>
                    );
                })}
            </div>
        ) : null;
    }
    <div className={cn(s.skills, s.item)}>
        <AppInput
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
                    dispatch(setSkillsList([...skillsList, skillsInput]));
                }

                dispatch(setSkillsInput(""));
            }}
        >
            Добавить навык
        </AppButton>
    </div>;
}

VacancyCreateSkills.propTypes = {};

export default VacancyCreateSkills;
