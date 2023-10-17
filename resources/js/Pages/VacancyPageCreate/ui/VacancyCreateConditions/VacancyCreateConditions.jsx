import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
    removeConditionsItem,
    setConditionsInput,
    setConditionsList,
} from "../../model/slice/vacancyPageCreateSlice";
import cn from "classnames";
import s from "../VacancyPageCreate/VacancyPageCreate.module.css";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import AppText from "@/8Shared/ui/AppText/AppText";
function VacancyCreateConditions({ errors }) {
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
                                <AppText text={conditionsItem} />
                                <AppButton
                                    sizeText={"xs"}
                                    variant={"clear"}
                                    colorType={"cancel"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(removeConditionsItem(index));
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
                // errorMessage={errors.title}
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
