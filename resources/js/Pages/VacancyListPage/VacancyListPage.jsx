import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import React, { useCallback, useEffect, useRef, useState } from "react";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
import AppCard from "@/8Shared/ui/AppCard/AppCard";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import axios from "axios";
import Loader from "@/8Shared/Loader/Loader";
import s from "./VacancyListPage.module.css";
import cn from "classnames";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import { Head } from "@inertiajs/react";
import VacancyListPageFilters from "./ui/VacancyListPageFilters/VacancyListPageFilters";
import useDebounce from "@/8Shared/Search/useDebounce";
import List from "@/8Shared/List/List";

const VacancyListPage = ({
    vacancies,
    title,
    auth,
    experience,
    schedule,
    employment,
    cities
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
        title: '',
        payment: '',
    });

    //поиск по названию вакансии
    const [vacancySearchInput, setVacancySearchInput] = useState(''); // состояние инпута поиска по названию вакансии
    const [suggestions, setSuggestions] = useState([]);
    const debouncedVacancySearch = useDebounce(vacancySearchInput, 500);
    const [suggestionsActive, setSuggestionsActive] = useState(false);

    const handleVacancySearchInput = (e) => {
        const { value } = e.target;
        setVacancySearchInput(value);

    }

    useEffect(() => {
        if (!debouncedVacancySearch) return;

        axios.get(`/searchSort?str=${debouncedVacancySearch}`)
            .then((res) => {
                setSuggestions(res.data);
            })
            .catch((err) => console.log(err))
        setFilterData((prevState) => {
            return {
                ...prevState,
                title: debouncedVacancySearch
            }
        })

    }, [debouncedVacancySearch]);
    const handleSuggestionClick = (e) => {
        setSuggestions([]);
        setVacancySearchInput(e.target.innerText);
        setSuggestionsActive(false);
    }


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
                'title': value
            }
        }
        );
        console.log(filterData.title);
    }

    const handleChange = (event) => {
        const { value, checked, name, type } = event.target;

        switch (type) {
            case "checkbox":
                let copy = { ...filterData };
                checked ? copy[name].push(value) : copy[name].splice(copy[name].indexOf(value), 1);
                setFilterData(copy);
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
                setFilterData(filterData)
                break;

        }
    }

    useEffect(() => {

        if (!vacancies) {
            const getFilterData = async () => {
                const response = await axios.post(`/vacancies/filter?page=1`, { filterData: filterData });
                const { data } = response.data;
                setVacancyList(data);
                setTotal(response.data.total);
                setIndex(2);
                console.log(data);
            }
            getFilterData();
        }

    }, [filterData]);

    return (
        <MainLayout className={"app_light_theme"}>
            <Head title="Вакансии" />
            <AppPage>
                {/* <Search width={'500px'} filterChange={setValueChange} /> */}
                <div className={s.filterSearchVacancy}>
                    <form action="" className={s.vacancySearch}>
                        <AppInput
                            autocomplete="off"
                            width={'550px'}
                            name={'title'}
                            placeholder={'Поиск вакансии'}
                            value={vacancySearchInput}
                            onChange={handleVacancySearchInput}
                            onClick={() => setSuggestionsActive(!suggestionsActive)}
                        />
                    </form>
                    {suggestionsActive &&
                        <List
                            className={s.serachFilterSuggestions}
                            list={suggestions}
                            renderItem={(suggestion) =>
                                <li className={s.serachFilterSuggestion} onClick={handleSuggestionClick}>
                                    {suggestion.title}
                                </li>
                            }
                        />
                    }

                </div>
                <div className={s.vacancyWrapper}>
                    <VacancyListPageFilters
                        employment={employment}
                        cities={cities}
                        schedule={schedule}
                        experience={experience}
                        handleChange={handleChange}
                    />

                    <div className={s.vacancyList}>
                        {vacancyList.length > 0 ?
                            <AppText bold text={`Найдено ${total} вакансии`} /> :
                            <AppText bold text={`Ничего не найдено`} />}
                        {vacancyList.map(vac =>
                            <AppLink
                                path={'vacancy.show'}
                                param={vac.id}
                                key={vac.id}
                            >
                                <AppCard
                                    width={'auto'}
                                    height={'260px'}
                                    shadow
                                    className={cn(s.vacancyListCard)}
                                >
                                    <AppText
                                        title={vac.title}
                                    />
                                    <AppText
                                        text={`от ${vac.payment} руб.`}
                                    />
                                    <AppText
                                        text={`Компания ${vac.conditions}.`}
                                    />
                                    <AppText
                                        text={vac.employment}
                                    />
                                    <AppText
                                        text={vac.schedule}
                                    />
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
                        )}
                        <div ref={loaderRef}>{isLoading && <Loader />}</div>
                    </div>

                </div>
            </AppPage>
        </MainLayout >
    );
};
export default VacancyListPage;
