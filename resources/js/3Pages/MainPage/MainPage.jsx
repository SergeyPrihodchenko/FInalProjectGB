import s from "./MainPage.module.css";
import { fakerRU as faker } from "@faker-js/faker";
import propTypes from "prop-types";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { Banner } from "@/8Shared/Banner/Banner";
import { Search } from "@/8Shared/Search/Search";
import { Head } from "@inertiajs/react";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppCard from "@/8Shared/ui/AppCard/AppCard";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
import AppButton from "@/8Shared/ui/AppButton/AppButton";

const cardsInfo = [...Array(12)].map(() => {
    return {
        id: faker.string.nanoid(10),
        title: faker.person.jobType(),
        salary: `${faker.finance.amount({
            min: 30000,
            max: 100000,
            dec: 0,
        })} руб`,
        borderRight: `5px solid ${faker.color.rgb({ casing: "lower" })}`,
    };
});

const MainPage = ({ auth, categories, className, vacancies }) => {
    const user = auth?.user;
    console.log(vacancies);
    return (
        <MainLayout className={"app_light_theme"} user={user}>
            <Head title="Home" />
            <Banner
                imageUrl={`https://static.tildacdn.com/tild6138-6338-4363-a435-383636663665/b_591bf35ac97a1.jpg`}
            >
                <AppPage>
                    <AppText
                        bold
                        title={"Работа найдется для каждого"}
                        size="xl"
                        variant="secondary"
                        className={s.bannerTitle}
                    />
                    <Search
                        placeholder={"Профессия, должность, компания"}
                        vacancies={vacancies}
                    />
                </AppPage>
            </Banner>
            <AppPage>
                <div className="categoryContainer">
                    <AppText
                        bold
                        title={"Категории"}
                        size={"l"}
                        className={s.catTitle}
                    />
                    <div className={s.catList}>
                        {categories.map((cat) => (
                            <AppLink
                                path={"category.show"}
                                param={cat}
                                key={cat.id}
                            >
                                <AppCard
                                    variant="primary"
                                    width={"300px"}
                                    height={"200px"}
                                    shadow
                                    borderRadius
                                    borderLeft
                                    className={s.cardPadding}
                                >
                                    <AppText title={cat.title} size="m" />
                                </AppCard>
                            </AppLink>
                        ))}
                    </div>
                </div>

                <div className="vacancyContainer mb-[20px]">
                    <AppText
                        bold
                        title={"Вакансии"}
                        size={"l"}
                        className={s.vacTitle}
                    />
                    <div className={s.vacancyList}>
                        {vacancies.map((vac) => (
                            <AppLink
                                path={"vacancy.show"}
                                param={vac.id}
                                key={vac.id}
                            >
                                <AppCard
                                    width={"300px"}
                                    height={"200px"}
                                    variant="primary"
                                    shadow
                                    borderLeft
                                    borderRadius
                                    className={s.vacancyCard}
                                >
                                    <AppText title={vac.title} />
                                    <AppText text={`от ${vac.payment} руб.`} />
                                    <AppText
                                        size="s"
                                        variant="notaccented"
                                        text={`Опыт работы от ${vac.experience} лет`}
                                    />
                                    <AppButton
                                        className={s.vacancyBtn}
                                        width="auto"
                                        height="32px"
                                    >
                                        Откликнуться
                                    </AppButton>
                                </AppCard>
                            </AppLink>
                        ))}
                    </div>
                </div>
            </AppPage>
        </MainLayout>
    );
};

MainPage.propTypes = {};
export default MainPage;
