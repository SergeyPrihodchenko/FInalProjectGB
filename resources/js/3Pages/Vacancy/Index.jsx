import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import React, { useCallback, useEffect, useState } from "react";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
import AppCard from "@/8Shared/ui/AppCard/AppCard";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import axios from "axios";
import Checkbox from "@/8Shared/Checkbox/Checkbox";

const employmentType = ['Полная занятость', 'Частичная занятость', 'Стажировка'];

const Vacancy = ({ vacancies, title, auth }) => {
    const [vacancyList, setVacancyList] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [totalCount, setTotalCount] = useState(0);
    // const [fetching, setFetching] = useState(true);\
    const [isLoading, setIsLoading] = useState(false);
    const [index, setIndex] = useState(2);


    const user = auth?.user;

    const fetchVacancyCards = useCallback(async () => {
        if (isLoading) return;
        setIsLoading(true);
        axios.get(`/vacancylist?page=${index}`)
            .then(res => setVacancyList([...vacancyList, ...res.data.data]))
            .catch((err) => console.log(err));
        setIndex((prevIndex) => prevIndex + 1);

        setIsLoading(false);
    }, [index, isLoading]);


    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`/vacancylist?page=1`);
                setVacancyList(response.data.data)
            } catch (error) {
                console.log(error);
            }
            setIsLoading(false);

        }
        getData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } =
                document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 20) {
                fetchVacancyCards();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [fetchVacancyCards]);
    // useEffect(() => {
    //     if (fetching) {
    //         console.log('fetching');
    //         axios.get(`/vacancylist?page=${currentPage}`)
    //             .then(response => {
    //                 const paginator = response.data,
    //                     list = paginator.data;
    //                 console.log(paginator);
    //                 setVacancyList([...vacancyList, ...list]);
    //                 setCurrentPage(current => current + 1);
    //                 setTotalCount(paginator.total);
    //             })
    //             .finally(() => setFetching(false));
    //     }
    // }, [fetching]);


    // useEffect(() => {
    //     const handleScroll = (e) => {
    //         console.log(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight));
    //         if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 200 && vacancyList.length !== totalCount) {
    //             setFetching(true);
    //             console.log('scroll');
    //             console.log(vacancyList.length);
    //         }
    //     }

    //     window.addEventListener('scroll', handleScroll);
    //     return function () {
    //         window.removeEventListener('scroll', handleScroll);
    //     }
    // }, []);

    // console.log('vacancyList:', vacancyList.length);
    // console.log('totalCount:', totalCount);
    // console.log(vacancyList.length !== totalCount);


    return (
        <MainLayout user={user} className={'app_light_theme'}>
            <AppPage>
                <div className="filterContainer">
                    <form action="">
                        <AppText text="Тип занятости" bold />
                        {employmentType.map(item => <Checkbox key={item} label={item} />)}

                    </form>
                </div>
                <AppText
                    title={`${title}`}
                    size="l"
                    bold
                    className="m-[20px]"
                />
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
                                variant='primary'
                                shadow
                                borderLeft
                                borderRadius
                                className={'flex flex-col items-start p-5'}
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
                                <AppButton
                                    className={'px-[12px] mt-auto rounded-[20px]'}
                                    width='auto'
                                    height='32px'
                                >
                                    Откликнуться
                                </AppButton>
                            </AppCard>
                        </AppLink>
                    )}

                </div>
            </AppPage>
        </MainLayout>
    )
}

export default Vacancy;
