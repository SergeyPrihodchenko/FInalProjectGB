import React from "react";
import PropTypes from "prop-types";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import Checkbox from "@/8Shared/Checkbox/Checkbox";
import AppText from "@/8Shared/ui/AppText/AppText";
import { useDispatch, useSelector } from "react-redux";
import {
    setVacancyNameInput,
    setVacancyCityInput,
    setVacancyPaymentInput,
} from "../../model/slice/vacancyPageCreateSlice";
import s from "../VacancyPageCreate/VacancyPageCreate.module.css";
function VacancyCreateMainInfo({ errors }) {
    const dispatch = useDispatch();
    const {
        vacancyNameInput,
        vacancyCityInput,
        vacancyPaymentInput
    } = useSelector((state) => state.vacancyPageCreate);
    return (
        <>
            <AppInput
                label="Название вакансии"
                placeholder="Должность"
                name="title"
                value={vacancyNameInput}
                onChange={(e) => {
                    dispatch(setVacancyNameInput(e.target.value));
                }}
                errorMessage={errors.title}
            />
            <AppInput
                label="Где искать сотрудника"
                placeholder="Город"
                className={s.input}
                value={vacancyCityInput}
                onChange={(e) => {
                    dispatch(setVacancyCityInput(e.target.value));
                }}
                errorMessage={errors.title}
            />
            <div>
                <AppText
                    text="Предполагаемый уровень дохода в месяц или за объем работ"
                    bold
                />
                <div className={s.paymentContainer}>
                    <div className={s.payment}>
                        <AppInput
                            width="520px"
                            type="number"
                            value={vacancyPaymentInput}
                            onChange={(e) => {
                                dispatch(
                                    setVacancyPaymentInput(e.target.value)
                                );
                            }}
                            errorMessage={errors.payment}
                        />
                    </div>

                    <div className={s.checkbox}>
                        <Checkbox
                            defaultChecked={true}
                            label={"До вычета налогов"}
                        />
                        <Checkbox label={"На руки"} />
                    </div>
                </div>
            </div>
            <AppInput textBold label="Город" placeholder="Адрес" />
        </>
    );
}

VacancyCreateMainInfo.propTypes = {};

export default VacancyCreateMainInfo;
