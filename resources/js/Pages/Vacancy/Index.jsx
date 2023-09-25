import { AppPage } from "@/5Layouts/AppPage/AppPage";
import React, { useCallback, useEffect, useRef, useState } from "react";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
import AppCard from "@/8Shared/ui/AppCard/AppCard";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import axios from "axios";
import Checkbox from "@/8Shared/Checkbox/Checkbox";
import Loader from "@/8Shared/Loader/Loader";
import s from "./VacancyListPage.module.css";
import RadioButton from "@/8Shared/RadioButton/RadioButton";
import cn from "classnames";
import { Search } from "@/8Shared/Search/Search";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import List from "@/8Shared/List/List";
import { Head } from "@inertiajs/react";

const Vacancy = ({
    vacancies,
    title,
    auth,
    experience,
    schedule,
    employment,
    cities,
}) => {
    const user = auth?.user;
    const [vacancyList, setVacancyList] = useState(vacancies ? vacancies : []);
    const [isLoading, setIsLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const [total, setTotal] = useState(0);
    const loaderRef = useRef(null);
    const [filterData, setFilterData] = useState({
        employment: [],
        schedule: [],
        experience: '',
        city_id: [],
        title: ''
    });


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



    const fetchVacancyCards = useCallback(async () => {
        if (isLoading) return;

        setIsLoading(true);

        axios
            .post(`/vacancies/filter?page=${index}`, { filterData: filterData })
            .then((res) => {
                if (res.data.data.length) {
                    setVacancyList((prevVacancyList) => [
                        ...prevVacancyList,
                        ...res.data.data,
                    ]);
                    setIsLoading(false);
                } else {
                    return;
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));

        setIndex((prevIndex) => prevIndex + 1);
    }, [index, isLoading]);

    useEffect(() => {
        if (!vacancies) {
            if (vacancyList.length !== total) {
                const observer = new IntersectionObserver((entries) => {
                    const target = entries[0];
                    if (target.isIntersecting) {
                        fetchVacancyCards();
                    }
                });

                if (loaderRef.current) {
                    observer.observe(loaderRef.current);
                }

                return () => {
                    if (loaderRef.current) {
                        observer.unobserve(loaderRef.current);
                        setIsLoading(false);
                    }
                };
            }
        }
    }, [loaderRef, vacancyList]);

    // useEffect(() => {
    //     if (!vacancies) {
    //         const getData = async () => {
    //             setIsLoading(true);
    //             try {
    //                 const response = await axios.post(`/vacancies/filter?page=1`, { filterData: {} });
    //                 setVacancyList(response.data.data);
    //                 setTotal(response.data.total);
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //             setIsLoading(false);
    //         };

    //         getData();
    //     }
    // }, []);

    const setValueChange = (value) => {
        setFilterData((prevState) => {
            return {
                ...prevState,
                title: value,
            };
        });
        console.log(filterData.title);
    };

    const handleChange = (event) => {
        const { value, checked, name, type } = event.target;

        switch (type) {
            case "checkbox":
                let copy = { ...filterData };
                checked
                    ? copy[name].push(value)
                    : copy[name].splice(copy[name].indexOf(value), 1);
                setFilterData(copy);
                // console.log(setValueChange());
                break;
            case "radio":
                if (checked) {
                    setFilterData((prevState) => {
                        return {
                            ...prevState,
                            [name]: value
                        }

                    });
                }
                break;
            default:
                setFilterData(filterData);
                break;
        }
    }

    useEffect(() => {
        if (!vacancies) {
            const getFilterData = async () => {
                const response = await axios.post(`/vacancies/filter?page=1`, {
                    filterData: filterData,
                });
                const { data } = response.data;
                setVacancyList(data);
                setTotal(response.data.total);
                setIndex(2);
                console.log(filterData);
                console.log(data);
            };
            getFilterData();
        }
    }, [filterData]);

    console.log('total', total);

    return (
        <>
            <Head title="Вакансии" />
            <AppPage>
                <Search width={"500px"} filterChange={setValueChange} />
                <div className={s.vacancyWrapper}>
                    <div className={s.filterContainer}>
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
                                width={'auto'}
                                className={s.citiesInput}
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

                    <div className={s.vacancyList}>
                        {vacancyList.map((vac) => (
                            <AppLink
                                path={"vacancy.show"}
                                param={vac.id}
                                key={vac.id}
                            >
                                <AppCard
                                    width={"auto"}
                                    height={"260px"}
                                    shadow
                                    className={cn(s.vacancyListCard)}
                                >
                                    <AppText title={vac.title} />
                                    <AppText text={`от ${vac.payment} руб.`} />
                                    <AppText
                                        text={`Компания ${vac.conditions}.`}
                                    />
                                    <AppText text={vac.employment} />
                                    <AppText text={vac.schedule} />
                                    <AppText
                                        size="s"
                                        variant="notaccented"
                                        text={`Опыт работы: ${vac.experience}`}
                                    />
                                    <AppText
                                        size="s"
                                        variant="notaccented"
                                        text={`Город: ${vac.city}`}
                                    />
                                    <AppButton
                                        className={s.vacancyListCardBtn}
                                        width="auto"
                                    >
                                        Откликнуться
                                    </AppButton>
                                </AppCard>
                            </AppLink>
                        ))}
                        <div ref={loaderRef}>{isLoading && <Loader />}</div>
                    </div>
                </div>
            </AppPage>
        </>
    );
};
export default Vacancy;
