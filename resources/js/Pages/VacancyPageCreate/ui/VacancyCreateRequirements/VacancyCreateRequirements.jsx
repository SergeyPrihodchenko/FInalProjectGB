import React from "react";
import PropTypes from "prop-types";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import {
    removeRequirementsItem,
    setRequirementsInput,
    setRequirementsList,
} from "../../model/slice/vacancyPageCreateSlice";
import s from "../VacancyPageCreate/VacancyPageCreate.module.css";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import AppText from "@/8Shared/ui/AppText/AppText";
function VacancyCreateRequirements({ errors }) {
    const dispatch = useDispatch();
    const { requirementsInput, requirementsList } = useSelector(
        (state) => state.vacancyPageCreate
    );
    return (
        <div className={cn(s.requirements, s.item)}>
            {requirementsList ? (
                <div className={s.requirementsList}>
                    {requirementsList?.map((requireItem, index) => {
                        return (
                            <div className={s.listItem} key={index}>
                                <AppText text={requireItem} />
                                <AppButton
                                    sizeText={"xs"}
                                    variant={"clear"}
                                    colorType={"cancel"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(removeRequirementsItem(index));
                                    }}
                                >
                                    Удалить
                                </AppButton>
                            </div>
                        );
                    })}
                </div>
            ) : null}
            <AppInput
                errorMessage={errors.title}
                label="Требования к соискателю"
                value={requirementsInput}
                onChange={(e) => {
                    dispatch(setRequirementsInput(e.target.value));
                }}
            />

            <AppButton
                variant="clear"
                colorType="hint"
                sizeText="s"
                onClick={(e) => {
                    e.preventDefault();
                    if (requirementsInput) {
                        dispatch(
                            setRequirementsList([
                                ...requirementsList,
                                requirementsInput,
                            ])
                        );
                    }

                    dispatch(setRequirementsInput(""));
                }}
            >
                Добавить требование
            </AppButton>
        </div>
    );
}

VacancyCreateRequirements.propTypes = {};

export default VacancyCreateRequirements;
