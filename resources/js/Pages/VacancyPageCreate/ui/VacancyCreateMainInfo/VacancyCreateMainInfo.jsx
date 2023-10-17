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
import { useEffect } from "react";
import { useState } from "react";
import List from "@/8Shared/List/List";
import { useForm } from "@inertiajs/react";
function VacancyCreateMainInfo({ errors, cities, cityError }) {
    const {
        vacancyNameInput,
        vacancyCityInput,
        vacancyPaymentInput
    } = useSelector((state) => state.vacancyPageCreate);
    const [citiesList, setCititesList] = useState([]);
    const [openCitiesList, setOpenCititesList] = useState(false);
    const handleCitiesList = (e) => {
        dispatch(setVacancyCityInput(e.target.value));
    }
    const dispatch = useDispatch();

    useEffect(() => {
        if (vacancyCityInput) {
            const newList = cities.filter(item => item.title.toLowerCase().startsWith(vacancyCityInput.toLowerCase()));
            console.log('newList', newList);
            setCititesList(newList);
        } else {
            setCititesList([]);

        }

    }, [vacancyCityInput])
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
            <div style={{ position: 'relative' }}>

                <AppInput
                    autocomplete="off"
                    label="Где искать сотрудника"
                    placeholder="Город"
                    className={s.input}
                    name="city_id"
                    value={vacancyCityInput}
                    onChange={handleCitiesList}
                    onClick={() => setOpenCititesList(!openCitiesList)}
                    errorMessage={cityError}
                />
                {openCitiesList &&
                    <List
                        className={s.citiesList}
                        list={citiesList}
                        renderItem={(city) => <li
                            key={city.id}
                            className={s.citiesListItem}
                            onClick={(e) => {
                                dispatch(setVacancyCityInput(e.target.innerText));
                                setOpenCititesList(false)
                            }
                            }
                        >
                            {city.title}
                        </li>}
                    >
                    </List>}
            </div>

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
            {/* <AppInput textBold label="Город" placeholder="Адрес" /> */}
        </>
    );
}

VacancyCreateMainInfo.propTypes = {};

export default VacancyCreateMainInfo;
