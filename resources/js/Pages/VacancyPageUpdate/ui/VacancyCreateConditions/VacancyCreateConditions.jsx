import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
    setConditionsInput,
    setConditionsList,
} from "../../model/slice/vacancyPageUpdateSlice";
import cn from "classnames";
import s from "../VacancyPageUpdate/VacancyPageUpdate.module.css";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
function VacancyCreateConditions(props) {
    const dispatch = useDispatch();
    const { conditionsInput, conditionsList } = useSelector(
        (state) => state.vacancyPageCreate
    );

    return (
        <div className={cn(s.conditions, s.item)}>
            {conditionsList ? (
                <div className={s.conditionsList}>
                    {conditionsList?.map((conditionsItem, index) => {
                        return (
                            <div className={s.listItem} key={index}>
                                <div>{conditionsItem}</div>
                                <AppButton
                                    sizeText={"xs"}
                                    variant={"clear"}
                                    colorType={"cancel"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        conditionsList.splice(index, 1);
                                        const newConditionsList = [
                                            ...conditionsList,
                                        ];

                                        dispatch(
                                            setConditionsList([
                                                ...newConditionsList,
                                            ])
                                        );
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
                label="Условия работы"
                value={conditionsInput}
                onChange={(e) => {
                    dispatch(setConditionsInput(e.target.value));
                }}
            />
            <AppButton
                variant="clear"
                colorType="hint"
                sizeText="s"
                onClick={(e) => {
                    e.preventDefault();
                    if (conditionsInput) {
                        dispatch(
                            setConditionsList([
                                ...conditionsList,
                                conditionsInput,
                            ])
                        );
                    }

                    dispatch(setConditionsInput(""));
                }}
            >
                Добавить условие
            </AppButton>
        </div>
    );
}

VacancyCreateConditions.propTypes = {};

export default VacancyCreateConditions;
