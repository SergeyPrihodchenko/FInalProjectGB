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
import s from "./VacancyListPage.module.css"
import RadioButton from "@/8Shared/RadioButton/RadioButton";
import { Head } from "@inertiajs/react";
import cn from "classnames"

const employmentType = ['Полная занятость', 'Частичная занятость', 'Стажировка'];
const incomeLevel = ['Не имеет значения', 'от 45 000 ₽', 'от 90 000 ₽', 'от 140 000 ₽', 'Своя зарплата'];
const workExperience = ['Не имеет значения', 'Нет опыта', '1-3 года', '3-6 лет', 'более 6 лет'];


const Vacancy = ({ vacancies, title, auth }) => {
    const [vacancyList, setVacancyList] = useState(vacancies ? vacancies : []);
    const [isLoading, setIsLoading] = useState(false);
    const [index, setIndex] = useState(2);
    const loaderRef = useRef(null);

    const user = auth?.user;

    const fetchVacancyCards = useCallback(async () => {
        if (isLoading) return;

        setIsLoading(true);

        axios.get(`/vacancylist?page=${index}`)
            .then(res => {
                if (res.data.data.length) {
                    setVacancyList((prevVacancyList) => [...prevVacancyList, ...res.data.data])
                    setIsLoading(false);
                } else {
                    return;
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false))

        setIndex((prevIndex) => prevIndex + 1);

    }, [index, isLoading]);

    useEffect(() => {
        if (!vacancies) {
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

    }, [loaderRef, vacancyList]);


    useEffect(() => {
        if (!vacancies) {
            const getData = async () => {
                setIsLoading(true);
                try {
                    const response = await axios.get(`/vacancylist?page=1`);
                    setVacancyList(response.data.data)
                } catch (error) {
                    console.log(error);
                }
                setIsLoading(false);

            };

            getData();
        }

    }, []);


    return (
        <MainLayout user={user} className={'app_light_theme'}>
            <Head title={title} />
            <AppPage>
                <div className={s.vacancyWrapper}>
                    <div className="filterContainer left">
                        <form action="">
                            <AppText text="Уровень дохода" bold className={s.vacancyFilterTitle} />
                            {incomeLevel.map(item => <Checkbox key={item} label={item} />)}
                            <AppText text="Опыт работы" bold className={s.vacancyFilterTitle} />
                            {workExperience.map(item =>
                                <RadioButton key={item} label={item} name='work_experience' />
                            )}

                            <AppText text="Тип занятости" bold className={s.vacancyFilterTitle} />
                            {employmentType.map(item => <Checkbox key={item} label={item} />)}


                        </form>
                    </div>
                    <div className={s.vacancyList}>

                        <div className="flex flex-col gap-[20px] mb-[20px]">
                            {vacancyList.map(vac =>
                                <AppLink
                                    path={'vacancy.show'}
                                    param={vac.id}
                                    key={vac.payment}
                                >
                                    <AppCard
                                        width={'100%'}
                                        height={'200px'}
                                        shadow
                                        className={cn('flex flex-col items-start p-5')}
                                    >
                                        <AppText
                                            title={vac.title}
                                        />
                                        <AppText
                                            text={`от ${vac.payment} руб.`}

                                        />
                                        <AppText
                                            size='s'
                                            variant='notaccented'
                                            text={`Опыт работы от ${vac.experience} лет`}
                                        />
                                        <div className="flex gap-8 mt-auto">
                                            <AppButton
                                                className={'px-[12px] mt-auto rounded-[20px]'}
                                                width='auto'
                                                height='32px'


                                            >
                                                Откликнуться
                                            </AppButton>
                                            <AppButton
                                                className={'px-[12px]'}
                                                variant="outline"
                                                width='auto'
                                                height='32px'
                                            >
                                                Показать контакты
                                            </AppButton>
                                        </div>
                                    </AppCard>
                                </AppLink>
                            )}

                        </div>
                        <div ref={loaderRef}>
                            {isLoading && <Loader />}
                        </div>

                    </div>
                </div>


            </AppPage>
        </MainLayout>
    )
}

export default Vacancy;
