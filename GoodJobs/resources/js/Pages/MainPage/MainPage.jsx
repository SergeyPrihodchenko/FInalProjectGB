
import styles from "./MainPage.module.css";
import { fakerRU as faker } from "@faker-js/faker";
import { AppList } from "@/Shared/AppList/AppList";
import propTypes from "prop-types";
import MainLayout from "@/Layouts/MainLayout/MainLayout";
import { AppPage } from "@/Shared/AppPage/AppPage";
import { AuthContext } from "@/Shared/store/AuthContext";
import { Banner } from "@/Shared/Banner/Banner";
import { Typography } from "@/Shared/Typography/Typography";
import { Search } from "@/Shared/Search/Search";
import { Head } from "@inertiajs/react";
import AppText from "@/Shared/ui/AppText/AppText";
import { AppCard } from "@/Shared/AppCard/AppCard";

// const cardsInfo = [...Array(12)].map(() => {
//     return {
//         id: faker.string.nanoid(10),
//         title: faker.person.jobType(),
//         salary: `${faker.finance.amount({
//             min: 30000,
//             max: 100000,
//             dec: 0,
//         })} руб`,
//         borderRight: `5px solid ${faker.color.rgb({ casing: "lower" })}`,
//     };
// });

export const MainPage = ({ auth, categories, className, vacancies }) => {
    const user = auth?.user;
    return (
        <AuthContext.Provider value={{ user }}>
            <Head title="Home" />
            <MainLayout className={className}>
                <Banner
                    imageUrl={`https://static.tildacdn.com/tild6138-6338-4363-a435-383636663665/b_591bf35ac97a1.jpg`}
                >
                    <AppPage>
                        <Typography
                            className={"mb-6"}
                            variant={"h1"}
                            color={"title"}
                        >
                            Работа найдется для каждого
                        </Typography>
                        <Search
                            placeholder={"Профессия, должность, компания"}
                            vacancies={vacancies}
                        />
                    </AppPage>
                </Banner>
                <AppPage>
                    <AppText title={"Категории"} size={"l"} />
                    <div className={styles.catList}>
                        {categories.map((cat) => (
                            <AppCard
                                path={"category.show"}
                                param={cat.id}
                                card={cat}
                            />
                        ))}
                    </div>

                    <AppList list={categories} />

                    <AppText title={"Вакансии"} size={"l"} />
                    <div className={styles.vacancyList}>
                        {vacancies.map((vac) => (
                            <AppCard
                                path={"vacancy.show"}
                                param={vac.id}
                                card={vac}
                            />
                        ))}
                    </div>

                    <AppList list={vacancies} />
                </AppPage>
            </MainLayout>
        </AuthContext.Provider>
    );
};

MainPage.propTypes = {};
