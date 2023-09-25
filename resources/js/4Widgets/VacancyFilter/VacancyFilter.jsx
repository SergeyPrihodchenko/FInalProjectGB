import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./VacancyFilter.module.css"
import cn from "classnames"
import Checkbox from "@/8Shared/Checkbox/Checkbox";
import RadioButton from "@/8Shared/RadioButton/RadioButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import { useState } from "react";
import { useEffect } from "react";


export const VacancyFilter = (props) => {
    const {
        experience,
        employment,
        schedule,
        cities,
        className,
        handleChange,
    } = props;

    const [cityInput, setCityInput] = useState('');
    const [filterCityList, setFilterCityList] = useState(cities);

    const handleCityInput = (e) => {
        const value = e.target.value;
        setCityInput(value);

    }
    useEffect(() => {
        if (cityInput) {
            const newList = cities.filter((city) => city.title.toLowerCase().startsWith(cityInput.toLocaleLowerCase()));
            setFilterCityList(newList);

        } else {
            setFilterCityList(cities);
        }

    }, [cityInput]);
    return (
        <div className={cn(s.filterContainer, className)}>
            <form action="">
                <AppText
                    text="Тип занятости"
                    bold
                    className={s.vacancyFilterTitle}
                />
                {employment.map((item) =>
                    <Checkbox
                        name={'employment'}
                        key={item}
                        label={item}
                        value={item}
                        onChange={handleChange}

                    />)}
                <AppText text="Опыт работы" bold className={s.vacancyFilterTitle} />
                {experience.map((item) =>
                    <RadioButton
                        key={item}
                        name={'experience'}
                        value={item}
                        label={item}
                        onChange={handleChange}
                    />)
                }

                <AppText
                    text="График работы"
                    bold
                    className={s.vacancyFilterTitle}
                />
                {schedule.map((item) =>
                    <Checkbox
                        name={'schedule'}
                        key={item}
                        label={item}
                        value={item}
                        onChange={handleChange}
                    />
                )}
                <div>
                    <AppText
                        text="Город"
                        bold
                        className={s.vacancyFilterTitle}
                    />
                    <AppInput
                        width={'auto'}
                        className={s.citiesInput}
                        value={cityInput}
                        onChange={handleCityInput}
                    />
                    <ul className={s.citiesList}>
                        {filterCityList.map(city =>
                            <li key={city.id}>
                                <Checkbox
                                    name={'cities'}
                                    value={city.id}
                                    label={city.title}
                                    onChange={handleChange}
                                />
                            </li>
                        )}
                    </ul>
                </div>
            </form>
        </div>
    )
}