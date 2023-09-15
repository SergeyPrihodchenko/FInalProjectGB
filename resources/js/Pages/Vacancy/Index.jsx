import MainLayout from "@/5Layouts/MainLayout/MainLayout";
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

const employmentType = [
    {
        id: 1,
        name: "Полная занятость",
        checked: false,
    },
    {
        id: 2,
        name: "Частичная занятость",
        checked: false,
    },
    {
        id: 3,
        name: "Стажировка",
        checked: false,
    },
];
const workExperience = [
    {
        id: 1,
        name: "Не имеет значения",
    },
    {
        id: 2,
        name: "Нет опыта",
    },
    {
        id: 3,
        name: "1-3 года",
    },
    {
        id: 4,
        name: "3-6 лет",
    },
    {
        id: 5,
        name: "более 6 лет",
    },
];
const workSchedule = [
    {
        id: 1,
        name: "Полный день",
        checked: false,
    },
    {
        id: 2,
        name: "Сменный график",
        checked: false,
    },
    {
        id: 3,
        name: "Гибкий график",
        checked: false,
    },
    {
        id: 4,
        name: "Удаленная работа",
        checked: false,
    },
];
const payment = [
    "Не имеет значения",
    "от 45 000 ₽",
    "от 90 000 ₽",
    "от 140 000 ₽",
];

const Vacancy = ({ vacancies, title, auth }) => {
    const [vacancyList, setVacancyList] = useState(vacancies ? vacancies : []);
    const [isLoading, setIsLoading] = useState(false);
    const [index, setIndex] = useState(2);
    const [total, setTotal] = useState(0);
    const loaderRef = useRef(null);

    const [empType, setEmpType] = useState(employmentType);

    const [filterObject, setFilterObject] = useState({
        employmentType: [],
        workExperience: "",
        workSchedule: [],
    });

    const user = auth?.user;

    const fetchVacancyCards = useCallback(async () => {
        if (isLoading) return;

        setIsLoading(true);

        axios
            .get(`/vacancylist?page=${index}`)
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
            if (vacancyList.length != total) {
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

    useEffect(() => {
        if (!vacancies) {
            const getData = async () => {
                setIsLoading(true);
                try {
                    const response = await axios.get(`/vacancylist?page=1`);

                    setVacancyList(response.data.data);
                    setTotal(response.data.total);
                } catch (error) {
                    console.log(error);
                }
                setIsLoading(false);
            };

            getData();
        }
    }, []);

    const handleChange = (id) => {
        // const { value, checked, name, type } = event.target;
        const updateCheckStatus = empType.map((item, index) => {
            index + 1 === id ? { ...item, checked: !item.checked } : item;
        });

        setEmpType(updateCheckStatus);

        // const item = type === 'checkbox' ? checked : value;
        // setFilterObject({
        //     ...filterObject,
        //     [name]: item
        // });
    };

    console.log(empType);

    useEffect(() => {
        axios
            .post("/vacancies/filter", { test: filterObject })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [filterObject]);
    return (
        <MainLayout className={"app_light_theme"} user={user}>
            <AppPage>
                <div className={s.vacancyWrapper}>
                    <div className="filterContainer">
                        <form action="">
                            <AppText
                                text="Тип занятости"
                                bold
                                className={s.vacancyFilterTitle}
                            />
                            {employmentType.map(({ id, name, checked }) => (
                                <Checkbox
                                    name={"employmentType"}
                                    key={name}
                                    label={name}
                                    value={name}
                                    checked={checked}
                                    onChange={handleChange}
                                />
                            ))}
                            <AppText
                                text="Опыт работы"
                                bold
                                className={s.vacancyFilterTitle}
                            />
                            {workExperience.map((item) => (
                                <RadioButton
                                    key={item.name}
                                    name={"workExperience"}
                                    label={item.name}
                                    value={item.id}
                                    onChange={handleChange}
                                />
                            ))}
                            <AppText
                                text="Уровень дохода"
                                bold
                                className={s.vacancyFilterTitle}
                            />
                            {payment.map((item) => (
                                <RadioButton
                                    name={"payment"}
                                    label={item}
                                    value={item}
                                />
                            ))}

                            <AppText
                                text="График работы"
                                bold
                                className={s.vacancyFilterTitle}
                            />
                            {workSchedule.map((item) => (
                                <Checkbox
                                    name={"workSchedule"}
                                    key={item.name}
                                    label={item.name}
                                    value={item.id}
                                    onChange={handleChange}
                                />
                            ))}
                        </form>
                    </div>
                    <div className={s.vacancyList}>
                        <div className="flex flex-col gap-[20px] mb-[30px]">
                            {vacancyList.map((vac) => {
                                return (
                                    <AppLink
                                        path={"vacancy.show"}
                                        param={vac.id}
                                        key={vac.payment}
                                    >
                                        <AppCard
                                            width={"auto"}
                                            height={"260px"}
                                            shadow
                                            className={cn(
                                                "flex flex-col items-start p-5",
                                                s.vacancyListCard
                                            )}
                                        >
                                            <AppText title={vac.title} />
                                            <AppText
                                                text={`от ${vac.payment} руб.`}
                                            />
                                            <AppText
                                                text={`Компания ${vac.conditions}.`}
                                            />
                                            <AppText text={vac.employment} />
                                            <AppText
                                                size="s"
                                                variant="notaccented"
                                                text={`Опыт работы от ${vac.experience} лет`}
                                                className="p-[12px]"
                                            />
                                            <AppButton
                                                className={" mt-auto"}
                                                width="auto"
                                            >
                                                Откликнуться
                                            </AppButton>
                                        </AppCard>
                                    </AppLink>
                                );
                            })}
                        </div>
                        <div ref={loaderRef}>{isLoading && <Loader />}</div>
                    </div>
                </div>
            </AppPage>
        </MainLayout>
    );
};

export default Vacancy;
