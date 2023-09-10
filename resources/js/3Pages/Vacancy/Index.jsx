import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import React, { useEffect, useState } from "react";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
import AppCard from "@/8Shared/ui/AppCard/AppCard";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import axios from "axios";

const Vacancy = ({ vacancies, title, auth }) => {
    const [vacancyList, setVacancyList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [fetching, setFetching] = useState(true);

    const user = auth?.user;

    useEffect(() => {
        if (fetching) {
            console.log("fetching");
            axios
                .get(`/vacancylist?page=${currentPage}`)
                .then((response) => {
                    const paginator = response.data,
                        list = paginator.data;
                    console.log(paginator);
                    // if (vacancyList.length < paginator.total) {
                    setVacancyList([...vacancyList, ...list]);
                    setCurrentPage((current) => current + 1);
                    setTotalCount(paginator.total);
                    // }
                })
                .finally(() => setFetching(false));
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return function () {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleScroll = (e) => {
        if (
            e.target.documentElement.scrollHeight -
                (e.target.documentElement.scrollTop + window.innerHeight) <
            300
        ) {
            setFetching(true);
            console.log("scroll");
        }
    };
    console.log("vacancyList:", vacancyList.length);
    console.log("totalCount:", totalCount);

    return (
        <MainLayout user={user} className={"app_light_theme"}>
            <AppPage>
                <AppText
                    title={`${title}`}
                    size="l"
                    bold
                    className="m-[20px]"
                />
                <div className="flex flex-col gap-[20px] mb-[20px]">
                    {vacancyList.map((vac) => (
                        <AppLink
                            path={"vacancy.show"}
                            param={vac.id}
                            key={vac.id}
                        >
                            <AppCard
                                width={"100%"}
                                height={"200px"}
                                variant="primary"
                                shadow
                                borderLeft
                                borderRadius
                                className={"flex flex-col items-start p-5"}
                            >
                                <AppText title={vac.title} />
                                <AppText text={`от ${vac.payment} руб.`} />
                                <AppText
                                    size="s"
                                    variant="notaccented"
                                    text={`Опыт работы от ${vac.experience} лет`}
                                />
                                <AppButton
                                    className={
                                        "px-[12px] mt-auto rounded-[20px]"
                                    }
                                    width="auto"
                                    height="32px"
                                >
                                    Откликнуться
                                </AppButton>
                            </AppCard>
                        </AppLink>
                    ))}
                </div>
            </AppPage>
        </MainLayout>
    );
};

export default Vacancy;
