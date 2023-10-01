import Checkbox from "@/8Shared/Checkbox/Checkbox";
import s from "./VacancyListPageFilters.module.css"
import cn from "classnames"
import List from "@/8Shared/List/List";
import AppText from "@/8Shared/ui/AppText/AppText";
import RadioButton from "@/8Shared/RadioButton/RadioButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import { useState } from "react";
import { useEffect } from "react";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import { BootstrapIcon } from "@/8Shared/Icon/BootstrapIcon";

const VacancyListPageFilters = ({
    payment,
    employment,
    experience,
    schedule,
    cities,
    handleChange,
    handlePayment,
    className
}) => {
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
        <div className={cn(s.vacancyFilterSidebar, className)}>
            <form action="">
                <AppText
                    text="Тип занятости"
                    bold
                    className={s.vacancyFilterTitle}
                />
                <List
                    list={employment}
                    renderItem={(item) =>
                        <li key={item}>
                            <Checkbox
                                label={item}
                                name={'employment'}
                                checkHandler={handleChange}
                                value={item}
                            />
                        </li>
                    }
                />
                <AppText
                    text="Опыт работы"
                    bold
                    className={s.vacancyFilterTitle}
                />
                <RadioButton
                    name={'experience'}
                    label={'Не имеет значения'}
                    value={''}
                    onChange={handleChange} />

                <List
                    list={experience}
                    renderItem={(item) =>
                        <RadioButton
                            key={item}
                            label={item}
                            name={'experience'}
                            onChange={handleChange}
                            value={item}
                        />}

                />
                <AppText
                    text="Уровень дохода"
                    bold
                    className={s.vacancyFilterTitle}
                />
                <div className={s.paymentBlock}>
                    <AppInput
                        name={'payment'}
                        width={'100%'}
                        placeholder={'от 100000'}
                        value={payment}
                        onChange={handleChange}
                    />
                    <AppButton
                        colorType={'accent'}
                        variant={'outline'}
                        type='button'
                        onClick={handlePayment}
                        className={s.paymentBtn}
                    >
                        <BootstrapIcon
                            name={'BsSearch'}
                            size={20}
                        />
                    </AppButton>

                </div>
                <AppText
                    text="График работы"
                    bold
                    className={s.vacancyFilterTitle}
                />
                <List
                    list={schedule}
                    renderItem={(item) =>
                        <Checkbox
                            key={item}
                            label={item}
                            name={'schedule'}
                            checkHandler={handleChange}
                            value={item}
                        />}


                />
                <AppText
                    text="Город"
                    bold
                    className={s.vacancyFilterTitle}
                />
                <AppInput
                    width={'100%'}
                    className={s.citiesInput}
                    placeholder={'Поиск города'}
                    value={cityInput}
                    onChange={handleCityInput}
                />
                <List
                    className={s.citiesList}
                    list={filterCityList}
                    renderItem={(city) =>
                        <Checkbox
                            key={city.id}
                            label={city.title}
                            name={'city_id'}
                            value={city.id}
                            checkHandler={handleChange}
                        />
                    }
                />
            </form>
        </div>
    )
}

export default VacancyListPageFilters;